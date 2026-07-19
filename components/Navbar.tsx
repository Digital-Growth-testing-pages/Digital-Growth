'use client';

import Link from 'next/link';
import { useState } from 'react';
import { useLanguage } from './LanguageContext';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t, language: currentLang, setLanguage: changeLanguage } = useLanguage();

  return (
    <nav className="navbar">
      <Link href="/" className="logo-area" id="logo-home" aria-label="Digital Growth KH Logo">
        <div className="logo-main">
          <span>D</span>igital <span>G</span>rowth KH
        </div>
        <div className="logo-sub">{t('slogan')}</div>
      </Link>

      <button
        type="button"
        className="hamburger"
        aria-label="Toggle navigation menu"
        aria-expanded={isMenuOpen}
        onClick={() => setIsMenuOpen((prev) => !prev)}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
        <li>
          <Link href="/" onClick={() => setIsMenuOpen(false)}>
            {t('nav_home')}
          </Link>
        </li>
        <li>
          <Link href="/services" onClick={() => setIsMenuOpen(false)}>
            {t('nav_services')} <span className="nav-arrow">&#9662;</span>
          </Link>
          <ul className="dropdown-content" style={{ paddingTop: '0.75rem', marginTop: '-0.75rem' }}>
            <li>
              <Link href="/services#growth-package" onClick={() => setIsMenuOpen(false)}>
                {t('growth_title')}
              </Link>
            </li>
            <li>
              <Link href="/services#web-dev" onClick={() => setIsMenuOpen(false)}>
                {t('webdev_title')}
              </Link>
            </li>
            <li>
              <Link href="/services#classic" onClick={() => setIsMenuOpen(false)}>
                {t('classic_title')}
              </Link>
            </li>
          </ul>
        </li>
        <li>
          <Link href="/projects" onClick={() => setIsMenuOpen(false)}>
            {t('nav_projects')} <span className="nav-arrow">&#9662;</span>
          </Link>
          <ul className="dropdown-content" style={{ paddingTop: '0.75rem', marginTop: '-0.75rem' }}>
            <li>
              <Link href="/projects#food" onClick={() => setIsMenuOpen(false)}>
                {t('cat_food')}
              </Link>
            </li>
            <li>
              <Link href="/projects#accommodation" onClick={() => setIsMenuOpen(false)}>
                {t('cat_accommodation')}
              </Link>
            </li>
            <li>
              <Link href="/projects#wellness" onClick={() => setIsMenuOpen(false)}>
                {t('cat_wellness')}
              </Link>
            </li>
            <li>
              <Link href="/projects#landscape" onClick={() => setIsMenuOpen(false)}>
                {t('cat_landscape')}
              </Link>
            </li>
          </ul>
        </li>
        <li>
          <Link href="/about" onClick={() => setIsMenuOpen(false)}>
            {t('nav_about')}
          </Link>
        </li>
        <li>
          <Link href="/blog" onClick={() => setIsMenuOpen(false)}>
            {t('nav_blog')}
          </Link>
        </li>
        <li>
          <Link href="/contact" onClick={() => setIsMenuOpen(false)}>
            {t('nav_contact')}
          </Link>
        </li>
        <li className="lang-switch">
          <span
            role="button"
            tabIndex={0}
            className={currentLang === 'en' ? 'active underline underline-offset-4' : ''}
            onClick={() => changeLanguage('en')}
            onKeyDown={(event) => {
              if (event.key === 'Enter' || event.key === ' ') {
                changeLanguage('en');
              }
            }}
          >
            EN
          </span>
          <span
            role="button"
            tabIndex={0}
            className={currentLang === 'km' ? 'active underline underline-offset-4' : ''}
            onClick={() => changeLanguage('km')}
            onKeyDown={(event) => {
              if (event.key === 'Enter' || event.key === ' ') {
                changeLanguage('km');
              }
            }}
          >
            ភាសាខ្មែរ
          </span>
          <span
            role="button"
            tabIndex={0}
            className={currentLang === 'zh' ? 'active underline underline-offset-4' : ''}
            onClick={() => changeLanguage('zh')}
            onKeyDown={(event) => {
              if (event.key === 'Enter' || event.key === ' ') {
                changeLanguage('zh');
              }
            }}
          >
            中文
          </span>
        </li>
        <li className="quote-btn-wrapper">
          <Link href="/contact" className="free-quote-btn" onClick={() => setIsMenuOpen(false)}>
            {t('free_quote')}
          </Link>
        </li>
      </ul>
    </nav>
  );
}
