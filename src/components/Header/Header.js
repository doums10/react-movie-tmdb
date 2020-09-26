import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import Logo from "../../images/reactMovie_logo.png";
import Logo2 from "../../images/tmdb_logo.png";

function Header()
{
	return (
		<div className="rmdb-header">
			<div className="rmdb-header-content">
			<Link to="/" >
					<img src={Logo} alt="rmdb.logo" className="rmdb-logo"/>
      </Link>    
					<img src={Logo2} alt="tmdb-logo" className="rmdb-tmdb-logo"/>
			</div>
		</div>
	)
}

export default Header;
