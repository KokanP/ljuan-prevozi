import React from 'react';
import './Contact.css';

function Contact() {
  const address = "Vojkova cesta 11"; // User provided address
  const city = "Ljubljana";
  // Placeholder for company name, phone, and email until provided by user
  const companyName = "[IME FIRME]";
  const phoneNumber = "[TELEFONSKA ŠTEVILKA]";
  const emailAddress = "[E-POŠTNI NASLOV]";

  return (
    <section id="contact" className="contact-section">
      <div className="contact-content">
        <h2>Kontaktirajte Nas</h2>
        <p className="contact-intro">
          Z veseljem odgovorimo na vsa vaša vprašanja in vam pomagamo pri načrtovanju vaših potreb. Stopite v stik z nami za neobvezujoč pogovor ali individualno ponudbo.
        </p>

        <div className="contact-info">
          <div className="info-item">
            <h3>Naslov</h3>
            <p>{companyName}</p>
            <p>{address}</p>
            <p>{city}</p>
          </div>
          <div className="info-item">
            <h3>Telefon</h3>
            <p><a href={`tel:${phoneNumber}`}>{phoneNumber}</a></p>
          </div>
          <div className="info-item">
            <h3>E-pošta</h3>
            <p><a href={`mailto:${emailAddress}`}>{emailAddress}</a></p>
          </div>
        </div>

        {/* Optional: Add a simple map here */}
        {/*
        <div className="map-container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2777.632296720078!2d14.53723321564758!3d46.06456097911299!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476532bb9a9b0c53%3A0x6b8d2a6a1b2c4d9a!2sVojkova%20cesta%2011%2C%201000%20Ljubljana!5e0!3m2!1sen!2ssi!4v1678912345678!5m2!1sen!2ssi"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Lokacija Vojkova cesta 11, Ljubljana"
          ></iframe>
        </div>
        */}
      </div>
    </section>
  );
}

export default Contact;
