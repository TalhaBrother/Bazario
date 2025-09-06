import React from "react";
import appStore from "../assets/AppStore.png";
import playStore from "../assets/GooglePlay.png";
import appGall from "../assets/AppGallery.png";

const Footer = () => {
  return (
    <>
      <div className="bg-black text-white w-full py-10 px-8 flex flex-wrap justify-around gap-8">
        {/* Customer Care Section */}
        <div>
          <h2 className="font-bold text-lg mb-3">Customer Care</h2>
          <ul className="space-y-1 text-sm">
            <li>Help Center</li>
            <li>How to Buy</li>
            <li>Track Your Order</li>
            <li>Return & Refund</li>
            <li>Warranty Policy</li>
            <li>Shipping Information</li>
            <li>Contact Us</li>
            <li>Purchase Protection</li>
            <li>Pick-up Points</li>
            <li>FAQs</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
            <li>Gift Cards</li>
            <li>Product Reviews</li>
            <li>Report a Product</li>
          </ul>
        </div>

        {/* Bazario Section */}
        <div>
          <h2 className="font-bold text-lg mb-3">Bazario</h2>
          <ul className="space-y-1 text-sm">
            <li>About Bazario</li>
            <li>Bazario Blog</li>
            <li>Digital Payments</li>
            <li>Donation Programs</li>
            <li>Careers at Bazario</li>
            <li>Bazario App</li>
            <li>Bazario Mart</li>
            <li>Partnerships</li>
            <li>Press & Media</li>
            <li>Investor Relations</li>
            <li>Affiliate Program</li>
            <li>Corporate Sales</li>
            <li>Sustainability</li>
            <li>Community Impact</li>
            <li>Brand Guidelines</li>
          </ul>
        </div>

        {/* Earn with Bazario Section */}
        <div>
          <h2 className="font-bold text-lg mb-3">Earn with Bazario</h2>
          <ul className="space-y-1 text-sm">
            <li>Sell on Bazario</li>
            <li>Become a Partner</li>
            <li>Bazario Affiliate Program</li>
            <li>Start a Franchise</li>
            <li>Advertise on Bazario</li>
            <li>Logistics Services</li>
            <li>Wholesale Suppliers</li>
            <li>Bazario for Businesses</li>
            <li>Student Ambassador Program</li>
            <li>Freelance with Bazario</li>
          </ul>
        </div>

        {/* App Download Section */}
        <div className="flex flex-col items-start">
          <h2 className="font-bold text-lg mb-5">Download Bazario App</h2>
          <div className="flex flex-col gap-3">
            <img
              src={appStore}
              alt="App Store"
              className="w-36 cursor-pointer hover:opacity-80 transition mb-1 rounded-2xl border-white border-1"
            />
            <img
              src={playStore}
              alt="Google Play"
              className="w-36 cursor-pointer hover:opacity-80 transition mb-1 rounded-2xl border-white border-1"
            />
            <img
              src={appGall}
              alt="App Gallery"
              className="w-36 cursor-pointer hover:opacity-80 transition"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
