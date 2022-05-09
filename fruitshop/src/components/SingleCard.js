import React from "react";

function SingleCard({ product, showDetail, img, prezzo }) {
  return (
    <>
      <li className='fruit'>
        <a>
          <img className='img-cards' src={img} alt='img'></img>
          <h2>
            <span>{product.name}:</span> {prezzo}$
          </h2>
          <p>Lorem ipsum...</p>
          <button
            className='btn-show-details'
            onClick={() => showDetail(product)}
          >
            Dettagli
          </button>
        </a>
      </li>
    </>
  );
}

export default SingleCard;
