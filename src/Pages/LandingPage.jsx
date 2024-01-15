import React from 'react';
import Header from '../components/Header/Header';
import './LandingPage.css';

const LandingPage = () => {


  return (
    
    <div className="main-container">
      <Header />
      <h1 className="welcome-header">Git Lit with Scotty B's LEDs Custom Neon Signs</h1>
      <section className="section1">
        <h2 >Welcome Scotty B's LEDs, where your brightest ideas shine in neon!</h2>
        <p>
          At Scotty B's LEDs, we're passionate about lighting up your world with custom,
          high-quality neon signs. With over two decades of expertise in the field, 
          our commitment is to turn your vision into a luminous reality. Perfect for 
          businesses, special events, or personal home decor, our neon signs are crafted 
          to add a unique glow to any space.
        </p>
      </section>

      <section className="section2">
        <h2>Why Scotty B's LEDs?</h2>
        <ul>
          <li>
              Tailored to Your Taste: We specialize in creating custom designs that reflect your style and needs.
          </li>
          <li>
              Unmatched Quality: Our signs are made with top-tier materials, ensuring both beauty and longevity.
          </li>
          <li>
              Eco-Friendly Efficiency: FaceIt neon signs are not just eye-catching; they're also energy-efficient.
          </li>
          <li>
              Skilled Craftsmanship: Our team's expertise in neon artistry guarantees that each sign is a piece of illuminated perfection.
          </li>
          <li>
              Prompt Delivery: We value your time, ensuring swift and reliable delivery of your neon sign.
          </li>
          </ul>
      </section>

      <section className="section3">
        <h2>Our Services</h2>
        <ul>
          <li>
            Business Signage: Boost your brand's visibility with a striking neon sign.
          </li>
          <li>
            Home Decor: Personalize your space with a unique neon touch.
          </li>
          <li>
            Event Signage: Make your events memorable with our custom neon signs.
          </li>
          <li>
            Bespoke Projects: No matter your idea, we're here to bring it to neon life.
          </li>
        </ul>
      </section>
      <section className="section4">
        <h2>Ready to Light Up Your Idea?</h2>
        <p>
        Get in touch with us today to begin crafting your dream neon sign. At FaceIt, 
        we're excited to make your bright ideas a neon reality!
        </p>
      </section>
      <section className="section5">
        <h2>Section 5 Title</h2>
        <p>This is the content for Section 5.</p>
      </section>
      <section className="section6">
        <h2>Section 6 Title</h2>
        <p>This is the content for Section 6.</p>
        
      </section>

      <section className="section7">
        <h2>Section 7 Title</h2>
        <p>This is the content for Section 7.</p>
       
      </section>

      <section className="section8">
        <h2>Section 8 Title</h2>
        <p>This is the content for Section 8.</p>
        
      </section>

      <footer className="footer">
        This is the footer section
      </footer>
    </div>
  );
};

export default LandingPage;


