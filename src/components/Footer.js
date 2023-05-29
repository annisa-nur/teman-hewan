import React, {Component} from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
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
                        <li><a href="#">Dog</a></li>
                        <li><a href="#">Cat</a></li>
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
                        <a href="https://facebook.com"><FaFacebook/></a>
                        <a href="https://instagram.com"><FaInstagram/></a>
                        <a href="https://twitter.com"><FaTwitter/></a>
                        <a href="https://youtube.com"><FaYoutube/></a>
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