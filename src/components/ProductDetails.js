import React from "react";
import { useParams, useHistory, Redirect } from "react-router-dom";

import products from "../data/products.json";

const ProductDetails = () => {
  const { id } = useParams();

  const history = useHistory();

  const selectedProduct = products.find(
    (product) => product.id === parseInt(id)
  );

  const productListWrap = {
    maxWidth: "600px",
    marginLeft: "auto",
    marginRight: "auto",
  };

  const productListHeader = {
    display: "flex",
    justifyContent: "space-evenly",
    marginBottom: "10px",
  };

  const productItemWrap = {
    border: "2px solid black",
    padding: "10px",
    marginBottom: "30px",
  };

  return (
    <div style={productListWrap}>
      {!selectedProduct ? (
        <Redirect to="/404" />
      ) : (
        <>
          <div style={productItemWrap}>
            <div style={productListHeader}>
              <div>{selectedProduct.title}</div>
            </div>
            <div>Rating: {selectedProduct.rating}</div>
            <div>Description: {selectedProduct.description}</div>
            <div>Type: {selectedProduct.type}</div>
            <div>Weight: {selectedProduct.weight}g</div>
            <div>£{selectedProduct.price.toFixed(2)}</div>
          </div>
          <button
            onClick={() => {
              history.goBack();
            }}
          >
            Go back
          </button>
          <button
            onClick={() => {
              history.goForward();
            }}
          >
            Forward
          </button>
        </>
      )}
    </div>
  );
};

export default ProductDetails;
