import React, {Component} from "react";
import { Link } from "react-router-dom";
export default class Footer extends Component {

    render() {
        return (
            <section className="footer">
                <div className="container">
                  <div className="row">
                    <div className="footer-col">
                      <h4>About Teman Hewan</h4>
                      <ul>
                        <li><a href="#">About us</a></li>
                        <li><a href="#">Contact us</a></li>
                        <li><a href="#">Blog</a></li>
                        <li><a href="#">Our service</a></li>
                        <li><a href="#">FAQs</a></li>
                      </ul>
                    </div>
                    <div className="footer-col">
                      <h4>Adoption</h4>
                      <ul>
                        <li><a href="#">Kucing</a></li>
                        <li><a href="#">Anjing</a></li>
                      </ul>
                    </div>
                    <div className="footer-col">
                      <h4>Guide and Help</h4>
                      <ul>
                      <li><a href="#">Care</a></li>
                      <li><a href="#">Privacy Policy</a></li>
                      <li><a href="#">Terms and Condition</a></li>
                      <li><a href="#">Mitra</a></li>
                      </ul>
                    </div>
                    <div className="footer-col">
                      <h4>Follow us on</h4>
                      <div class="social-media">
                        <a href="#"><i className="fab fa-facebook"></i></a>
                        <a href="#"><i className="fab fa-instagram"></i></a>
                        <a href="#"><i className="fab fa-twitter"></i></a>
                        <a href="#"><i className="fab fa-youtube"></i></a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="fixed-footer">
                  <div className="container">Copyright&copy; 2023 Teman Hewan</div>
                </div>
            </section>


        )
    }
}