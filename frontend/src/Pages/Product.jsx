import React, { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";
import { useParams } from "react-router-dom";
import Breadcrum from "../Components/Breadcrums/Breadcrum";
import ProductDisplay from "../Components/ProductDisplay/ProductDisplay";
import DescriptionBox from "../Components/DescriptionBox/DescriptionBox";
import RelatedProducts from "../Components/RelatedProducts/RelatedProducts";

const Product = () => {
  const { products } = useContext(ShopContext);
  const { productId } = useParams();
  const product = products.filter((e) => e.id === Number(productId));
  console.log(product);
  console.log(products);

  return (
    <div>
      <Breadcrum product={product[0]} />
      <ProductDisplay product={product[0]} />
      <DescriptionBox />
      <RelatedProducts />
    </div>
  );
};

export default Product;
