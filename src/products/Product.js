import React from "react";

function Product(props) {
  return (
    <div>
      <p>Id: {props.id}</p>
      <p>Name: {props.name}</p>
    </div>
  );
}

export default Product;
