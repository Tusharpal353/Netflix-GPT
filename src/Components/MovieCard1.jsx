const MovieCard1 = ({ movie }) => {
    return (
      <div className="card m-2 p-2 bg-gray-800 text-white w-44 h ">
        <img src={movie.Poster} alt={movie.Title} className="w-full h-48 object-cover" />
        <div className="p-2 " >
          <h2 className="text-xl font-bold">{movie.Title}</h2>
        </div>
      </div>
    );
  };
  export default MovieCard1;