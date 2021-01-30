import React from "react";

function Product(props) {
  return (
    <div>
      <p>Id: {props.id}</p>
      <p>Name: {props.name}</p>
      <p>Price: {props.price}</p>
      <p>Description: {props.description}</p>
    </div>
  );
}

export default Product;
