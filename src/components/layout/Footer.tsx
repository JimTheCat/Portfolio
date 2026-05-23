import { useTranslation } from 'react-i18next';
import { personalInfo } from '../../data';

export const Footer = () => {
  const { t } = useTranslation();
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-meta">
          © {year} · {personalInfo.name} · {t('footer.built')}
        </div>
        <div className="footer-links">
          <a href={personalInfo.social.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href={personalInfo.social.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a href={`mailto:${personalInfo.email}`}>Email</a>
        </div>
      </div>
    </footer>
  );
};
