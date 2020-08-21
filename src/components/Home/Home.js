/* eslint-disable no-unused-vars */
import React from 'react';
import HeroImage from '../HeroImage/HeroImage';
import SearchBar from '../SearchBar/SearchBar';
import FourColGrid from '../FourColGrid/FourColGrid';
import MovieThumb from '../MovieThumb/MovieThumb';
import LoadMoreBtn from '../LoadMoreBtn/LoadMoreBtn';
import Spinner from '../Spinner/Spinner';
import './Home.css';

function Home() {
	return (
		<div className="rmdb-home">
			<HeroImage />
			<SearchBar />
			<FourColGrid />
			<Spinner/>
			<LoadMoreBtn />
			
		</div>
	)
}

export default Home;
