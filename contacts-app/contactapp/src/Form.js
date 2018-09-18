import React from 'react';

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            name: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        
    }

    handleChange(e){
        this.setState({value: e.target.value});
        
    }

    handleSubmit(e){
        alert('form submitted');
        e.preventDefault();
        console.log('name ' + this.state.number);
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                Name: <input type="text" name="user" value={this.state.user} onChange={this.handleChange}></input><br></br>
                E-mail: <input type="text" name="email" value={this.state.email} onChange={this.handleChange}></input><br></br>
                Phone Number: <input type="text" name="number" value={this.state.number} onChange={this.handleChange}></input><br></br>
                Address: <input type="text" name="address" value={this.state.address} onChange={this.handleChange}></input><br></br>
                City: <input type="text" name="city" value={this.state.city} onChange={this.handleChange}></input><br></br>
                State: <input type="text" name="state" value={this.state.state} onChange={this.handleChange}></input><br></br>
                Zip Code: <input type="text" name="zip" value={this.state.zip} onChange={this.handleChange}></input><br></br>
                <input type="submit"/>
            </form>
        );
    }
}


export default Form
