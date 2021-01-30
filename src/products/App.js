import React from "react";
import productsData from "./productsData";
import Product from "./Product";

function App(props) {
  const products = productsData.map((product) => (
    <div>
      <Product key={product.id} />
      <hr />
    </div>
  ));
  return <div>{products}</div>;
}

export default App;
