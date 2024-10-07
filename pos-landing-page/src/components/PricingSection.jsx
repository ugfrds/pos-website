import React from 'react';
import './styles/PricingSection.css';

const PricingSection = () => {
  const plans = [
    {
      title: 'Business',
      price: '1000',
      features: ['Lifetime access', 'Free updates', 'Business-specific reports'],
    },
    {
      title: 'Enterprise',
      price: '2500',
      features: [
        'Lifetime access',
        'Advanced reporting',
        'Can manage multiple businesses (up to 5)',
        'Priority support',
        
      ],
    },
    {
      title: 'Reseller',
      price: '5000',
      features: ['Custom Features', 'Rebranding allowed', 'White-label support', 'Unlimited businesses'],
    },
  ];

  return (
    <section className="pricing" id="pricing">
      <div className="container">
        <h2>Pricing Plans</h2>
        <div className="pricing-grid">
          {plans.map((plan, index) => (
            <div key={index} className={`pricing-item ${plan.title === 'Business' ? 'popular' : ''}`}>
              <h3>{plan.title}</h3>
              <p className="price">${plan.price}<span>/Lifetime</span></p>
              <ul>
                          {plan.features.map((feature, i) => (
                            <li key={i}>{feature}</li>
                          ))}
                        </ul>
                        <a href="#" className="cta-button">Get Started</a>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
            );
          };
          
          export default PricingSection;
          