/* eslint-disable no-unused-vars */
import React from 'react';
import { API_URL, API_KEY, IMAGE_BASE_URL, BACKDROP_SIZE, POSTER_SIZE } from '../../config';
import HeroImage from '../HeroImage/HeroImage';
import SearchBar from '../SearchBar/SearchBar';
import FourColGrid from '../FourColGrid/FourColGrid';
import MovieThumb from '../MovieThumb/MovieThumb';
import LoadMoreBtn from '../LoadMoreBtn/LoadMoreBtn';
import Spinner from '../Spinner/Spinner';
import './Home.css';
import { render } from '@testing-library/react';

function Home()
{
	state = {
		movies: [],
		heroImage: null,
		loading: false,
		currentPage: 0,
		totalPages: 0,
		searchTerm: ''

	}
	render(){
		return (
			<div className="rmdb-home">
				<HeroImage />
				<SearchBar />
				<FourColGrid />
				<Spinner />
				<LoadMoreBtn />

			</div>
		)
	}
}

export default Home;
