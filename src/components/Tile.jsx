import React from "react";

function Tile(props) {
  const picture = require(`../assets/img/logo/${props.skill}.webp`);
  return (
    <div className="skills__tile">
      <img className="skills__picture" src={picture} alt={props.skill} />
    </div>
  );
}

export default Tile;
