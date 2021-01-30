import React from "react";
import productsData from "./productsData";
import Product from "./Product";

function App(props) {
  const products = productsData.map((product) => <Product key={product.id} />);
  return <div>{products}</div>;
}

export default App;
