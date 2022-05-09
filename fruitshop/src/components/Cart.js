import React from "react";
import { FaTrashAlt } from "react-icons/fa";

function Cart({ img, prezzo, products, closeCart, removeToCart }) {
  return (
    <div className='cart'>
      <h2>Carrello</h2>
      {products.map((item, index) => {
        return (
          <>
            <div className='products-shop' key={index}>
              <img className='cart-img' src={img} alt={item.name}></img>
              <h4>
                {item.name}
                <span>{prezzo}$</span>
              </h4>
              <button
                className='remove-to-cart-btn'
                onClick={() => removeToCart(item)}
              >
                {" "}
                <FaTrashAlt className='delete-cart-svg' fill='blue' />{" "}
              </button>
            </div>
          </>
        );
      })}
      <button className='close-cart-btn' onClick={() => closeCart()}>
        Chiudi
      </button>
    </div>
  );
}

export default Cart;
