import React from 'react';
import Slider from 'react-slick'; // Import react-slick
import './styles/Testimonials.css';
import { FaStar } from 'react-icons/fa'; // Import font-awesome icons

const Testimonials = () => {
  const testimonialsData = [
    {
      img: "https://via.placeholder.com/100",
      company: "Restaurant Pro",
      message: "This POS system transformed the way I manage my restaurant!",
      name: "John Doe",
      title: "Restaurant Owner",
      rating: 5,
    },
    {
      img: "https://via.placeholder.com/100",
      company: "Retail Hub",
      message: "I can't imagine running my business without this software.",
      name: "Jane Smith",
      title: "Retail Store Manager",
      rating: 4,
    },
    {
      img: "https://via.placeholder.com/100",
      company: "Bakery Plus",
      message: "The analytics and reports give me the insights I need.",
      name: "Sarah Lee",
      title: "Bakery Owner",
      rating: 5,
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: true,
    pauseOnHover: true,
  };

  return (
    <section className="testimonials-section">
      <div className="testimonial-big-card">
        <h2>What Our Clients Say</h2>
        <Slider {...settings}>
          {testimonialsData.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <img
                src={testimonial.img}
                alt={testimonial.name}
                className="testimonial-img"
              />
              <div className="testimonial-info">
                <h4>{testimonial.company}</h4>
                <p className="testimonial-message">{testimonial.message}</p>
                <div className="testimonial-author">
                  <p className="author-name">{testimonial.name}</p>
                  <span className="author-title">{testimonial.title}</span>
                </div>
                <div className="testimonial-rating">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <FaStar key={i} className="star" />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Testimonials;
