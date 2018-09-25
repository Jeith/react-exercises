function deleteMovie(item){
    return {
        type: "deleteMovie",
        movieData: {
            movieName: item.movieName,
            moviePoster: item.moviePoster
        }
    }
}

export default deleteMovie;