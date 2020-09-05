import React, { Component } from 'react';
import { API_KEY, API_URL } from '../../config';
import Navigation from '../Navigation/Navigation';
import MovieInfo from '../MovieInfo/MovieInfo';
import MovieInfoBar from '../MovieInfoBar/MovieInfoBar';
import FourColGrid from '../FourColGrid/FourColGrid';
import Actor from '../Actor/Actor';
import Spinner from '../Spinner/Spinner';
import './Movie';

class Movie extends Component
{
  state = {
    movie: null,
    actors: null,
    directors: [],
    loading: false
  }

  componentDidMount()
  {
    this.setState({ loading: true })
    //First fetch the movie 
    const endpoint = `${API_URL}movie/${this.props.match.params.movieId}?api_key=${API_KEY}&language=en-US`;
    this.fetchItems(endpoint);
  }

  fetchItems = (endpoint) =>
  {
    fetch(endpoint)
      .then(result => result.json())
      .then(result =>
      {
        console.log(result);
        if (result.status_code)
        {
          this.setState({ loading: false });
        } else
        {
          this.setState({ movie: result }, () =>
          {
            // ...then fetch actors in the setState callback function
            const endpoint = `${API_URL}movie/${this.props.match.params.movieId}/credits?api_key=${API_KEY}`
            fetch(endpoint)
              .then(result => result.json())
              .then(result =>
              {
                const directors = result.crew.filter((member) => member.job === "Director");

                this.setState({
                  actors: result.cast,
                  directors,
                  loading: false
                })
              })
          })
  }
})
   //.catch (error => console.error('Error:', error))
  };

render()
{
  return (
    <div className="rmdb-movie">
      <Navigation />
      <MovieInfo />
      <MovieInfoBar />

      <Spinner />
    </div>
  )
}
}

export default Movie;
