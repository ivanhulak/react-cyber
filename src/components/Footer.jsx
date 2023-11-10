import React from "react";
import IMAGES from "../assets/Images";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__body">
          <div className="footer__row">
            <div className="footer__info info-footer">
              <div className="info-footer__logo">
                <img src={IMAGES.logo_white} alt="logo image" />
              </div>
              <div className="info-footer__text">
                We are a residential interior design firm located in Portland.
                Our boutique-studio offers more than
              </div>
            </div>
            <nav className="footer__nav nav-footer">
              <div className="nav-footer__column">
                <div className="nav-footer__title">Services</div>
                <ul className="nav-footer__list">
                  <li>Bonus program</li>
                  <li>Gift cards</li>
                  <li>Credit and payment</li>
                  <li>Service contracts</li>
                  <li>Non-cash account</li>
                  <li>Payment</li>
                </ul>
              </div>
              <div className="nav-footer__column">
                <div className="nav-footer__title">Assistance to the buyer</div>
                <ul className="nav-footer__list">
                  <li>Find an order</li>
                  <li>Terms of delivery</li>
                  <li>Exchange and return of goods</li>
                  <li>Guarantee</li>
                  <li>Frequently asked questions</li>
                  <li>Terms of use of the site</li>
                </ul>
              </div>
            </nav>
          </div>
          <div className="footer__socials socials-footer">
            <ul className="socials-footer__list">
               <li><img src={IMAGES.twitter} alt="socials icon" /></li>
               <li><img src={IMAGES.facebook} alt="socials icon" /></li>
               <li><img src={IMAGES.tiktok} alt="socials icon" /></li>
               <li><img src={IMAGES.instagram} alt="socials icon" /></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};
