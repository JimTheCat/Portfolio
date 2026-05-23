import { useTranslation } from 'react-i18next';
import {
  experienceData,
  formatDateRange,
  calculateDuration,
} from '../../data';
import { SectionHead, Icon } from '../../components';
import { useLang } from '../../hooks';
import { getAssetPath } from '../../utils';

export const ExperienceSection = () => {
  const { t } = useTranslation();
  const lang = useLang();

  return (
    <section id="experience">
      <div className="container">
        <SectionHead num="03" title={t('experience.title')} />
        <div className="timeline">
          {experienceData.map((exp) => {
            const current = exp.endDate === null;
            return (
              <div className="timeline-item" key={exp.id}>
                <span className={`timeline-dot${current ? ' current' : ''}`} />
                <div className="exp-card">
                  <div className="exp-head">
                    <div className="exp-head-left">
                      {exp.logo && (
                        <img
                          className="exp-logo"
                          src={getAssetPath(exp.logo)}
                          alt={exp.company}
                          loading="lazy"
                        />
                      )}
                      <div>
                        <div className="exp-company">{exp.company}</div>
                        <div className="exp-position">
                          {exp.position[lang]} ·{' '}
                          <span>{t(`experience.${exp.type}`)}</span>
                        </div>
                      </div>
                    </div>
                    <div className="exp-meta">
                      <div>
                        <Icon.Calendar />{' '}
                        {formatDateRange(exp.startDate, exp.endDate, lang)}
                      </div>
                      <div style={{ marginTop: 4 }}>
                        <Icon.MapPin /> {exp.location[lang]}
                      </div>
                      <span className="duration">
                        {calculateDuration(exp.startDate, exp.endDate, lang)}
                      </span>
                    </div>
                  </div>
                  <div className="exp-desc">{exp.description[lang]}</div>
                  <div className="tech-tags">
                    {exp.technologies.map((tag) => (
                      <span className="tech-tag" key={tag}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
