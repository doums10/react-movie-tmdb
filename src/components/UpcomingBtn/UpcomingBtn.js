import React from "react";
import "./UpcomingBtn.css";

const UpcomingBtn = (props) => {
  return (
    <div className="rmdb-upcomingbtn" onClick={props.onClick}>
      <p>{props.text}</p>
    </div>
  );
};

export default UpcomingBtn;
