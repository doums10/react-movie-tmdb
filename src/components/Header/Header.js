import React from 'react';
import './Header.css';

function Header()
{
	return (
		<div className="rmdb-header">
			<div className="rmdb-header-content">
					<img src={require('/Users/doums/code/doums10/react-movie-tmdb/src/images/reactMovie_logo.png')} alt="rmdb.logo" className="rmdb-logo"/>
					<img src={require('/Users/doums/code/doums10/react-movie-tmdb/src/images/tmdb_logo.png')} alt="tmdb-logo" className="rmdb-tmdb-logo"/>
			</div>
		</div>
	)
}

export default Header
