import React from 'react';
import Movie from './Movie';


class Cart extends React.Component {
    constructor(props) {
        super(props);
        console.log(this.props.movieName)
    }
    componentWillReceiveProps(nextProps){
        console.log(nextProps)
    }

    render() {
        return (
            <div>
                {/* <div style={{backgroundColor: 'black', fontSize: '15px', color: 'white', textAlign: 'center', width: '100vw'}}>
                    <img src="https://mbtskoudsalg.com/images/movie-ticket-clipart-png-8.png" width="15%"/>
                </div>
                < br/> */}
                <table>
                    <thead>
                        <th>Movie</th>
                        <th>Movie Price</th>
                        <th>#</th>
                    </thead>
                    <tbody>
                        
                        <td>{this.props.movieName}</td>
                        <td>{this.props.price}</td>
                        <button>X</button>
                    </tbody>
                </table>
            </div>
        );
    }
}


export default Cart