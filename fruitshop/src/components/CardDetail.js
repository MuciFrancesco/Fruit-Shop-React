import React from "react";

function CardDetail({ product, closeDetail, img, prezzo, addToCart }) {
  return (
    <div className='details'>
      <div className='description'>
        <div className='description-img'>
          <img src={img} alt={product.name}></img>
        </div>
        <div className='description-text'>
          <h3>{product.name}</h3>
          <p>
            lorem ipsum dolor sit amet consecutor elit sed do eluidsf dsfdf
            dfdsfdsifhjds idshj fidshfdsfihdsifhdsih dis hfdsifhdis hfdisf
            hidshf i hifsdhfidshdis hfdishfidsds ihfdsifhd
          </p>
        </div>
      </div>
      <h3>
        Prezzo: <span>{prezzo}$</span>
      </h3>
      <div className='btn-group'>
        <button onClick={() => closeDetail()}>Chiudi</button>
        <button onClick={() => addToCart(product)}>Acquista</button>
      </div>
    </div>
  );
}

export default CardDetail;
