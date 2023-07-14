import React from 'react';
import {Link} from "react-router-dom";

import './cart.css';

function Cart() {
    return (
        <div>
        <header id="site-header">
          <div className="container">
            <h1>Shopping cart </h1>
          </div>
        </header>
        <div className="container">
          <section id="cart"> 
            <article className="product">
              <header>
                <a className="remove">
                  <img src="./images/curology-DGH1u80sZik-unsplash.jpg" alt="" />
                  <h3>Remove product</h3>
                </a>
              </header>
              <div className="content">
                <h1>Curology Body Lotion</h1>
                Achieve flawless coverage and nourish your skin with our lightweight formula infused with skin-loving ingredients. Enhance your natural beauty with confidence.
                <div title="You have selected this product to be shipped in the color yellow." style={{top: 0}} className="color yellow" />
                <div style={{top: '43px'}} className="type small">XXL</div>
              </div>
              <footer className="content">
                <span className="qt-minus">-</span>
                <span className="qt">2</span>
                <span className="qt-plus">+</span>
                <h2 className="full-price">
                  Rs:29.98
                </h2>
                <h2 className="price">
                  Rs.14.99
                </h2>
              </footer>
            </article>
            <article className="product">
              <header>
                <a className="remove">
                  <img src=".\images\daniele-franchi-YBQY-hdd-Yg-unsplash.jpg" alt="" />
                  <h3>Remove product</h3>
                </a>
              </header>
              <div className="content">
                <h1>Lakme Creamy Lipstick</h1>
                Experience velvety-smooth lips with a burst of rich, vibrant color.
                <div title="You have selected this product to be shipped in the color red." style={{top: 0}} className="color red" />
                <div title="You have selected this product to be shipped sized Small." style={{top: '43px'}} className="type small">Small</div>
              </div>
              <footer className="content">
                <span className="qt-minus">-</span>
                <span className="qt">1</span>
                <span className="qt-plus">+</span>
                <h2 className="full-price">
                  Rs: 79.99
                </h2>
                <h2 className="price">
                  Rs: 79.99
                </h2>
              </footer>
            </article>
            <article className="product">
              <header>
                <a className="remove">
                  <img src=".\images\valeriia-miller-_42NKYROG7g-unsplash.jpg" alt="" />
                  <h3>Remove product</h3>
                </a>
              </header>
              <div className="content">
                <h1>Ordinary Products</h1>
                Nourish and hydrate your skin with this lightweight formula, leaving it soft, smooth, and irresistibly touchable.
                <div title="You have selected this product to be shipped in the color blue." style={{top: 0}} className="color blue" />
                <div style={{top: '43px'}} className="type small">Large</div>
              </div>
              <footer className="content">
                <span className="qt-minus">-</span>
                <span className="qt">3</span>
                <span className="qt-plus">+</span>
                <h2 className="full-price">
                  Rs: 53.99
                </h2>
                <h2 className="price">
                  Rs: 17.99
                </h2>
              </footer>
            </article>
          </section>
        </div>
        <footer id="site-footer">
          <div className="container clearfix">
            <div className="left">
              <h2 className="subtotal">Subtotal:<span> 163.96</span></h2>
              <h3 className="tax">Taxes (5%): <span>8.2</span></h3>
              <h3 className="shipping">Shipping: <span>5.00</span></h3>
            </div>
            <div className="right">
              <h1 className="total">Total: <span>177.16</span></h1>
              <a className="btn">Checkout</a>
            </div>
          </div>
        </footer>
      </div>



    )
}
export default Cart;