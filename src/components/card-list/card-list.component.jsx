import React from "react";
import CardItem from "../card-item/card-item.component";
import "./card-list.style.css";

const CardList = (props) => {
  const { monsters, loading } = props;
  return (
    <div>
      {monsters.length === 0 && loading && <h3>Loading...</h3>}
      {monsters.length === 0 && loading === false && <h3>No Result!</h3>}
      <div className="card-list">
        {monsters.length >= 0 &&
          monsters.map((monster) => (
            <CardItem key={monster.id} monster={monster} />
          ))}
      </div>
    </div>
  );
};

export default CardList;
