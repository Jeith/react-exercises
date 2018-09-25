function addMovie(item){

    return {
        type: "addMovie",
        movieData: {
            movieName: item.movieName,
            moviePoster: item.moviePoster
        }
    }
}

export default addMovie