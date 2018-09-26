function deleteProduct(product){

    return{
        type: 'deleteMovie',
        movieData: product
    }
}

export default deleteProduct