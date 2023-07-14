import React from 'react';

function Service() {
  const services = [
    {
      title: 'Makeup Consultation',
      description: 'Get personalized recommendations for your makeup needs.',
      icon: 'fa fa-eye',
    },
    {
      title: 'Skincare Analysis',
      description: 'Discover the perfect skincare routine for your skin type.',
      icon: 'fa fa-heart',
    },
    {
      title: 'Beauty Workshops',
      description: 'Join interactive workshops to learn makeup techniques and tips.',
      icon: 'fa fa-paint-brush',
    },
  ];

  return (
    <div>
      <h1>Welcome to the Makeup Products App!</h1>
      <p>Discover a wide range of high-quality makeup products.</p>
      <p>Explore our collection of cosmetics, skincare, and beauty tools.</p>
      <p>Find the perfect products to enhance your beauty and express your style.</p>
      <p>Start browsing and enjoy your makeup journey!</p>

      <h2>Our Services</h2>
      <div className="services">
        {services.map((service, index) => (
          <div className="service" key={index}>
            <i className={service.icon}></i>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Service;
