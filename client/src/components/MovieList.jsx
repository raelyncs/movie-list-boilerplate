import React from 'react';

var MovieList = (props) => {
  return(
    <li>{props.movie.title}</li>
  )
}

export default MovieList

// var MovieList = (props) => {
//   console.log(props);
//   return(
//     {props.movies.map((movie) => {
//       <li>{movie.title}</li>
//     })}
//   )
// }