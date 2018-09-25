function movieReducer(state, action) {
    if (state === undefined) {
      return { 
        movieList: [
            {
                movieName: "Coco",
                moviePoster: 'https://images-na.ssl-images-amazon.com/images/I/81FZFvGhSVL._SY679_.jpg'
            },
            {
                movieName: "Ponyo",
                moviePoster: 'https://i.pinimg.com/originals/4a/6a/85/4a6a8584ade1cca6735cbcb529a50690.jpg'
            },
            {
                movieName: "Howl's Moving Castle",
                moviePoster: 'https://fanart.tv/fanart/movies/4935/movieposter/howls-moving-castle-54c29e2d6a05b.jpg'
            }
        ]
        
      };
    }

    switch(action.type){
        case "addMovie":
        return{
            ...state,
            movieList: [
                ...state.movieList,
                {
                    movieName: action.movieData.movieName,
                    moviePoster: action.movieData.moviePoster
                }
            ] 
        }
        
        case "deleteMovie":

            const updatedArray =  state.movieList.filter( product =>
                {
                    return product.movieName !== action.movieData.movieName
                }
            )

            return{
                ...state,
                movieList: updatedArray

            }
        default:
            return (state)
    }
}

export default movieReducer;