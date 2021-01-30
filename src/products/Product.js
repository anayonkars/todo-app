import React from "react";

function Product(props) {
  return (
    <div>
      {props.id ? <p>Id: {props.id}</p> : <p>There is no id</p>}
      {props.name ? <p>Name: {props.name}</p> : <p>There is no name</p>}
      {props.price ? (
        <p>
          Price:
          {props.price.toLocaleString("en-US", {
            style: "currency",
            currency: "USD",
          })}
        </p>
      ) : (
        <p>There is no price</p>
      )}
      {props.description ? (
        <p>Description: {props.description}</p>
      ) : (
        <p>There is no description</p>
      )}
    </div>
  );
}

export default Product;
