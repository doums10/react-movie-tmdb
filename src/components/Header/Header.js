import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

function Header()
{
	return (
		<div className="rmdb-header">
			<div className="rmdb-header-content">
			<Link to="/" >
					<img src="../../images/reactMovie_logo.png" alt="rmdb.logo" className="rmdb-logo"/>
      </Link>    
					<img src="../../images/tmdb_logo.png" alt="tmdb-logo" className="rmdb-tmdb-logo"/>
			</div>
		</div>
	)
}

export default Header;
