import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { NAV_LINKS, PRIMARY_CTA } from '../config/navigation.js';
import Button from './Button.jsx';
import './Header.css';

// Structural header: logo slot, desktop nav, mobile hamburger + drawer,
// primary CTA. Visual identity (logo asset, exact spacing/typography) is
// pending the real design reference — see docs/CONTENT_GAPS.md.
export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="header__inner">
        <NavLink to="/" className="header__logo" onClick={() => setMenuOpen(false)}>
          {/* Logo asset: CONTENT SOURCE REQUIRED — text wordmark placeholder */}
          Absolute B2B
        </NavLink>

        <nav className="header__nav header__nav--desktop" aria-label="Primary">
          <ul>
            {NAV_LINKS.map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  className={({ isActive }) =>
                    isActive ? 'header__link header__link--active' : 'header__link'
                  }
                  end={link.to === '/'}
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className="header__cta header__cta--desktop">
          <Button as="link" to={PRIMARY_CTA.to}>
            {PRIMARY_CTA.label}
          </Button>
        </div>

        <button
          type="button"
          className="header__hamburger"
          aria-expanded={menuOpen}
          aria-controls="mobile-nav-drawer"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span className="header__hamburger-bar" />
          <span className="header__hamburger-bar" />
          <span className="header__hamburger-bar" />
        </button>
      </div>

      <nav
        id="mobile-nav-drawer"
        className={
          menuOpen ? 'header__drawer header__drawer--open' : 'header__drawer'
        }
        aria-label="Mobile"
        aria-hidden={!menuOpen}
      >
        <ul>
          {NAV_LINKS.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                className={({ isActive }) =>
                  isActive ? 'header__link header__link--active' : 'header__link'
                }
                end={link.to === '/'}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </NavLink>
            </li>
          ))}
          <li>
            <Button as="link" to={PRIMARY_CTA.to} onClick={() => setMenuOpen(false)}>
              {PRIMARY_CTA.label}
            </Button>
          </li>
        </ul>
      </nav>
    </header>
  );
}
