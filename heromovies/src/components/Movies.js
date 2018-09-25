import React, { Component } from 'react';
import AddMovie from './AddMovie'
import '../index.css'

class Movies extends Component {
    constructor(props) {
        super(props);
        
    }

    render() {
        return (
            <div>
            <div style={{backgroundColor: 'black', fontSize: '15px', color: 'white', textAlign: 'center', width: '100vw'}}>
                <h1 style={{fontFamily: 'helvetica'}}>Movie Posters</h1>
            </div>
            <AddMovie addMovie={this.props.onAddMovie}/>
            <br />
            {/* <div style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-around'}}> */}
                <div style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-around'}}>
                {
                    this.props.movieList.map(movieData =>{
                    return <div><img src={movieData.moviePoster} style={{width: '200px'}}/> <br />
                        <div  style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
                            {movieData.movieName}
                            <button onClick={() => {this.props.onDeleteMovie(movieData)}}>X</button></div></div>
                    })
                }
                </div>
                {/* <div style={{display: 'flex', flexDirection: 'column'}}>
                    <img src="https://upload.wikimedia.org/wikipedia/en/9/98/Coco_%282017_film%29_poster.jpg" />
                    <h1> Coco </h1>
                </div>
                <div style={{display: 'flex', flexDirection: 'column'}}>
                    <img src="https://upload.wikimedia.org/wikipedia/en/9/98/Coco_%282017_film%29_poster.jpg" />
                    <h1> Coco </h1>
                </div> */}
            </div>
            // </div>
        );
    }
}

export default Movies;