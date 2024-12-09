
import React from 'react';
import './styles/PricingSection.css';
import { FaStar } from 'react-icons/fa';

const PricingSection = () => {
  const plans = [
    {
      badge: 'Elevate Plan',
      category: 'Subscription',
      price: '20',
      features: [
        'Up to 50 users',
        'Advanced reporting',
        'Custom integrations',
        'Priority support',
      ],
    },
    {
      badge: 'Legacy Plan',
      category: 'One Time Payment',
      price: '300',
      features: [
        'Lifetime updates',
        'No recurring fees',
        'Up to 5 businesses',
        'Advanced reporting',
        'Priority support',
      ],
    },
    {
      badge: 'Partner Plan',
      category: 'Reseller',
      price: '2000',
      features: [
        'Full source code',
        'Custom features',
        'Rebranding allowed',
        'Priority support',
      ],
    },
  ];

  return (
    <section className="pricing" id="pricing">

      <div className="container">
        <h2>Pricing Plans</h2>
        <div className="pricing-grid">
          {plans.map((plan, index) => (
            <div key={index} className={`pricing-item  ${plan.category === 'One Time Payment' ? 'popular' : ''}`}>
              <h3>{plan.category}</h3>


              <p className="price  relative m-0 p-0 ">
                <span className='absolute left-0 top-0 transform translate-y-[-50%] fs-6'>
                  Starting at:</span>
                {
                  plan.category === 'Subscription'
                    ? <>
                      ${plan.price} <span className=''>/Month</span>
                    </>
                    : `$${plan.price}`
                }
              </p>
              <ul>
                {plan.features.map((feature, i) => (
                  <li key={i} className='d-flex align-items-center'>
                    <FaStar />{feature}</li>
                ))}
              </ul>
              <a  className="cta-button"
               onClick={() => window.location.href = '/pricing'}
              >
                Learn More</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;

