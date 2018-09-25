import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import ToggleDisplay from 'react-toggle-display';


const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    formControl: {
        margin: theme.spacing.unit,
    },
});

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state  = {
            allContacts: [],
            contact: {
                name: "Keith",
                phone: "12049201421",
                email: "me@gmail.com",
                address: "1410 asbury lane",
                city: "Houston",
                state: "TX",
                zip: "1421421"
            },
            name: '',
            phone: '',
            email: '',
            address: '',
            city: '',
            state: '',
            zipcode: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    handleSubmit(e){
        e.preventDefault();
        
        this.setState({
            newcontact: {
                name: this.state.name,
                number: this.state.number,
                email: this.state.email,
                address: this.state.address,
                city: this.state.city,
                state: this.state.state,
                zip: this.state.zip,
            }
        }, function(){
            console.log('form submitted ' + this.state.newcontact.name, this.state.newcontact.phone,
            this.state.newcontact.phone,
            this.state.newcontact.email,
            this.state.newcontact.address,
            this.state.newcontact.city );

            let tempContacts = this.state.allContacts;
            tempContacts.push(this.state.newcontact);
            this.setState({allContacts: tempContacts});
        })
        
        
    }

    handleChange(e){

        this.setState({value: e.target.value});
    }
    handleClick() {
        this.setState({
          show: !this.state.show
        });
    }
    render() {
        let constactList = this.state.allContacts.map(contact =>{
            return <p key={contact.name}>{contact.name} <br/> {contact.email} <br/> {contact.number}  <br/> <ToggleDisplay if={this.state.show} tag="section"> {contact.address} <br/> {contact.city} <br/> {contact.state} <br/> {contact.zip}</ToggleDisplay> <button onClick={ () => this.handleClick() }>Show More</button>
            </p>
        })

        const { classes } = this.props;

        return (
        <div className={classes.container}>
    
        <form onSubmit={this.handleSubmit}>
            <FormControl className={classes.formControl}>
            {/* <input type="text" name="nameofPerson" value={this.state.nameOfPerson} onChange={this.handleChange} /> */}
                <InputLabel htmlFor="name-simple">Name</InputLabel>
                <Input id="name-simple" name="namePerson" onChange={e => this.setState({name: e.target.value} )} />
            </FormControl>
            <FormControl className={classes.formControl} aria-describedby="name-helper-text">
                <InputLabel htmlFor="name-helper">Email</InputLabel>
                <Input id="name-helper" name="email" onChange={e => this.setState({email: e.target.value} )} />
            </FormControl>
            <FormControl className={classes.formControl} >
                <InputLabel htmlFor="name-simple">Phone Number</InputLabel>
                <Input id="name-simple"   onChange={e => this.setState({number: e.target.value} )} />
            </FormControl>
            <FormControl className={classes.formControl} >
                <InputLabel htmlFor="name-simple">Address</InputLabel>
                <Input id="name-simple" onChange={e => this.setState({address: e.target.value} )}  />
            </FormControl>
            <FormControl className={classes.formControl} >
                <InputLabel htmlFor="name-simple">City</InputLabel>
                <Input id="name-simple" onChange={e => this.setState({city: e.target.value} )} />
            </FormControl>
            <FormControl className={classes.formControl} >
                <InputLabel htmlFor="name-simple">State</InputLabel>
                <Input id="name-simple" onChange={e => this.setState({state: e.target.value} )}  />
            </FormControl>
            <FormControl className={classes.formControl} >
                <InputLabel htmlFor="name-simple">Zip Code</InputLabel>
                <Input id="name-simple" onChange={e => this.setState({zip: e.target.value} )}  />
            </FormControl>
            <br />
            <Button type="submit" value="submit" variant="contained" onClick={this.handleSubmit.bind(this)} className={classes.button} style={{marginTop: '20px'}}>
                Submit
            </Button>
        </form>
        <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', margin: '0 auto'}}>
        <h1>Contact List: </h1>
        <div style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap'}}>
        {this.state.contact.name} <br />
        {this.state.contact.city} <br />
        {this.state.contact.state} <br />
        {this.state.contact.email} <br />
        {this.state.contact.phone} <br />
        {this.state.contact.address} <br />
        {this.state.contact.zip} <br />
            {constactList}
        </div>
        </div>
        </div>
        );
    }
}
export default withStyles(styles)(Form);