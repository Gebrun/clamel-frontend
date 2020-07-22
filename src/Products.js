import React, { useContext, useEffect, useState } from "react";
import Nav from "./Nav";
import Footer from "./Footer";
import AppContext from "./AppContext";

const Products = () => {

  const [globalState, setGlobalState] = useContext(AppContext);
  const [state, setState] = useState({products:[]})

  useEffect(
    () => {
      // only fetch products if and when the user logs in
      if(globalState.loggedIn === true) {
        fetch(`${process.env.REACT_APP_API_URL}products`)
        .then(
          (result)=>result.json()
        )
        .then (
          (json)=> {
            setState(
              {
                ...state,
                products: json.products
              }
            )
          }
        );
      }
    },
    [ globalState.loggedIn ]
  )

  return (
    <div>
      <Nav />
      <div>
        <header id="product-design" className="grid">
          <div className="bg-image4"></div>
          <div className="content-wrap">
            <h1 className="product-title">
              Some of our upcoming{" "}
              <span className="clamel-red">
                <b>Products</b>
              </span>{" "}
              at Clamel Design
            </h1>
            <p>
              Our products are expected to arrive soon! Stay connected and tuned
              in for future updates.
            </p>
            <br/>
            <br/>
            <p className="scroll">Scroll down to view our future products...</p>
          </div>
        </header>
        <section id="section-b1" className="grid">
        <ul>
          <li>
            <div className="card">
              <img src="https://images.pexels.com/photos/3747082/pexels-photo-3747082.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="Kitchen" />
              <div className="card-content1">
                <h3 className="card-title">Luxurious coffee tables</h3>
                <p>
                  Like everyone else who makes the mistake of getting older, you should begin your day at your desired coffee table.<br />
                  <br />
                </p>
              </div>
              <a href="https://codepen.io/Gebrun/full/yLeZzqJ">
                <button className="card-btn11">Inquire product</button>
              </a>
            </div>
          </li>
          <li>
            <div className="card">
              <img src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" alt="Kitchen" />
              <div className="card-content1">
                <h3 className="card-title">Sofas and Armchairs</h3>
                <p>
                  Watching too much TV or love to spend time with your beloved ones during the day? Here's the best of our Sofas. <br />
                  <br />
                </p>
              </div>
              <a href="https://codepen.io/Gebrun/full/yLeZzqJ">
                <button className="card-btn22">Inquire product</button>
              </a>
            </div>
          </li>
          <li>
            <div className="card">
              <img src="https://images.pexels.com/photos/310435/pexels-photo-310435.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="Kitchen" />
              <div className="card-content1">
                <h3 className="card-title">Wall Decoration</h3>
                <p>
                Office Wall Art, Office Decor, Inspirational Wall Art.<br />
                  <br />
                  <br/>
                  <br/>
                </p>
              </div>
              <a href="https://codepen.io/Gebrun/full/yLeZzqJ">
                <button className="card-btn33">Inquire product</button>
              </a>
            </div>
          </li>
        </ul>
        </section>
        </div>
      <Footer/>
    </div>
  );
};

export default Products;
