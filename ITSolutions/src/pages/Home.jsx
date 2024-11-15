import React from 'react';
import '../styles/Home.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <>
    <Navbar/>
    <div className="home-container">
    <div className="home-content">
        <div className="text-section">
          <h1>Managed IT Services</h1>
          <p>Our suite of IT managed services goes beyond basic support—we provide end-to-end management of your IT environment, optimizing performance, enhancing security, and driving business continuity. Our highly skilled professionals are equipped with the latest technology and industry best practices, offering unparalleled service and support.</p>
        </div>

        <div className="form-section">
          <h2>Get a <span>Call Back</span></h2>
          <form>
            <div className="form-group">
              <label htmlFor="name"></label>
              <input type="text" id="name" name="name" placeholder="Name*" required />
            </div>
            <div className="form-group">
              <label htmlFor="email"></label>
              <input type="email" id="email" name="email" placeholder="Email*" required />
            </div>
            <div className="form-group">
              <label htmlFor="phone"></label>
              <input type="number" id="mobile" name="mobile" placeholder="Phone Number*" required />
            </div>
            <div className="form-group">
              <label htmlFor="company"></label>
              <input type="text" id="company" name="company" placeholder="Company Name*" required />
            </div>
            <div className="form-group">
              <label htmlFor="message"></label>
              <textarea id="message" name="message" placeholder="Write your message" required></textarea>
            </div>
            <button type="submit">Submit</button>
          </form>
        </div>
    </div>
    </div>

     {/* Our Services Section */}
     <section className="services-section">
        <h2>Our Services</h2>
        <div className="service-cards">
          <div className="service-card">
            <img src="path-to-image.jpg" alt="Service 1" />
            <h3>Web Development</h3>
          </div>
          <div className="service-card">
            <img src="path-to-image.jpg" alt="Service 2" />
            <h3>Cloud Solutions</h3>
          </div>
          <div className="service-card">
            <img src="path-to-image.jpg" alt="Service 3" />
            <h3>IT Support</h3>
          </div>
          <div className="service-card">
            <img src="path-to-image.jpg" alt="Service 4" />
            <h3>Security Services</h3>
          </div>
          <div className="service-card">
            <img src="path-to-image.jpg" alt="Service 5" />
            <h3>Consulting</h3>
          </div>
          <div className="service-card">
            <img src="path-to-image.jpg" alt="Service 6" />
            <h3>Data Analytics</h3>
          </div>
          <div className="service-card">
            <img src="path-to-image.jpg" alt="Service 7" />
            <h3>Network Management</h3>
          </div>
          <div className="service-card">
            <img src="path-to-image.jpg" alt="Service 8" />
            <h3>Software Development</h3>
          </div>
        </div>
      </section>

       {/* Technoforte Description Section */}
       <section className="description">
        <h2>Technoforte – Your All-in-One IT Powerhouse</h2>
        <p>
          Is your business facing frequent IT disruptions, security vulnerabilities, or inefficient systems management? Technoforte’s Managed IT Services provide comprehensive, proactive, and reliable solutions tailored to your unique business needs, ensuring seamless operations and a robust IT infrastructure.
        </p>
        
        <p><span>Digital Transformation Services: </span>
          Continuous monitoring of your network infrastructure including bandwidth management, firewall configuration, network security audits, and real-time performance analytics.
        </p>

        <p><span>Cloud Services and Management: </span>
          From cloud migration to hybrid cloud solutions, we manage your cloud environment. We cover AWS, Azure, and Google Cloud, including architecture design, deployment, and ongoing management.
        </p>

        <p><span>Cybersecurity Solutions: </span>
          Protect your business with advanced cybersecurity measures including vulnerability assessments, intrusion detection and prevention systems (IDPS), endpoint protection, and managed security services.
        </p>

        <p><span>Data Analytics Services: </span>
          Technoforte offers end-to-end data management and analytics services using the latest tools including data governance, visualization, ingestion, ELT etc., to drive data-driven decision-making.
        </p>

        <p><span>Digital Identity Management Services: </span>
          We help setup and manage MOSIP-based digital identity solutions, from conception to QA, testing and deployment.
        </p>

        <p><span>IT Consulting and Strategy: </span>
          Expert consulting services to help you align your IT strategy with business objectives. Our team provides in-depth assessments, technology roadmaps, and strategic guidance.
        </p>

        <p><span>OpenCRVS Services: </span>
          We help create transformative solutions for digital civil registration based on the open-source digital public good OpenCRVS, enabling safe and secure, low resource registration solutions.
        </p>

        <p><span>IT Staff Augmentation: </span>
          Whether you need skilled developers, network engineers, cybersecurity experts, or IT project managers, we provide top-tier IT talent who seamlessly integrate into your existing teams.
        </p>
        <p>
          Technoforte creates a streamlined IT environment where disruptions are minimized, security is maximized, and your IT investments drive tangible business outcomes. Our Managed IT Services empower your business to focus on what it does best, while we handle the complexities of IT management.
        </p>
        <p>
          Ready to transform your IT operations? Contact Technoforte today to schedule a consultation. Let us be your trusted IT partner—empowering your success with cutting-edge technology and exceptional service.
        </p>
        <p><span>Connect with us. Adopt Innovation with Technoforte.</span></p>
      </section>
      <Footer/>
    </>
  );
};

export default Home;
