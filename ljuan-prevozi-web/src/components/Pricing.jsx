import React from 'react';
import './Pricing.css';

function Pricing() {
  return (
    <section id="pricing" className="pricing-section">
      <h2>Okvirni Cenik Storitev</h2>
      <p className="pricing-disclaimer">
        Cene so informativne. Za natančno ponudbo, prilagojeno vašim specifičnim potrebam in željam, nas prosimo kontaktirajte. Z veseljem vam bomo pripravili individualno ponudbo.
      </p>

      <div className="pricing-grid">
        <div className="pricing-card">
          <h3>Prevoz (znotraj Ljubljane)</h3>
          <p className="price">od XX €</p>
          <ul>
            <li>Zanesljiv in hiter prevoz</li>
            <li>Udobno vozilo</li>
            <li>Profesionalni voznik</li>
          </ul>
          <a href="#contact" className="btn btn-primary">Povprašajte</a>
        </div>

        <div className="pricing-card">
          <h3>Prevoz (izven Ljubljane)</h3>
          <p className="price">od XX €/km</p>
          <ul>
            <li>Potovanja po Sloveniji in tujini</li>
            <li>Prilagodljivost poti</li>
            <li>Dolgi prevozi</li>
          </ul>
          <a href="#contact" className="btn btn-primary">Povprašajte</a>
        </div>

        <div className="pricing-card">
          <h3>Spremljevalne Storitve</h3>
          <p className="price">od XX €/uro</p>
          <ul>
            <li>Osebna asistenca</li>
            <li>Diskretno spremstvo</li>
            <li>Varnostna podpora</li>
          </ul>
          <a href="#contact" className="btn btn-primary">Povprašajte</a>
        </div>
      </div>
      <p className="note">
        *Končna cena je odvisna od dolžine in zahtevnosti storitve.
      </p>
    </section>
  );
}

export default Pricing;
