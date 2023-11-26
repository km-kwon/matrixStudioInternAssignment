import Body from "./listCardStyle";
import { useEffect, useState } from "react";

function Card(data) {
  return (
    <Body>
      <div id="imageContainer">
        <img
          src={`https://image.veenoverse.com${data.data.image.thumb}`}
          alt="ad"
        />
      </div>
      <div id="itemExplain">
        <div id="name">{data.data.name}</div>
        <div className="priceIdContainer">
          <span id="price">${data.data.price.value}</span>
          <span id="volume">{data.data.volume}ml</span>
        </div>
        <div className="tag">
          <span>{data.data.vintage}</span>
          <span>{data.data.country.name}</span>
        </div>
      </div>
    </Body>
  );
}
export default Card;
