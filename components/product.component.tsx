import Link from "next/link";
import React from "react";

function ProductComponent({ product }: any) {
  return (
    <div className="container">
      <div className="row">
        <div className="col-5">
          <img width={"100%"} src={product.image} alt={product.name} />
        </div>
        <div className="col">
          <p className="fs-2 mt-5">{product.name}</p>
          <p className="fs-3">Price: ${product.price}</p>
          <p className="fs-3">Quantity: {product.quantity}</p>
        </div>
      </div>
    </div>
  );
}

export default ProductComponent;
