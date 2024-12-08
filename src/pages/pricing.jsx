import React, { useState } from 'react';
import { Container, Row, Card, Button, Badge, Nav } from 'react-bootstrap';
import { FaCheckCircle } from 'react-icons/fa';
import './styles/pricing.css';
import NavBar from '../components/nav';
import Footer from '../components/Footer';
const PricingPage = () => {
  const [activeTab, setActiveTab] = useState('general');
  const [isAnnual, setIsAnnual] = useState(false);
  

  const generalPlans = [
    {
      badge: 'Standard',
      title: 'Affordable Start.',
      priceMonthly: 20,
      priceAnnual: 14,
      features: ['Up to 5 active users', 'Standard reporting', 'Email support', 'single business'],
      color: '#FF6F61',
    },
    {
      badge: 'Medium',
      title: 'Value Packed.',
      priceMonthly: 50,
      priceAnnual: 35,
      features: ['6–15 active users', 'Advanced reporting', 'Priority email support', 'single business'],
      color: '#FFA500',
    },
    {
      badge: 'Business',
      title: 'Built to Scale.',
      priceMonthly: 100,
      priceAnnual: 70,
      features: ['16–50 active users', 'Custom integrations', 'Phone support', 'Upto 2 businesses'],
      color: '#28B463',
    },
    {
      badge: 'Enterprise',
      title: 'Unlimited Potential.',
      priceMonthly: 300,
      priceAnnual: 210,
      features: ['Unlimited users', 'Dedicated manager', 'Custom solutions', 'Upto 5 businesses'],
      color: '#3498DB',
    },
  ];

  const oneTimePlans = generalPlans.map(plan => ({
    ...plan,
    price: plan.priceMonthly * 15,
    serviceFee: (plan.priceMonthly * 15) * 0.15,
  }));

  const whiteLabelPlans = [
    {
      badge: 'Standard License',
      description: 'Code & No Extras.',
      price: '2000',
      features: ['Full source code', 'No updates', 'No ongoing support'],
      color: '#FF6F61',
    },
    {
      badge: 'Professional License',
      description: 'Code + Support.',
      price: '3500',
      features: ['Source code', '6 months updates', 'Email support'],
      color: '#FFA500',
    },
    {
      badge: 'Enterprise License',
      description: 'Custom Branded.',
      price: '5000',
      features: ['Custom branding setup', '12 months updates', 'Priority support'],
      color: '#28B463',
    },
  ];
  

  const renderPlanCard = (plan, isGeneral = true) => (
    <Card
      key={plan.badge}
      className="h-100 border-0 shadow pricing-card"
      style={{ borderTop: `5px solid ${plan.color}` }}
    >
      <Card.Body>
        <Badge className="mb-4" style={{ backgroundColor: plan.color, color: '#fff', padding: '6px 12px', borderRadius: '12px' }}>
          {plan.badge}
        </Badge>
        <Card.Title className="fw-bold mt-3 text-center">{plan.title}</Card.Title>
        <div className="pricing-value mt-3 mb-4">
          <h6 className="text-primary fw-bold text-center">
            {isGeneral ? `$${isAnnual ? plan.priceAnnual : plan.priceMonthly}/mo` : `$${plan.price}`}
          </h6>
          {isGeneral && (
            <p className="text-muted small text-center">
              Billed {isAnnual ? 'annually' : 'monthly'}
            </p>
          )}
          {!isGeneral && (
            <p className="text-muted small text-center">
              Annual Service Fee: ${plan.serviceFee.toFixed(0)}
            </p>
          )}
        </div>
        <hr />
        <ul className="list-unstyled text-secondary">
          {plan.features.map((feature, index) => (
            <li key={index} className="mb-2 d-flex align-items-center">
              <FaCheckCircle className="text-success me-2" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
        <Button variant='primary' className="w-100 mt-4" style={{ transition: 'transform 0.2s', color: '#001f3f' }} onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'} onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}>
          Get Started
        </Button>
      </Card.Body>
    </Card>
  );

  const renderWhiteLabelCard = plan => (
    <Card
      key={plan.badge}
      className="h-100 shadow pricing-card"
      style={{ borderTop: `5px solid ${plan.color}` }}
    >
      <Card.Body>
        <Badge className="mb-2" style={{ backgroundColor: plan.color, color: '#fff', padding: '6px 12px', borderRadius: '12px' }}>
          {plan.badge}
        </Badge>
        <Card.Title className="fw-bold text-center">{plan.description}</Card.Title>
        <h3 className="text-primary fw-bold mb-3 text-center">
          ${plan.price}
        </h3>
        <hr />
        <ul className="list-unstyled text-secondary">
          {plan.features.map((feature, index) => (
            <li key={index} className="mb-2 d-flex align-items-center">
              <FaCheckCircle className="text-success me-2" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
        <Button variant="primary" className="w-100 mt-4" style={{ transition: 'transform 0.2s' }} onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'} onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}>
          Get Started
        </Button>
      </Card.Body>
    </Card>
  );

  const togglePlans = () => setIsAnnual(!isAnnual);
  
  return (
    <>
    <NavBar headerColor='#fff' color = '#001f3f' />
    <div className="text-center mb-5 pricing-header" >
        <h1 >Pricing Plans</h1>
        <p >Flexible and transparent pricing tailored for your business needs.</p>
      </div>
    <Container className="pb-5">
      <Nav variant="tabs" className="nav-tabs justify-content-center gap-4 mb-4" onSelect={setActiveTab}>
        <Nav.Item>
          <Nav.Link eventKey="general">General Plans</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="one-time">One-Time Payment</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="white-label">White Label Solutions</Nav.Link>
        </Nav.Item>
      </Nav>
      <div className="d-flex flex-column align-items-center mb-4">
        {activeTab === 'general' && (
          <> 
             <p className="fw-bold fs-6"> Choose from flexible monthly or annual plans tailored to teams of all sizes.
             Whether you're just starting or scaling up, weve got you covered. </p> 
            <div className="d-flex align-items-center">
              <span className="text-secondary me-3">Monthly</span>
              <div className="toggle-wrapper">
                <input type="checkbox" onChange={togglePlans} checked={isAnnual} />
              </div>
              <span className="text-secondary ms-3">Annual <span className="save-discount">(Save up to 30%)</span></span>
            </div>
          </>
        )}
          {activeTab === 'one-time' && (
            <>
            <p className="fw-bold fs-6">
              Make a one-time investment for lifetime access to powerful features, with no recurring payments. 
               Perfect for long-term commitment.
           </p>
           <p className="text-muted">Please note, an annual service fee of 15% applies for ongoing support and updates.</p>
           </>
         )} 
         {activeTab === 'white-label' && (
            <p className="fw-bold fs-6">
          Build your brand with our white-label solutions, offering fully customizable 
          licensing options to suit your unique needs.
           </p>
         )}
      </div>
      <Row className="justify-content-center g-4 pricing-cards-container">
        {activeTab === 'general' && generalPlans.map(plan => renderPlanCard(plan))}
        {activeTab === 'one-time' && oneTimePlans.map(plan => renderPlanCard(plan, false))}
        {activeTab === 'white-label' && whiteLabelPlans.map(renderWhiteLabelCard)}
      </Row>
    </Container>
    <Footer  headerColor='#fff' color = '#001f3f'/>
    </>
  );
};

export default PricingPage;
