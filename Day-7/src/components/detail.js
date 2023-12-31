import React from 'react'
import './detail.css';

function Detail()
{
    return(


<div className="card-wrapper">
<div className="card">
  {/* card left */}
  <div className="product-imgs">
    <div className="img-display">
      <div className="img-showcase">
        <img src="https://fadzrinmadu.github.io/hosted-assets/product-detail-page-design-with-image-slider-html-css-and-javascript/shoe_1.jpg" alt="shoe image" />
        <img src="https://fadzrinmadu.github.io/hosted-assets/product-detail-page-design-with-image-slider-html-css-and-javascript/shoe_2.jpg" alt="shoe image" />
        <img src="https://fadzrinmadu.github.io/hosted-assets/product-detail-page-design-with-image-slider-html-css-and-javascript/shoe_3.jpg" alt="shoe image" />
        <img src="https://fadzrinmadu.github.io/hosted-assets/product-detail-page-design-with-image-slider-html-css-and-javascript/shoe_4.jpg" alt="shoe image" />
      </div>
    </div>
    <div className="img-select">
      <div className="img-item">
        <a href="#" data-id={1}>
          <img src="https://fadzrinmadu.github.io/hosted-assets/product-detail-page-design-with-image-slider-html-css-and-javascript/shoe_1.jpg" alt="shoe image" />
        </a>
      </div>
      <div className="img-item">
        <a href="#" data-id={2}>
          <img src="https://fadzrinmadu.github.io/hosted-assets/product-detail-page-design-with-image-slider-html-css-and-javascript/shoe_2.jpg" alt="shoe image" />
        </a>
      </div>
      <div className="img-item">
        <a href="#" data-id={3}>
          <img src="https://fadzrinmadu.github.io/hosted-assets/product-detail-page-design-with-image-slider-html-css-and-javascript/shoe_3.jpg" alt="shoe image" />
        </a>
      </div>
      <div className="img-item">
        <a href="#" data-id={4}>
          <img src="https://fadzrinmadu.github.io/hosted-assets/product-detail-page-design-with-image-slider-html-css-and-javascript/shoe_4.jpg" alt="shoe image" />
        </a>
      </div>
    </div>
  </div>
  {/* card right */}
  <div className="product-content">
    <h2 className="product-title">nike shoes</h2>
    <a href="#" className="product-link">visit nike store</a>
    <div className="product-rating">
      <i className="fas fa-star" />
      <i className="fas fa-star" />
      <i className="fas fa-star" />
      <i className="fas fa-star" />
      <i className="fas fa-star-half-alt" />
      <span>4.7(21)</span>
    </div>
    <div className="product-price">
      <p className="last-price">Old Price: <span>$257.00</span></p>
      <p className="new-price">New Price: <span>$249.00 (5%)</span></p>
    </div>
    <div className="product-detail">
      <h2>about this item: </h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo eveniet veniam tempora fuga tenetur placeat sapiente architecto illum soluta consequuntur, aspernatur quidem at sequi ipsa!</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, perferendis eius. Dignissimos, labore suscipit. Unde.</p>
      <ul>
        <li>Color: <span>Black</span></li>
        <li>Available: <span>in stock</span></li>
        <li>Category: <span>Shoes</span></li>
        <li>Shipping Area: <span>All over the world</span></li>
        <li>Shipping Fee: <span>Free</span></li>
      </ul>
    </div>
    <div className="purchase-info">
      <input type="number" min={0} defaultValue={1} />
      <button type="button" className="btn">
        Add to Cart <i className="fas fa-shopping-cart" />
      </button>
      <button type="button" className="btn">Compare</button>
    </div>
    <div className="social-links">
      <p>Share At: </p>
      <a href="#">
        <i className="fab fa-facebook-f" />
      </a>
      <a href="#">
        <i className="fab fa-twitter" />
      </a>
      <a href="#">
        <i className="fab fa-instagram" />
      </a>
      <a href="#">
        <i className="fab fa-whatsapp" />
      </a>
      <a href="#">
        <i className="fab fa-pinterest" />
      </a>
    </div>
  </div>
</div>
</div>
    )
}
export default Detail;