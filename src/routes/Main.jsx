import React, { useMemo, useState, useCallback } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ProductCard from "../components/ProductCard.jsx";
import { CartProvider, useCart } from '../context/CartContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';


// Массив продуктов
const products = [
  {
    id: 0,
    name: "Nike Air Force 1`07",
    image: "https://static.street-beat.ru/upload/resize_cache/iblock/706/666_666_1/bm4g8iehc11lad9g6t8d2a0pw0y3ynqv.jpg",
    price: 12000,
    bonus: 1200,
  },
  {
    id: 1,
    name: "Nike Air Max Plus",
    image: "https://static.street-beat.ru/upload/resize_cache/iblock/7c8/666_666_1/1cgau03cjalvkfuwdf8my25icgnrp7m6.jpg",
    price: 27999,
    bonus: 2799
  }
]

// Корзина
const CartIcon = () => {
  const { cart, dispatch } = useCart();

  const handleClearCart = () => {
    dispatch({ type: 'CLEAR_CART' });
  };

  return (
    <div
      className="cart-icon position-fixed top-0 end-0 p-3"
      style={{ cursor: 'pointer' }}
      onClick={handleClearCart}
    >
      <span className="badge bg-danger rounded-pill">{cart.count}</span>
      <i className="bi bi-cart ms-2" style={{ fontSize: '1.5rem' }}></i>
    </div>
  );
};

const MainPage = () => {

  return (
    <CartProvider>
      <div className="container py-4">
        <CartIcon />
        <div className="row g-4">
          {products.map((product) => (
            <div key={product.id} className="col-12 col-md-6 col-lg-4">
              <ProductCard
                productId={product.id}
                productName={product.name}
                productImage={product.image}
                productPrice={product.price}
                productBonus={product.bonus}
              />
            </div>
          ))}
        </div>
      </div>
    </CartProvider>
  );
};

export default MainPage;