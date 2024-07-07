import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function ClientSlider() {
  // Slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Number of slides to show at a time
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500, // Autoplay speed in milliseconds
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  // Array of client images (replace with your image URLs)
  const clientImages = [
    'img/adityaBirla.jpg',
    'img/bajaj.jpeg',
    'img/bharti.png',
    // 'img/zuno.png',
    'img/Life Insurance Corporation of India.png',
    'img/Bajaj Finance Limited.jpeg',
    // 'img/LT Finance Logo - JPG 3 1.jpg.webp',
    // 'img/xlarge_Bajaj_Housing_Finance_IPO_efa94fb5b8.png.jpeg',
    // 'img/vastu-housing-finance.webp',
    // 'img/main-qimg-c51064d7420e0c393365367b7ca9842c.gif',
    // 'img/images.jpeg',
    // Add more image URLs as needed
  ];

  return (
    <div className="container py-5">
        <h1>Our Clients</h1>
        <br/>
      <Slider {...settings}>
        {clientImages.map((image, index) => (
          <div key={index}>
            <img src={image} alt={`Client ${index + 1}`} />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default ClientSlider;