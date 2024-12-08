import React from 'react';
import './styles/Careers.css';

const Careers = () => {
  const jobListings = [
    {
      title: 'Frontend Developer',
      location: 'Remote',
      type: 'Full-Time',
      description: 'We are looking for a skilled frontend developer with experience in React.js and modern web technologies.',
      applyLink: '#',
    },
    {
      title: 'Data Scientist',
      location: 'San Francisco, CA',
      type: 'Full-Time',
      description: 'Join our team of data experts to analyze and derive insights from large datasets.',
      applyLink: '#',
    },
    {
      title: 'Project Manager',
      location: 'New York, NY',
      type: 'Contract',
      description: 'Seeking a project manager to oversee multiple projects and ensure timely delivery.',
      applyLink: '#',
    },
  ];

  return (
    <section className="careers-section">
      <div className="container">
        <h2 className="section-title">Join Our Team</h2>
        <div className="job-listings">
          {jobListings.map((job, index) => (
            <div key={index} className="job-card">
              <h3 className="job-title">{job.title}</h3>
              <p className="job-location"><strong>Location:</strong> {job.location}</p>
              <p className="job-type"><strong>Type:</strong> {job.type}</p>
              <p className="job-description">{job.description}</p>
              <a href={job.applyLink} className="apply-button">Apply Now</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Careers;