import React from 'react';
import './FourColGrid.css';

const FourColGrid = (props) =>
{
	return (
		<div className="rmdb-grid">
			{props.header && !props.loading ? <h1>{props.header}</h1> : null}
			<div className="rmdb-grid-content">

			</div>
		</div>
	)
}

export default FourColGrid;
