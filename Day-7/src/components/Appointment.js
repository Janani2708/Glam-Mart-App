import React from 'react';
import './Appointment.css';


function Appoint() {
  return (
<div>
<meta charSet="utf-8" />
<title>Sider Menu Bar CSS</title>
<link rel="stylesheet" href="bar_style.css" />
<meta charSet="utf-8" />
<meta httpEquiv="X-UA-Compatible" content="IE=edge" />
<meta name="viewport" content="width=device-width, initial-scale=1" />

<meta charSet="utf-8" />
<link rel="stylesheet" href="slider_style.css" />
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.carousel.min.css" />
<div id="booking" className="section">
  <input type="checkbox" id="check" />
  <label htmlFor="check">
    <i className="fas fa-bars" id="btn" />
    <i className="fas fa-times" id="cancel" />
  </label>
  
  <section />
  <div className="section-center">
    <div className="container">
      <div className="row">
        <div className="col-md-4">
          <div className="booking-text">
            <h1 className="logo"><img height="20px" width="50px"  src=".\images\my glamm logo.jpg" alt="MY GLAMM" /></h1>
            <h2 className="head1">Book your Appointment Today</h2>
            
          </div>
        </div>
        <div className="col-md-7 col-md-offset-1">
          <div className="booking-form">
            <form>
              <div className="form-group">
                <div className="form-checkbox">
                  <label htmlFor="roundtrip">
                    <input type="radio" id="roundtrip" name="flight-type" />
                    <span />SKINCARE
                  </label>
                  <label htmlFor="one-way">
                    <input type="radio" id="one-way" name="flight-type" />
                    <span />HAIRCARE
                  </label>
                  <label htmlFor="multi-city">
                    <input type="radio" id="multi-city" name="flight-type" />
                    <span />OTHERS
                  </label>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <span className="form-label">Name</span>
                    <input className="form-control" type="text" placeholder="please enter you full name" />
                  </div>
                </div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;
        <div className="col-md-6">
                  <div className="form-group">
                    <span className="form-label">Email id</span>
                    <input className="form-control" type="text" placeholder="please enter valid email address" />
                  </div>
                </div>
        <div className="col-md-6">
                  <div className="form-group">
                    <span className="form-label">Contact No</span>
                    <input className="form-control" type="text" placeholder="Please enter valid contact number" />
                  </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <span className="form-label">Gender</span>
                    <input className="form-control" type="text" placeholder="your gender" />
                  </div>
                </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <span className="form-label">Booking Date</span>
                    <input className="form-control" type="date" required />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <span className="form-label">Other Booking Date</span>
                    <input className="form-control" type="date" required />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-4">
                  <div className="form-group">
                    <span className="form-label">Type of Makeup you want?</span>
                    <select className="form-control">
                      <option>Bridal Makeup</option>
                      <option>EveryDay Makeup</option>
                      <option>Special Occasion Makeup</option>
                      <option>Photoshoot Makeup</option>
                      
                    </select>
                    <span className="select-arrow" />
                  </div>
                </div>
             
                <div className="col-md-4" >
                  <div className="form-group"  >
                    <span className="form-label " style={{width:150}}>Choose your Artist</span>
                    <select className="form-control" style={{width:180}}>
                      <option>Artist 1</option>
                      <option>Artist 2</option>
                      <option>Artist 3</option>
                    </select>
                    <span className="select-arrow" />
                  </div>
                </div>
                
              </div>
              <div className="form-btn">
                <button className="submit-btn">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
{/*-----------------------slider---------------------------------------------*/}
</div>
  )
}
export default Appoint;