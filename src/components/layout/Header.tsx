import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { navItems, personalInfo } from '../../data';
import { useLanguage, useThemeTransition, useActiveSection, useLang } from '../../hooks';
import { Icon } from '../ui';

export const Header = () => {
  const { t } = useTranslation();
  const lang = useLang();
  const { setLanguage } = useLanguage();
  const { isDark, toggleWithTransition, buttonRef } = useThemeTransition();
  const activeId = useActiveSection(
    navItems.map((n) => n.id),
    140
  );

  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={`nav${scrolled ? ' scrolled' : ''}`}>
      <div className="container nav-inner">
        <a href="#home" className="brand">
          <span className="brand-mark">{personalInfo.name.split(' ').map(w => w[0]).join('')}</span>
          <span className="brand-name">
            klosinski<span className="brand-dot">.</span>dev
          </span>
        </a>
        <div className="nav-links">
          {navItems.map((n, i) => (
            <a
              key={n.id}
              href={`#${n.id}`}
              className={`nav-link${activeId === n.id ? ' active' : ''}`}
            >
              <span className="nav-num">{String(i).padStart(2, '0')}</span>
              {n.label[lang]}
            </a>
          ))}
        </div>
        <div className="nav-actions">
          <button
            className="icon-btn lang-btn"
            onClick={() => setLanguage(lang === 'pl' ? 'en' : 'pl')}
            title={t('nav.toggleLanguage')}
          >
            <span className={lang === 'pl' ? 'lang-active' : ''}>PL</span>
            <span className="lang-sep">/</span>
            <span className={lang === 'en' ? 'lang-active' : ''}>EN</span>
          </button>
          <button
            ref={buttonRef}
            className="icon-btn"
            onClick={toggleWithTransition}
            title={t('nav.toggleTheme')}
          >
            {isDark ? <Icon.Sun /> : <Icon.Moon />}
          </button>
          <a
            className="icon-btn"
            href={personalInfo.social.github}
            target="_blank"
            rel="noreferrer"
          >
            <Icon.Github />
          </a>
        </div>
      </div>
    </nav>
  );
};
