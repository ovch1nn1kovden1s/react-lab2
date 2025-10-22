import React, {useState, useEffect} from "react";
import './productCard.css';

const ProductCard = ({ productId, productName, productImage, productPrice, productBonus, addToCart }) => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 1000);
        return () => clearTimeout(timer);
    }, []);

    if (isLoading) {
        return <div className="product-card loading">Загрузка...</div>;
    }

    return (
        <div className="product-card">
            <p className="product-bonus">{productBonus}</p>
            <img src={productImage} className="product-image"/>
            <h2 className="product-name">{productName}</h2>
            <p className="product-price">{productPrice} ₽</p>
            <button onClick={() => addToCart(productId)} className="add-to-cart-button">
                 В корзину
            </button>
        </div>
    );
}

export default ProductCard;