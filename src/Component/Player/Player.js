import React from "react";

const Player = (props) => {
    // console.log(props.img)
  return (
   
      <div className="player d-flex align-items-center">
        <img src={props.img} alt="" />
        <h4>{props.name}</h4>
      </div>
    
  );
};

export default Player;
