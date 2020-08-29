/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import { API_URL, API_KEY, IMAGE_BASE_URL, BACKDROP_SIZE, POSTER_SIZE } from '../../config';
import HeroImage from '../HeroImage/HeroImage';
import SearchBar from '../SearchBar/SearchBar';
import FourColGrid from '../FourColGrid/FourColGrid';
import MovieThumb from '../MovieThumb/MovieThumb';
import LoadMoreBtn from '../LoadMoreBtn/LoadMoreBtn';
import Spinner from '../Spinner/Spinner';
import './Home.css';

class Home extends Component
{
  state = {
    movies: [],
    heroImage: null,
    loading: false,
    currentPage: 0,
    totalPages: 0,
    searchTerm: ''
  }

  componentDidMount()
  {
    this.setState({ loading: true });
    //affichage des films populaires sur la page d'accueil
    //pour changer langue affiche et résumé film --> mettre fr-FR
    const endpoint = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=1`;
    this.fetchItems(endpoint);
  }

  searchItems = (searchTerm) =>
  {
    console.log(searchTerm);
    let endpoint = '';
    this.setState({
      movies: [],
      loading: true,
      searchTerm
    })

    if (searchTerm === '')
    {
      endpoint = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=1`;
    } else
    {
      endpoint = `${API_URL}search/movie?api_key=${API_KEY}&language=en-US&query=${searchTerm}`;
    }
    this.fetchItems(endpoint);
  }
  //variable pour afficher autre films en cliquant sur le bouton load more
  loadMoreItems = () =>
  {
    let endpoint = '';
    this.setState = ({ loading: true });

    if (this.state.searchTerm === '')
    {
      endpoint = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=${this.state.currentPage + 1}`;
    } else
    {
      endpoint = `${API_URL}search/movie?api_key=${API_KEY}&language=en-US&query${this.state.searchTerm}&page=${this.state.currentPage + 1}`;
    }
    this.fetchItems(endpoint);
  }

  fetchItems = (endpoint) =>
  {
    fetch(endpoint)
      .then(result => result.json())
      .then(result =>
      {
        this.setState({
          movies: [...this.state.movies, ...result.results],
          heroImage: this.state.heroImage || result.results[0],
          loading: false,
          currentPage: result.page,
          totalPages: result.total_pages,
        })
      })
      .catch(error => console.error('Error:', error))
  }


  render()
  {
    return (
      //image principale d'accueil ,texte et titre film qui arrive en premier dans les results
      <div className="rmdb-home">
        {this.state.heroImage ?
          <div>
            <HeroImage
              image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${this.state.heroImage.backdrop_path}`}
              title={this.state.heroImage.title}
              text={this.state.heroImage.overview}
            />
            <SearchBar callback={this.searchItems} />
          </div> : null}
        <div className="rmdb-home-grid">
        {/*texte au dessus de la grille des films populaires ou de la recherche de films*/}
          <FourColGrid
            header={this.state.searchTerm ? 'Search Result' : 'Popular Movies'}
            loading={this.state.loading}
          >
            {this.state.movies.map((element, i) =>
            {
              return <MovieThumb
                key={i}
                clickable={true}
                image={element.poster_path ? `${IMAGE_BASE_URL}${POSTER_SIZE}${element.poster_path}` : '../../images/no-image.jpg'}
                movieId={element.id}
                movieName={element.title}
                />      

            })}
          </FourColGrid>
        </div>
        <Spinner />
        <LoadMoreBtn />
      </div>
    )
  }
}

export default Home;
