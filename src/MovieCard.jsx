
import './movieCard.css'

export default function MovieCard(props){

       
    return(
        <>
        <div className="movie-card">
            <img src={`https://image.tmdb.org/t/p/w500/${props.imageUrl}`} alt="" />
            <p>{props.movieTitle}</p>
            <p>props.rating</p>
        </div>
        
        
        </>
    )
}