import React from "react";
import SingleCard from "./SingleCard";

function Cards({ getData, img, prezzo, showDetail }) {
  return (
    <div id='container'>
      <h1>Seleziona un frutto</h1>
      <ul className='fruit-container'>
        {getData.map((product) => {
          return (
            <SingleCard
              key={product.id}
              img={img}
              prezzo={prezzo}
              product={product}
              showDetail={showDetail}
            />
          );
        })}
      </ul>
    </div>
  );
}

export default Cards;
