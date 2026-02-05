import React from 'react';
import './Footer.css';

function Footer() {
  const currentYear = new Date().getFullYear();
  // Placeholder for company name until provided by user
  const companyName = "[IME FIRME]";

  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; {currentYear} {companyName}. Vse pravice pridržane.</p>
        {/* Optional: Add links to privacy policy or terms of service here */}
        {/* <nav>
          <ul>
            <li><a href="/privacy">Politika zasebnosti</a></li>
            <li><a href="/terms">Pogoji uporabe</a></li>
          </ul>
        </nav> */}
      </div>
    </footer>
  );
}

export default Footer;
