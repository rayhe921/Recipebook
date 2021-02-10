import React from "react";
import "./style.css";


function Card(props){
    return (
<div class="card CardDim">
  <img src="..." class="card-img-top" alt="..."></img>
  <div class="card-body">
    <h5 class="card-title">{props.title}</h5>
    <p class="card-text">{props.text}</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
)
};

export default Card;

