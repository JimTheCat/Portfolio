import { useTranslation } from 'react-i18next';
import { educationData, formatDateRange } from '../../data';
import { SectionHead } from '../../components';
import { useLang } from '../../hooks';
import { getAssetPath } from '../../utils';

export const EducationSection = () => {
  const { t } = useTranslation();
  const lang = useLang();

  return (
    <section id="education">
      <div className="container">
        <SectionHead num="04" title={t('education.title')} />
        <div className="edu-grid">
          {educationData.map((edu) => {
            const inProgress = edu.status === 'in-progress';
            return (
              <div
                className={`edu-card${inProgress ? ' in-progress' : ''}`}
                key={edu.id}
              >
                {edu.logo && (
                  <img
                    className="edu-logo"
                    src={getAssetPath(edu.logo)}
                    alt={edu.institution}
                    loading="lazy"
                  />
                )}
                <span className={`edu-status${inProgress ? '' : ' done'}`}>
                  {inProgress ? t('education.statusInProgress') : t('education.statusCompleted')}
                </span>
                <div className="edu-degree">{edu.degree[lang]}</div>
                <div className="edu-institution">{edu.institution}</div>
                <div className="edu-field">{edu.field[lang]}</div>
                {edu.description && (
                  <div className="edu-desc">{edu.description[lang]}</div>
                )}
                <div className="edu-meta">
                  <span>{formatDateRange(edu.startDate, edu.endDate, lang)}</span>
                  <span>{edu.location[lang]}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
