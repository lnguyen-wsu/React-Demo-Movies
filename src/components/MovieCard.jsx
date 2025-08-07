import '../css/MovieCard.css'

function MovieCard({movie}){
    const baseUrlImage = "https://image.tmdb.org/t/p/w500"
    function onFavoriteClick(){
        
    }

    return (
    <div className='movie-card'>
        <div className='movie-poster'>
            <img src={`${baseUrlImage}${movie.poster_path}`} alt={movie.title} />
            <div className='movie-overlay'>
                <button className='favorite-btn' onClick={onFavoriteClick}>
                    ♥
                </button>
            </div>
        </div>

        <div className='movie-info'>
            <h3>{movie.title}</h3>
            <p>{movie.release_date?.split("-")[0]}</p>
        </div>
    </div>
    )
}

export default MovieCard;