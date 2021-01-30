import React from "react";
import productsData from "./productsData";
import Product from "./Product";

function App(props) {
  const products = productsData.map((product) => (
    <div>
      <Product
        key={product.id}
        id={product.id}
        name={product.name}
        price={product.price}
        description={product.description}
      />
      <hr />
    </div>
  ));
  return <div>{products}</div>;
}

export default App;
