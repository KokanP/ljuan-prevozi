import React from 'react';
import './About.css';

function About() {
  // Placeholder for owner's name and company name until provided by user
  const ownerName = "[IME LASTNIKA]";
  const companyName = "[IME FIRME]";

  return (
    <section id="about" className="about-section">
      <div className="about-content">
        <h2>Kdo Smo? Vaš Partner z Izkušnjami</h2>
        <p>
          Moje ime je {ownerName}, in sem ustanovitelj {companyName}. Z dolgoletnimi izkušnjami na področju varnosti, sem se odločil združiti profesionalizem in diskretnost v celostne spremljevalne in prevozne storitve. Razumem pomen zanesljivosti, varnosti in osebnega pristopa, zato vsaki stranki ponudim rešitve, ki presegajo običajne.
        </p>
        <p>
          Naše vrednote so zaupanje, diskretnost, zanesljivost, profesionalnost in osredotočenost na stranke. Vsakemu klientu pristopimo individualno in z največjo mero spoštovanja, saj verjamemo, da so vaše potrebe edinstvene.
        </p>
      </div>
    </section>
  );
}

export default About;
