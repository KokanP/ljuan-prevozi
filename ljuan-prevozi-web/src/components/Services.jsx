import React from 'react';
import './Services.css';

function Services() {
  return (
    <section id="services" className="services-section">
      <h2>Naše Storitve: Prevoz z Dodano Vrednostjo</h2>
      <p className="services-intro">
        Pri Moder Levu verjamemo, da je prevoz več kot le premikanje od točke A do točke B. Ponujamo celovite, prilagodljive in diskretne storitve, ki so zasnovane tako, da presegajo vaša pričakovanja. Z našim strokovnim znanjem in osebnim pristopom zagotavljamo udobje, zanesljivost in varnost na vsakem koraku.
      </p>

      <div className="services-grid">
        <div className="service-item">
          <h3>Standardni Prevozi</h3>
          <p>Udoben, zanesljiv in varen prevoz, prilagojen vašemu urniku. Ne glede na to, ali potrebujete prevoz na letališče, poslovni sestanek ali zasebno potovanje, smo tu za vas.</p>
        </div>
        <div className="service-item">
          <h3>Spremljevalne Storitve</h3>
          <p>Osebna asistenca in diskretno spremstvo na sestankih, dogodkih ali potovanjih. Skrbimo za vašo varnost in udobje, medtem ko se vi osredotočate na svoje obveznosti.</p>
        </div>
        <div className="service-item">
          <h3>Pomoč in Čakanje</h3>
          <p>Na voljo, ko nas potrebujete – pomoč pri opravkih, čakanje med dogodki ali sestanki. Naša fleksibilnost zagotavlja, da so vaše potrebe vedno na prvem mestu.</p>
        </div>
        <div className="service-item">
          <h3>Dostava Pošte in Predmetov</h3>
          <p>Hitra, varna in diskretna dostava pomembnih dokumentov, paketov in drugih predmetov. Zaupate nam lahko, da bodo vaši predmeti prispeli pravočasno in varno.</p>
        </div>
        <div className="service-item">
          <h3>Dvig in Dostava Paketov</h3>
          <p>Urejen in pravočasen prevzem ter dostava paketov. Prihranite čas in zaupajte nam logistiko, da bodo vaši paketi dostavljeni brezskrbno.</p>
        </div>
        <div className="service-item">
          <h3>Osebna Varnost in Diskretnost</h3>
          <p>Z izkušnjami nekdanjega varnostnika zagotavljamo dodatno raven varnosti in zanesljivosti. Vsaka storitev je izvedena z najvišjo stopnjo diskretnosti in profesionalnosti.</p>
        </div>
      </div>
    </section>
  );
}

export default Services;
