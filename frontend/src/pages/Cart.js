import React from "react";
import { Component } from "react";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import { RoomContext } from "../context";
import { FaHome } from "react-icons/fa";
// import bankm1 from "../images/bank1.png";
// import bankm2 from "../images/bank2.png";
// import bankm3 from "../images/bank3.png";
// import bankm4 from "../images/bank4.png";
// import bankm5 from "../images/bank5.png";
// import ewallett1 from "../images/ewallet1.png";
// import ewallett2 from "../images/ewallet2.png";
// import ewallett3 from "../images/ewallet3.png";
// import ewallett4 from "../images/ewallet4.png";
// import catt1 from "../images/cat1.jpeg";

export default class Cart extends Component {
    
    render() {
  
    return (
      <>
        <Navbar />
        <section className="cart-page">
          <div className="cart-info">
            <article className="desc">
            <Link to="/"><FaHome className="home-btn"/></Link>
              <img src="/cat1.jpeg" alt="kucing"></img>
              <h3>details</h3>
              <p>Street art edison bulb gluten-free, tofu try-hard lumbersexual brooklyn tattooed pickled chambray. Actually humblebrag next level, deep v art party wolf tofu direct trade readymade sustainable hell of banjo. Organic authentic subway tile cliche palo santo, street art XOXO dreamcatcher retro sriracha portland air plant kitsch stumptown. Austin small batch squid gastropub. Pabst pug tumblr gochujang offal retro cloud bread bushwick semiotics before they sold out sartorial literally mlkshk. Vaporware hashtag vice, sartorial before they sold out pok pok health goth trust fund cray.</p>
            </article>
            <article className="info">
            <h3>Payment Bill</h3>
            <div className="Rectangle">
              <div className="form-container">
                <form>
                  <div className="row">
                    <div className="col-25">
                  <label>Full Name:</label>
                    </div>
                    <div className="col-75">
                      <input type="text" placeholder="Your Full Name.."/>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-25">
                      <label>Email:</label>
                    </div>
                    <div className="col-75">
                      <input type="email" placeholder="Your Email.."/>
                    </div>
                  </div>

                  <div class="row">
                    <div class="col-25">
                      <label for="payment">Shipment:</label>
                    </div>
                    <div className="col-75">
                      <select value={this.state}>
                        <option value="economy">Economy - Rp 8.000/kg</option>
                        <option value="regular">Regular - Rp 9.000/kg</option>
                        <option value="express">Express - Rp 12.000/kg</option>
                        <option value="oneday">One Day - Rp 18.000/kg</option>
                      </select>
                    </div>
                  </div>

                  <div class="row">
                    <div class="col-25">
                      <label for="subject">Address: </label>
                    </div>
                    <div class="col-75">
                      <textarea placeholder="Your Address.."></textarea>
                    </div>
                  </div>
                  <br></br>
                </form>
              </div>
            </div>
            <br></br>
            
            <div className="cart-info2">
            <h3>Payment Methods</h3>
            <div className="Rectangle-2">
              <div className="payment-container">
                <div class="row">
                    <div className="col2-75">
                      <form>
                        <fieldset>
                          <legend>Please select your payment method:</legend>
                          <div class="grid grid-cols-2 gap-2">
                            <input type="radio" id="paymentmethods1" name="paymentmethod" />
                            <img src="/bank1.png" alt="mandiri"></img>

                            <input type="radio" id="paymentmethods1" name="paymentmethod" />
                            <img src="/ewallet1.png" alt="gopay"></img>
                          </div>
                          <div class="grid grid-cols-2 gap-2">
                            <input type="radio" id="paymentmethods1" name="paymentmethod" />
                            <img src="/bank2.png" alt="bca"></img>

                            <input type="radio" id="paymentmethods1" name="paymentmethod" />
                            <img src="/ewallet2.png" alt="dana"></img>
                          </div> 
                          <div class="grid grid-cols-2 gap-2">
                            <input type="radio" id="paymentmethods1" name="paymentmethod" />
                            <img src="/bank3.png" alt="bni"></img>

                            <input type="radio" id="paymentmethods1" name="paymentmethod" />
                            <img src="/ewallet3.png" alt="ovo"></img>
                          </div> 
                          <div class="grid grid-cols-2 gap-2">
                            <input type="radio" id="paymentmethods1" name="paymentmethod" />
                            <img src="/bank4.png" alt="bri"></img>

                            <input type="radio" id="paymentmethods1" name="paymentmethod" />
                            <img src="/ewallet4.png" alt="shopeepay"></img>
                          </div> 
                          <div class="grid grid-cols-2 gap-2">
                            <input type="radio" id="paymentmethods1" name="paymentmethod" />
                            <img src="/bank5.png" alt="cimb"></img>
                          </div> 
                          <br></br>
                          <div class="row">
                            <button className="button-pay">Pay Now</button>
                          </div>
                        </fieldset>
                      </form>
                    </div>
                  </div>

              </div>
            </div>
            </div>
            </article>
          </div>
        </section>
        <Footer />
      </>
    );
  }
}



// import "reactjs-popup/dist/index.css";
// import CheckoutSuccess from "./CheckoutSuccess";
// import React, { useState } from 'react';
// import './Checkout.css';

// function Checkout() {
//   const [fullName, setFullName] = useState('');
//   const [email, setEmail] = useState('');
//   const [address, setAddress] = useState('');
//   const [paymentMethod, setPaymentMethod] = useState('Credit Card');

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     const handleSubmit = (event) => {
//         event.preventDefault();
        
//         // Validate form inputs
//         if (!fullName || !email || !address) {
//           alert("Please fill in all the required fields.");
//           return;
//         }
        
//         // Prepare checkout data
//         const checkoutData = {
//           fullName,
//           email,
//           address,
//           paymentMethod
//         };
        
//         // Process checkout (e.g., send data to server, make API request, etc.)
//         // Replace the following code with your actual checkout logic
//         console.log("Checkout data:", checkoutData);
//         alert("Checkout successful!");
        
//         // Reset form inputs
//         setFullName('');
//         setEmail('');
//         setAddress('');
//         setPaymentMethod('Credit Card');
//       };
      
//   };

//   return (
//     <div className="checkout-container">
//       <h1>Checkout</h1>
//       <form onSubmit={handleSubmit}>
//         <label>Full Name:</label>
//         <input type="text" value={fullName} onChange={(e) => setFullName(e.target.value)} required />

//         <label>Email:</label>
//         <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />

//         <label>Address:</label>
//         <textarea value={address} onChange={(e) => setAddress(e.target.value)} required />

//         <label>Payment Method:</label>
//         <select value={paymentMethod} onChange={(e) => setPaymentMethod(e.target.value)}>
//           <option value="Credit Card">Credit Card</option>
//           <option value="PayPal">PayPal</option>
//           <option value="Cash on Delivery">Cash on Delivery</option>
//         </select>

//         <button type="submit">Place Order</button>
//       </form>
//     </div>
//   );
// }

// export default Checkout;
