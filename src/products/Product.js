import React from "react";

function Product(props) {
  return (
    <div>
      <p>Id: {props.id}</p>
      <p>Name: {props.name}</p>
      <p>Price: {props.price}</p>
    </div>
  );
}

export default Product;
