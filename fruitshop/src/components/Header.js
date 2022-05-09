import React from "react";

function Header({ product, cartOpen, cart }) {
  return (
    <>
      <div className='header'>
        <h2 style={{ fontSize: "25px" }}>Logo</h2>
        <button
          onClick={() => cartOpen(product)}
          style={{
            border: "2px solid #00000042",
            fontSize: "1rem",
            gap: "1rem",
            display: "flex",
            alignItem: "center",
            justifyContent: "center",
            padding: "3px",
          }}
        >
          <span>CART ({cart.length}) </span>{" "}
        </button>
      </div>
    </>
  );
}

export default Header;
