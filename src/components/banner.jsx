import React from "react";
import banImg from "../assets/banner.png"
import banImg2 from "../assets/1.avif"
import banImg3 from "../assets/2.avif"
import banImg4 from "../assets/3.avif"
import banImg5 from "../assets/4.avif"
import banImg6 from "../assets/5.avif"
const Banner = () => {
  return (
    <div
      id="carouselExampleControlsNoTouching"
      className="carousel slide"
      data-bs-touch="false"
      data-bs-ride="carousel"
      data-bs-interval="2000"
    >
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            src={banImg2}
            className="d-block w-100"
            alt="First Slide"
          />
        </div>
        <div className="carousel-item">
          <img
            src={banImg3}
            className="d-block w-100"
            alt="Second Slide"
          />
        </div>
        <div className="carousel-item">
          <img
            src={banImg4}
            className="d-block w-100"
            alt="Third Slide"
          />
        </div>
        <div className="carousel-item">
          <img
            src={banImg}
            className="d-block w-100"
            alt="Third Slide"
          />
        </div>
        <div className="carousel-item">
          <img
            src={banImg5}
            className="d-block w-100"
            alt="Third Slide"
          />
        </div>
        <div className="carousel-item">
          <img
            src={banImg6}
            className="d-block w-100"
            alt="Third Slide"
          />
        </div>
      </div>

      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleControlsNoTouching"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>

      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleControlsNoTouching"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}
export default Banner;