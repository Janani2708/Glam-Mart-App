import React from 'react';
import {Link} from "react-router-dom";

import './flash.css';

function Products() {
    return (

<div>
<div className="container">
  <div className="navbarc">
    <div className="logo">
      <a href="./home"><img src="" alt="MY GLAMM" width="125px" /></a>
    </div>
    <nav>
      <ul id="MenuItems">
        <li><a href="./home">Home</a></li>
        <li><a href="./flash">Products</a></li>
        <li><a href="./about">About</a></li>
        <li><a href="./contact">Contact</a></li>
        <li><a href="./logout">Logout</a></li>
      </ul>
    </nav>
    <a href="./cart"><img src="https://i.ibb.co/PNjjx3y/cart.png" alt="" width="30px" height="30px" /></a>
    <img src="https://i.ibb.co/6XbqwjD/menu.png" alt="" className="menu-icon" onclick="menutoggle()" />
  </div>
</div>
<div className="small-container">
  <div className="row row-2">
    <h2>All Products</h2>
    <select>
      <option value>Default Shorting</option>
      <option value>Short by price</option>
      <option value>Short by popularity</option>
      <option value>Short by rating</option>
      <option value>Short by sale</option>
    </select>
  </div>
  <div className="row">
    <div className="col-4">
      <a href="./detail"><img src=".\images\carlos-rodriguez-QhK3jcoPCxM-unsplash.jpg" alt="" ></img></a>
      <h3>Aloevera Gel</h3>
      <div className="rating">
        <i className="fas fa-star" />
        <i className="fas fa-star" />
        <i className="fas fa-star" />
        <i className="fas fa-star" />
        <i className="far fa-star" />
      </div>
      <p>₹499.00</p>
      <h5>Product Detail</h5>
      <h4> Soothes and moisturizes the skin, providing relief from irritation and promoting healing with its natural anti-inflammatory and antibacterial properties</h4>
    </div>
    <div className="col-4">
      <img src=".\images\curology-DGH1u80sZik-unsplash.jpg" alt="" />
      <h3>Curology Body moisturizes</h3>
      <div className="rating">
        <i className="fas fa-star" />
        <i className="fas fa-star" />
        <i className="fas fa-star" />
        <i className="far fa-star" />
        <i className="far fa-star" />
      </div>
      <p>₹1299.00</p>
      <h5>Product Detail</h5>
      <h4>Achieve flawless coverage and nourish your skin with our lightweight formula infused with skin-loving ingredients. Enhance your natural beauty with confidence.</h4>
    </div>
    <div className="col-4">
      <img src=".\images\daniele-franchi-YBQY-hdd-Yg-unsplash.jpg" alt="" />
      <h3>Lakme Creamy Lipstick</h3>
      <div className="rating">
        <i className="fas fa-star" />
        <i className="fas fa-star" />
        <i className="fas fa-star" />
        <i className="fas fa-star" />
        <i className="fas fa-star-half-alt" />
      </div>
      <p>₹2499.00</p>
      <h5>Product Detail</h5>
      <h4>Lakme creamy lipstick offers a luxurious, smooth texture that glides effortlessly on the lips. Its creamy formula provides intense color payoff and long-lasting hydration for a stunning pout.</h4>
    </div>
    <div className="col-4">
      <img src=".\images\karly-jones-jaV6cvSEqao-unsplash.jpg" alt="" />
      <h3>Becca Ultimate LipStick</h3>
      <div className="rating">
        <i className="fas fa-star" />
        <i className="fas fa-star" />
        <i className="far fa-star" />
        <i className="far fa-star" />
        <i className="far fa-star" />
      </div>
      <p>₹8900.00</p>
      <h5>Product Detail</h5>
      <h4>Becca Ultimate Lipstick delivers rich, vibrant shades that instantly elevate your makeup look. With its velvety texture and nourishing formula, it provides comfortable wear and a beautiful, long-lasting finish.</h4>
    </div>
  </div>
  <div className="row">
    <div className="col-4">
      <img src=".\images\michela-ampolo-7tDGb3HrITg-unsplash.jpg" alt="" />
      <h3>Origins Glowing Greats</h3>
      <div className="rating">
        <i className="fas fa-star" />
        <i className="fas fa-star" />
        <i className="fas fa-star" />
        <i className="fas fa-star" />
        <i className="far fa-star" />
      </div>
      <p>₹2499.00</p>
      <h5>Product Detail</h5>
      <h4>Origins Glowing Greats is a transformative skincare collection for achieving radiant, luminous skin.</h4>
    </div>
    <div className="col-4">
      <img src=".\images\milad-shams-kEgH3e1Cdb4-unsplash.jpg" alt="" />
      <h3>Pantene Creama Para Peinar </h3>
      <div className="rating">
        <i className="fas fa-star" />
        <i className="fas fa-star" />
        <i className="fas fa-star" />
        <i className="far fa-star" />
        <i className="far fa-star" />
      </div>
      <p>₹1500.00</p>
      <h5>Product Detail</h5>
      <h4>Origins Glowing Greats is a transformative skincare collection for achieving radiant, luminous skin.</h4>
    </div>
    <div className="col-4">
      <img src="./images/olena-sergienko-wV0OrCO90eI-unsplash.jpg" alt="" />
      <h3>Libre Perfume</h3>
      <div className="rating">
        <i className="fas fa-star" />
        <i className="fas fa-star" />
        <i className="fas fa-star" />
        <i className="fas fa-star" />
        <i className="fas fa-star-half-alt" />
      </div>
      <p>₹2500.00</p>
      <h5>Product Detail</h5>
      <h4>Libre perfume by Yves Saint Laurent is a captivating fragrance that embodies freedom and bold femininity in a single scent.</h4>
    </div>
    <div className="col-4">
      <img src=".\images\pmv-chamara-OXYOFT9gTOE-unsplash.jpg" alt="" />
      <h3>Hair Care Products</h3>
      <div className="rating">
        <i className="fas fa-star" />
        <i className="fas fa-star" />
        <i className="far fa-star" />
        <i className="far fa-star" />
        <i className="far fa-star" />
      </div>
      <p>₹3499.00</p>
      <h5>Product Detail</h5>
      <h4>Hair care products are essential for maintaining healthy, vibrant hair, providing nourishment, hydration, and protection for beautiful locks.</h4>
    </div>
  </div>
  <div className="row">
    <div className="col-4">
      <img src="./images/taisiia-stupak-mWABE4JCUHI-unsplash.jpg" alt="" />
      <h3>Pilgrim Hair Serum</h3>
      <div className="rating">
        <i className="fas fa-star" />
        <i className="fas fa-star" />
        <i className="fas fa-star" />
        <i className="fas fa-star" />
        <i className="far fa-star" />
      </div>
      <p>₹1299.00</p>
      <h5>Product Detail</h5>
      <h4>Pilgrim Hair Serum is a rejuvenating elixir that revitalizes and strengthens hair, promoting smoothness, shine, and overall hair health.</h4>
    </div>
    <div className="col-4">
      <img src="./images/valeriia-miller-_42NKYROG7g-unsplash.jpg" alt="" />
      <h3>Ordinary SkinCare Products</h3>
      <div className="rating">
        <i className="fas fa-star" />
        <i className="fas fa-star" />
        <i className="fas fa-star" />
        <i className="far fa-star" />
        <i className="far fa-star" />
      </div>
      <p>₹5500.00</p>
      <h5>Product Detail</h5>
      <h4>The Ordinary skincare products are known for their simplicity and efficacy, offering affordable solutions that deliver noticeable results for various skin concerns.</h4>
    </div>
    <div className="col-4">
      <img src=".\images\alex-lvrs-WU7vuMbwcmk-unsplash.jpg" alt="" />
      <h3>Pilgrim HairCare Products</h3>
      <div className="rating">
        <i className="fas fa-star" />
        <i className="fas fa-star" />
        <i className="fas fa-star" />
        <i className="fas fa-star" />
        <i className="fas fa-star-half-alt" />
      </div>
      <p>₹4599.00</p>
      <h5>Product Detail</h5>
      <h4>Pilgrim haircare products combine natural ingredients and advanced formulations to provide luxurious, nourishing care that promotes strong, healthy, and beautiful hair.</h4>
    </div>
    <div className="col-4">
      <img src=".\images\ashley-piszek-crSkE1CKQL0-unsplash.jpg" alt="" />
      <h3>4 Shade MacLipstick</h3>
      <div className="rating">
        <i className="fas fa-star" />
        <i className="fas fa-star" />
        <i className="far fa-star" />
        <i className="far fa-star" />
        <i className="far fa-star" />
      </div>
      <p>₹3599.00</p>
      <h5>Product Detail</h5>
      <h4>The 4-shade Mac lipstick collection offers a versatile range of colors to suit any occasion, providing rich pigmentation and a long-lasting, flawless finish.</h4>
    </div>
  </div>
  <div className="row">
    <div className="col-4">
      <img src=".\images\evangeline-sarney-EyrjiJAwLjQ-unsplash.jpg" alt="" />
      <h3>Maybelline EyeShadow Products</h3>
      <div className="rating">
        <i className="fas fa-star" />
        <i className="fas fa-star" />
        <i className="fas fa-star" />
        <i className="fas fa-star" />
        <i className="far fa-star" />
      </div>
      <p>₹1599.00</p>
      <h5>Product Detail</h5>
      <h4>Maybelline eyeshadow products boast an extensive range of shades and textures, allowing you to unleash your creativity and achieve captivating eye looks.</h4>
    </div>
    <div className="col-4">
      <img src=".\images\natasha-kendall-_4gFW3mBRCc-unsplash.jpg" alt="" />
      <h3>MyCamide Face Serum</h3>
      <div className="rating">
        <i className="fas fa-star" />
        <i className="fas fa-star" />
        <i className="fas fa-star" />
        <i className="far fa-star" />
        <i className="far fa-star" />
      </div>
      <p>₹500.00</p>
      <h5>Product Detail</h5>
      <h4>Mycamide face serum is a potent blend of active ingredients that nourishes and revitalizes the skin, leaving it radiant and rejuvenated.</h4>
    </div>
    <div className="col-4">
      <img src=".\images\miska-sage-h94FDYbBHXE-unsplash (1).jpg" alt="" />
      <h3>Magrite FaceCream</h3>
      <div className="rating">
        <i className="fas fa-star" />
        <i className="fas fa-star" />
        <i className="fas fa-star" />
        <i className="fas fa-star" />
        <i className="fas fa-star-half-alt" />
      </div>
      <p>₹500.00</p>
      <h5>Product Detail</h5>
      <h4>Magrite face cream is a luxurious and deeply hydrating formula that leaves the skin plump, smooth, and radiant.</h4>
    </div>
    <div className="col-4">
      <img src=".\images\reuben-mansell-nwOip8AOZz0-unsplash.jpg" alt="" />
      <h3>Glossier FaceProducts Combo</h3>
      <div className="rating">
        <i className="fas fa-star" />
        <i className="fas fa-star" />
        <i className="far fa-star" />
        <i className="far fa-star" />
        <i className="far fa-star" />
      </div>
      <p>₹500.00</p>
      <h5>Product Detail</h5>
      <h4>Glossier face products combo offers a seamless and effortless way to achieve a natural, dewy complexion with their lightweight formulas and skin-enhancing finishes.</h4>
    </div>
  </div>
  <div className="page-btn">
    <span>1</span>
    <span>2</span>
    <span>3</span>
    <span>4</span>
    <span>→</span>
  </div>
</div>
{/* Footer */}
<div className="footer">
  <div className="container">
    <div className="row">
      <div className="footer-col-1">
        <h3>Download Our App</h3>
        <p>Download App for Android and iso mobile phone.</p>
        <div>
          <img src="https://i.ibb.co/KbPTYYQ/play-store.png" alt="" />
          <img src="https://i.ibb.co/hVM4X2p/app-store.png" alt="" />
        </div>
      </div>
      <div className="footer-col-2">
        <img src="" alt="MY GLAMM" style={{fontSize:20}} />
        
        <p>
          Our Purpose Is To Sustainably Make the Pleasure and Benefits of
          Sports Accessible to the Many.
        </p>
      </div>
      
      <div className="footer-col-4">
        <h3>Follow us</h3>
        <ul>
          <li>Facebook</li>
          <li>Twitter</li>
          <li>Instagram</li>
          <li>YouTube</li>
        </ul>
      </div>
    </div>
    <hr />
    <p className="copyright">Copyright © 2021 - MY GLAMM</p>
  </div>
</div>

</div>
    )
}
export default Products;