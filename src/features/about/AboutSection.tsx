import { useTranslation } from 'react-i18next';
import { personalInfo } from '../../data';
import { richText } from '../../utils';
import { SectionHead, CountUp } from '../../components';
import { useLang } from '../../hooks';

export const AboutSection = () => {
  const { t } = useTranslation();
  const lang = useLang();

  return (
    <section id="about">
      <div className="container">
        <SectionHead num="01" title={t('about.title')} />
        <div className="about-grid">
          <div className="about-text">
            <p>{richText(personalInfo.bio[lang])}</p>
            <p>{richText(personalInfo.bio2[lang])}</p>
          </div>
          <div className="stats-grid">
            {personalInfo.stats.map((s, i) => (
              <div className="stat" key={i}>
                <div className="stat-value">
                  <CountUp end={s.value} />
                  {s.plus && <span className="plus">+</span>}
                  {s.suffix && <span className="plus">{s.suffix}</span>}
                </div>
                <div className="stat-label">{s.label[lang]}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
