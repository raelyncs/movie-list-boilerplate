import React from 'react';
import MovieList from './MovieList.jsx'
import movieData from '../movieData.js'

class App extends React.Component{
  constructor(props){
    super(props)

    this.state = {
      movieData: movieData,
      newMovie: '',
      searchMovie: '',
      searchResults: undefined
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleAddMovie = this.handleAddMovie.bind(this);
    this.handleSearchMovie = this.handleSearchMovie.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleAddMovie(){
    event.preventDefault();
    var newAddedMovie = {
      title: this.state.newMovie
    }
    this.setState({
      movieData: this.state.movieData.concat(newAddedMovie),
      newMovie: ''
    })
  }

  handleSearchMovie(){
    event.preventDefault()
    var newSearchMovie = this.state.searchMovie;

    // result array
    var result = [];
    // iterate through the movieData
    for (var i = 0; i < this.state.movieData.length; i++) {
      // if current movie title matches target search
      if(this.state.movieData[i].title.toLowerCase().indexOf(this.state.searchMovie.toLowerCase()) !== -1) {
        // push movie to a new array
        result.push(this.state.movieData[i]);
      }
    }
    if(result.length === 0) {
      result.push({title: 'No Movie Found'})
    }
    // set state to be the new array
    this.setState({movieData: result})
  }

  render(){
    return(
      <div>
        <h1>MovieList</h1>
        <form>
            <label>
              <input name='searchMovie' value={this.state.searchMovie} onChange={this.handleChange}/>
            </label>
            <button onClick={this.handleSearchMovie}>Search Movies</button>
        </form>
          <ul>
            {this.state.movieData.map((movie, index) => (<MovieList key={index} movie={movie}/>))}
          </ul>
          <form>
            <label>
              <input name='newMovie' value={this.state.newMovie} onChange={this.handleChange}/>
            </label>
            <button onClick={this.handleAddMovie}>Add Movies</button>
          </form>
      </div>
    )
  }
};

export default App;

{/* <MovieList movies={this.state.movieData}/> */}
