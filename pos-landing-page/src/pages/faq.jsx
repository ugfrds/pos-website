import React, { useState } from 'react';
import NavBar from '../components/nav';
import './styles/FAQPage.css';
import Footer from '../components/Footer';
const FAQPage = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const headerColor = '#fff';
  const color = '#001f3f';

  const faqs = [
    {
      question: 'What is the POS system?',
      answer: 'Our POS system is a cloud-based solution designed to streamline business operations, from sales and inventory management to customer tracking and reporting.',
    },
    {
      question: 'How do I set up the POS system for my business?',
      answer: 'Setting up our POS system is simple. Once you sign up, you will receive an onboarding guide, and our support team will walk you through each step—from device setup to customizing the software for your needs.',
    },
    {
      question: 'Can I access the POS system from multiple devices?',
      answer: 'Yes, our POS system is accessible from any device with internet access. Whether you’re using a desktop, tablet, or smartphone, your business data is always at your fingertips.',
    },
    {
      question: 'What payment methods does the system support?',
      answer: 'The system supports multiple payment methods, including credit cards, mobile money, and cash. It integrates with leading payment gateways such as Stripe and PayPal to facilitate seamless transactions.',
    },
    {
      question: 'Is customer support available?',
      answer: 'Yes, we offer 24/7 customer support via live chat, email, and phone to assist you with any issues or questions you may have.',
    },
  ];

  return (
    < >
    <NavBar headerColor={headerColor} color = {color} />
      <div className="faq-header">
        <h1>Frequently Asked Questions</h1>
        <p>Find answers to the most common questions about our POS system. If you need further assistance, our support team is always available to help.</p>
      </div>
    <div className='faq'>
      <div className="faq-list">
        {faqs.map((faq, index) => (
          <div key={index} className={`faq-item ${index === activeIndex ? 'active' : ''}`}>
            <button
              onClick={() => setActiveIndex(index === activeIndex ? null : index)}
              className="faq-question"
            >
              <strong>{faq.question}</strong>
              <span className="icon">{index === activeIndex ? '-' : '+'}</span>
            </button>
            {index === activeIndex && <p className="faq-answer">{faq.answer}</p>}
          </div>
        ))}
      </div>
      <Footer  headerColor={color} color = '#f9f9f9' />
      </div>
    </>
  );
};

export default FAQPage;
