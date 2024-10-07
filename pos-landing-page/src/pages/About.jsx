// AboutPage.jsx
import React from 'react';
import {useState, useEffect} from 'react';
import './styles/AboutPage.css'; // Ensure you create this CSS file
import NavBar from '../components/nav';
import Footer from '../components/Footer';

const AboutPage = () => {

    const headerColor = '#fff';
    const color = '#001f3f';

    const supportTeam = [
      { name: 'John Doe', title: 'CEO', img: 'https://via.placeholder.com/200x200' },
      { name: 'Jane Smith', title: 'Customer Support', img: 'https://via.placeholder.com/200x200' },
      { name: 'Mary Jones', title: 'Product Specialist', img: 'https://via.placeholder.com/200x200' },
      { name: 'Mike Taylor', title: 'Technical Support', img: 'https://via.placeholder.com/200x200' },
      { name: 'Emily Davis', title: 'Support Manager', img: 'https://via.placeholder.com/200x200' },
      // ... Add more members if necessary
    ];
  
    const testimonials = [
      { company: 'Alpha Corp', message: 'This POS system has transformed the way we run our business.', name: 'Alice', title: 'CEO', img: 'https://via.placeholder.com/50x50' },
      { company: 'Beta Ltd', message: 'The customer support is amazing! Highly recommend this POS.', name: 'Bob', title: 'Manager', img: 'https://via.placeholder.com/50x50' },
      { company: 'Gamma Inc', message: 'Efficient and reliable. Makes managing our business much easier.', name: 'Charlie', title: 'CFO', img: 'https://via.placeholder.com/50x50' },
      // Add more testimonials
    ];
  
    const [offsetTopRow, setOffsetTopRow] = useState(0);
    const [offsetBottomRow, setOffsetBottomRow] = useState(0);
  
    useEffect(() => {
      const interval = setInterval(() => {
        setOffsetTopRow(prev => (prev + 1) % 100); // Adjust the speed as necessary
        setOffsetBottomRow(prev => (prev - 1) % 100); // Adjust the speed as necessary
      }, 50);
      return () => clearInterval(interval);
    }, []);
  return (
    <>
        <NavBar headerColor={headerColor} color = {color} />
    
    <div className="about-page"> 
      {/* Header Section */}
      <section className="header-section">
        <h1>About Us</h1>
        <h2 className="big-heading">Why Choose Our POS System?</h2>
        <p className="subheading">Simple, Efficient, and Powerful</p>
      </section>

      {/* About Section */}
      <section className="about-section">
        <div className="about-content">
          <div className="about-left">
            <h3 className="title-underline">About</h3>
            <h2>Our Story</h2>
            <p>We created this POS system with the aim of helping businesses streamline their operations, manage sales, and increase profits with ease. Our focus is on providing a user-friendly interface with powerful features tailored to different business needs.</p>
            
            <div className="about-columns">
              <div className="about-column">
                <h4>• Easy to Use</h4>
                <p>Our POS system is designed with simplicity in mind, making it easy for anyone to get started.</p>
              </div>
              <div className="about-column">
                <h4>• Secure Transactions</h4>
                <p>We prioritize security, ensuring all transactions are processed with the highest level of protection.</p>
              </div>
              <div className="about-column">
                <h4>• Customizable</h4>
                <p>Our system can be tailored to fit your business needs with advanced features.</p>
              </div>
              <div className="about-column">
                <h4>• Reliable Support</h4>
                <p>Our team is available to provide assistance and ensure everything runs smoothly.</p>
              </div>
            </div>
          </div>

          <div className="about-right">
            <img src="https://via.placeholder.com/400x400" alt="About Us" />
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="how-it-works-section">
        <h1>How It Works</h1>
        <p>Our POS system integrates seamlessly into your business workflow, allowing you to manage transactions, inventory, and reports all from one platform.</p>

        <div className="how-it-works-columns">
          <div className="how-it-works-item">
            <img src="https://via.placeholder.com/300x300" alt="Step 1" />
            <h4>Step 1: Setup</h4>
            <p>Quick and easy setup to get your business up and running in minutes.</p>
          </div>
          <div className="how-it-works-item">
            <img src="https://via.placeholder.com/300x300" alt="Step 2" />
            <h4>Step 2: Manage</h4>
            <p>Control your inventory, track sales, and generate reports effortlessly.</p>
          </div>
          <div className="how-it-works-item">
            <img src="https://via.placeholder.com/300x300" alt="Step 3" />
            <h4>Step 3: Grow</h4>
            <p>Use insights from your sales data to make informed decisions and grow your business.</p>
          </div>
        </div>

         {/* Support Team Section */}
      <section className="support-team-section">
        <h2>Our Support Heroes</h2>
        <div className="support-grid">
          {supportTeam.map((member, index) => (
            <div key={index} className="support-member">
              <img src={member.img} alt={member.name} />
              <div className="hover-bubble">
                <p>{member.name}</p>
                <span>{member.title}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section">
        <h2>What Our Clients Say</h2>
        <p>See why businesses love using our POS system to manage their operations efficiently and effectively.</p>

        <div className="testimonials-container">
          <div className="testimonials-row top-row" style={{ transform: `translateX(-${offsetTopRow}%)` }}>
            {testimonials.map((testimonial, index) => (
              <div key={index} className="testimonial-card">
                <img src={testimonial.img} alt={testimonial.name} className="testimonial-img" />
                <div className="testimonial-info">
                  <h4>{testimonial.company}</h4>
                  <p>{testimonial.message}</p>
                  <div className="testimonial-author">
                    <p>{testimonial.name}</p>
                    <span>{testimonial.title}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="testimonials-row bottom-row" style={{ transform: `translateX(${offsetBottomRow}%)` }}>
            {testimonials.map((testimonial, index) => (
              <div key={index} className="testimonial-card">
                <img src={testimonial.img} alt={testimonial.name} className="testimonial-img" />
                <div className="testimonial-info">
                  <h4>{testimonial.company}</h4>
                  <p>{testimonial.message}</p>
                  <div className="testimonial-author">
                    <p>{testimonial.name}</p>
                    <span>{testimonial.title}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      </section>
      <Footer  headerColor={headerColor} color = {color}/>
    </div>
    </>
  );
};

export default AboutPage;







