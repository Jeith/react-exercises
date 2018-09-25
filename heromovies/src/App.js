import {connect} from 'react-redux';
import Movies from "./components/Movies";
import addMovie from './actions/addMovie';
import deleteMovie from './actions/deleteMovie';

function mapStateToProps(state){
  return{
    movieList: state.movieList
  }
}
function mapDispatchToProps(dispatch) {
  
  return {
    onAddMovie: (movieData) => dispatch(addMovie(movieData)),
    onDeleteMovie: (movieData) => dispatch(deleteMovie(movieData))
  }
}


var connectedComponent = connect(
  mapStateToProps,
  mapDispatchToProps
)(Movies);

export default connectedComponent