import React, { useMemo, useState, useCallback } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ProductCard from "../components/productCard.jsx";
import productImage1 from "../assets/productImages/NikeAirForce1`07.jpg";

const MainPage = () => {

  return (
    <>
      <div className="main">
        <div className="main__container">
            <ProductCard
                productId={1}
                productName="Nike Air Force 1`07"
                productImage={productImage1}
                productPrice={1000}
                productBonus={100}
                addToCart={(id) => console.log(`Added product ${id} to cart`)}
            />
        </div>
      </div>
    </>
  );
};

export default MainPage;