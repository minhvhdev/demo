import { AppProps } from "next/app";
import Link from "next/link";
import React, { ReactPropTypes } from "react";

function ProductComponent({ product }: any) {
  return (
    <div className="container">
      <Link href="/">
        <a>Home</a>
      </Link>
      <div className="row">
        <div className="col-5">
          <img width={"100%"} src={product.image} alt={product.name} />
        </div>
        <div className="col">
          <p className="fs-2 mt-5">{product.name}</p>
          <p className="fs-3">{product.price}</p>
        </div>
      </div>
    </div>
  );
}

export default ProductComponent;
