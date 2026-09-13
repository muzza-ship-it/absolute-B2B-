import { NAV_LINKS } from '../config/navigation.js';
import { siteContent } from '../data/site-content.js';
import './Footer.css';

// Structural footer. Social links and legal pages are CONTENT SOURCE
// REQUIRED — omitted (not invented) until confirmed; see CONTENT_GAPS.md.
export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__col">
          <p className="footer__logo">Absolute B2B</p>
          <p className="footer__muted">
            {/* Company description: CONTENT SOURCE REQUIRED */}
          </p>
        </div>

        <div className="footer__col">
          <h3 className="footer__heading">Navigation</h3>
          <ul className="footer__list">
            {NAV_LINKS.map((link) => (
              <li key={link.to}>
                <a href={link.to}>{link.label}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer__col">
          <h3 className="footer__heading">Contact</h3>
          <ul className="footer__list">
            <li>
              <a href={`mailto:${siteContent.contact.email}`}>
                {siteContent.contact.email}
              </a>
            </li>
            <li>
              <a href={`tel:${siteContent.contact.phoneHref}`}>
                {siteContent.contact.phoneDisplay}
              </a>
            </li>
            <li>
              <a href={`tel:${siteContent.contact.secondaryPhoneHref}`}>
                {siteContent.contact.secondaryPhoneDisplay}
              </a>
            </li>
            <li>
              <strong>Virtual office</strong><br />
              {siteContent.contact.address}
            </li>
          </ul>
        </div>
      </div>

      <div className="footer__bottom">
        <p>&copy; {year} Absolute B2B Pvt. Ltd. All rights reserved.</p>
        {/* Legal links (Privacy/Terms): CONTENT SOURCE REQUIRED — presence unconfirmed */}
      </div>
    </footer>
  );
}
