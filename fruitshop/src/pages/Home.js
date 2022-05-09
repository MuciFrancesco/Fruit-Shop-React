import React, { useState, useEffect } from "react";
import axios from "axios";
import Cards from "../components/Cards";
import CardDetail from "../components/CardDetail";
import ananas from "../assets/ananas.png";
import Header from "../components/Header";
import Cart from "../components/Cart";

const url = " https://www.fruityvice.com/api/fruit/all";
const img = ananas;
const prezzo = 5;

function Home() {
  const [getData, setGetData] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get(url);
        setGetData(response.data.splice(0, 8));
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  const [openDetails, SetOpenDetails] = useState(false);
  const [product, setProduct] = useState();

  const handleDatail = (product) => {
    SetOpenDetails(true);
    setProduct(product);
  };
  const closeDetail = () => {
    SetOpenDetails(false);
  };

  const [newArray, setNewArray] = useState([]);

  const addToCart = (product) => {
    setNewArray([...newArray, { ...product }]);
  };
  const removeToCart = (productToRemove) => {
    setNewArray(newArray.filter((product) => product !== productToRemove));
  };

  const [openCart, setOpenCart] = useState(false);
  const [cartProducts, setCartProducts] = useState();

  const cartOpen = (products) => {
    setOpenCart(true);
    setCartProducts(products);
  };
  const closeCart = () => {
    setOpenCart(false);
  };

  return (
    <>
      <Header cartOpen={cartOpen} product={product} cart={newArray}></Header>
      {openCart === true && (
        <Cart
          products={newArray}
          prezzo={prezzo}
          img={img}
          closeCart={closeCart}
          removeToCart={removeToCart}
        ></Cart>
      )}
      <div
        id='bg-cards'
        className={`${openDetails || openCart ? "bg-change" : ""}`}
      ></div>
      <Cards
        key={getData.id}
        getData={getData}
        img={img}
        prezzo={prezzo}
        showDetail={handleDatail}
      ></Cards>
      {openDetails === true && (
        <CardDetail
          img={img}
          prezzo={prezzo}
          product={product}
          closeDetail={closeDetail}
          addToCart={addToCart}
        />
      )}
    </>
  );
}

export default Home;
