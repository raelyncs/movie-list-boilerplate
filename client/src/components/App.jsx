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
    this.setState({searchResults: undefined});
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
    this.setState({searchResults: undefined});
    var filtered = this.state.movieData.filter(movie => {
      return movie.title.toLowerCase().includes(this.state.searchMovie)
    })
    if(filtered.length === 0) {
      filtered.push({title: 'No Movie Found'})
    }
    // set state to be the new array
    this.setState({searchResults: filtered})
  }

  render(){
    // data to map variable
    var listToRender = (this.state.searchResults === undefined ) ? this.state.movieData : this.state.searchResults;
    // if this.state.searchResults are undefined
      // listToRender is this.state.movieData
    // otherwise: render this.state.searchresults
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
            {listToRender.map((movie, index) => (<MovieList key={index} movie={movie}/>))}
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
