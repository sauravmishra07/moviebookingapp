import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { banners } from '../utils/constants';



const BannerSlider = () => {
  const settings = {
    centerMode: true,
    centerPadding: "300px",
    slidesToShow: 1,
    infinite: true,
    autoplay: true, 
    autoplaySpeed: 2000, 
    speed: 800,
    pauseOnHover: true,
    cssEase: "cubic-bezier(0.4, 0, 0.2, 1)",
    dots: true,
    dotsClass: "slick-dots custom-dots",
    responsive: [
      {
        breakpoint: 1536,
        settings: {
          centerPadding: "200px",
        }
      },
      {
        breakpoint: 1280,
        settings: {
          centerPadding: "180px",
        }
      },
      {
        breakpoint: 1024,
        settings: {
          centerPadding: "100px",
        }
      },
      {
        breakpoint: 768,
        settings: {
          centerPadding: "50px",
          arrows: false,
        }
      },
      {
        breakpoint: 640,
        settings: {
          centerMode: false,
          centerPadding: "0px",
          arrows: false,
        }
      }
    ]
  };

  return (
    <div className='w-full  py-8 md:py-12'>
      <div className="mx-auto px-4 relative">
        <Slider {...settings}>
          {banners.map((banner, i) => (
            <div key={i} className='px-2 md:px-3'>
              <div className="relative overflow-hidden rounded-2xl shadow-xl transition-all duration-300 hover:shadow-2xl group">
                <img
                  src={banner}
                  alt={`banner-${i + 1}`}
                  className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-105'
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default BannerSlider;
