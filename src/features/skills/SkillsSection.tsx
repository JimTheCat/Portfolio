import { useTranslation } from 'react-i18next';
import { skillsData, type SkillCategory } from '../../data';
import { SectionHead } from '../../components';
import { useLang, useIntersectionObserver } from '../../hooks';

const SkillCat = ({ cat, lang }: { cat: SkillCategory; lang: 'pl' | 'en' }) => {
  const [ref, visible] = useIntersectionObserver({ threshold: 0.2 });

  return (
    <div className="skill-cat" ref={ref as React.RefObject<HTMLDivElement>}>
      <div className="skill-cat-head">
        <span className="skill-cat-name">{cat.category[lang]}</span>
        <span className="skill-cat-count">
          {String(cat.skills.length).padStart(2, '0')}
        </span>
      </div>
      <div className="skill-list">
        {cat.skills.map((s, i) => (
          <div className="skill-row" key={i}>
            <div className="skill-row-top">
              <span className="skill-name">{s.name}</span>
              <span className="skill-level">{s.level}%</span>
            </div>
            <div className="skill-bar">
              <div
                className="skill-bar-fill"
                style={{
                  width: visible ? `${s.level}%` : '0',
                  transitionDelay: `${i * 60}ms`,
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export const SkillsSection = () => {
  const { t } = useTranslation();
  const lang = useLang();

  return (
    <section id="skills">
      <div className="container">
        <SectionHead num="02" title={t('skills.title')} />
        <div className="skills-grid">
          {skillsData.map((cat, i) => (
            <SkillCat key={i} cat={cat} lang={lang} />
          ))}
        </div>
      </div>
    </section>
  );
};
