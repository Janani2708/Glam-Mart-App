import React from 'react';
import {Link} from "react-router-dom";

import './home.css';

function HomePage() {
    return (
        
        <div className="wrapper">
      <div className="sidebar">
        <h4><b>GLAMM</b></h4>
        <ul>
          <li><a href="./home"><i className="fas fa-home" />Home</a></li>
          <li><a href="#"><i className="fas fa-project-diagram" />Explore Offers</a></li>
          <li><div className="fas fa-blog" ><Link to ='/flash'>Products</Link></div></li>
          <li><div className="fas fa-address-card" ><Link to ='/appoint'>Booking Appointment</Link></div></li>
          <li> <div className="fas fa-address-book" ><Link to ='/about'>About Us</Link></div></li>
        <li> <div className="fas fa-map-pin"><Link to='/contact' >Contact</Link></div></li>
        </ul> 
        
      </div>
      <div className="main_content" style={{backgroundImage:"url(/images/img1.avif)", backgroundSize:"cover"}}>
        <div className="header">MY GLAMM&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<Link to ="/cart"><button>Cart</button></Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<Link to="/about"><button>About</button></Link>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<Link to="/"><button>Logout</button></Link></div>
         
        <div className="content" style={{backgroundImage:"url(/images/img1.avif)", height:650,width:350}}>
          <p>   <h1>Discover a World of Beauty</h1>
          <p>At Glam Mart, we bring you the latest and finest beauty products to enhance your natural beauty and express your unique style.</p>
          <p>Explore our extensive collection of makeup, skincare, haircare, and fragrance products from top brands in the industry.</p>
          <p>Whether you're looking for a signature lipstick shade, a nourishing face serum, or a luxurious perfume, we have you covered.</p>
          <p>Join our community of beauty enthusiasts, get inspired by our tutorials, and stay up to date with the latest beauty trends.</p>
          <Link to="/flash"><button>Shop Now</button></Link></p>
        </div>
        
       



       
        
        
      </div>
      </div>
      

    );
}

export default HomePage;
