// src/components/ProductCard.js
import React, { useState, useEffect } from 'react';
import { useCart } from '../context/CartContext';
import './ProductCard.css';

const ProductCard = ({
  productId,
  productName,
  productImage,
  productPrice,
  productBonus,
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isPurchased, setIsPurchased] = useState(false);
  const { dispatch } = useCart();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  const handleAddToCart = () => {
    if (!isPurchased) {
      dispatch({ type: 'ADD_ITEM' });
      setIsPurchased(true);
    }
  };

  if (isLoading) {
    return <div className="product-card loading">Загрузка...</div>;
  }

  return (
    <div className="product-card border rounded shadow-sm p-3 h-100">
      <p className="product-bonus text-success fw-bold">{productBonus}</p>
      <img
        src={productImage}
        alt={productName}
        className="product-image img-fluid mb-2"
      />
      <h2 className="product-name h5">{productName}</h2>
      <p className="product-price fw-bold">{productPrice} ₽</p>
      <button
        onClick={handleAddToCart}
        className={`btn w-100 ${
          isPurchased
            ? 'btn-success disabled'
            : 'btn-primary add-to-cart-button'
        }`}
        disabled={isPurchased}
      >
        {isPurchased ? 'Куплено' : 'В корзину'}
      </button>
    </div>
  );
};

export default ProductCard;