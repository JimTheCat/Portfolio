import { useTranslation } from 'react-i18next';
import { personalInfo, experienceData } from '../../data';
import { siteConfig } from '../../config/site';
import { useTypewriter, useLang } from '../../hooks';
import { richText, getAssetPath } from '../../utils';
import { Icon } from '../../components';

export const HeroSection = () => {
  const { t } = useTranslation();
  const lang = useLang();
  const layout = siteConfig.heroLayout;
  const { text: word } = useTypewriter({ words: personalInfo.rolePrefixes });

  const [firstName, lastName] = personalInfo.name.split(' ');

  return (
    <section id="home" className="hero">
      <div className="container">
        <div
          className="hero-grid"
          style={layout === 'single' ? { gridTemplateColumns: '1fr' } : undefined}
        >
          <div>
            <span className="hero-eyebrow">
              <span className="status-dot" />
              {personalInfo.available[lang]}
              <span style={{ opacity: 0.4 }}>·</span>
              {personalInfo.location[lang]}
            </span>
            <h1>
              {firstName} <span className="accent">{lastName}</span>
            </h1>
            <div className="typewriter-line">
              <span className="typewriter-prompt">$</span>
              <span>{t('hero.iam')}</span>
              <span className="typewriter-text">{word}</span>
              <span className="cursor" />
              <span>{personalInfo.roleSuffix}</span>
            </div>
            <p className="hero-desc">{richText(personalInfo.bio[lang])}</p>
            <div className="hero-cta">
              <a className="btn btn-primary" href={getAssetPath(personalInfo.cvUrl)} download>
                <Icon.Download />
                {t('hero.ctaPrimary')}
              </a>
              <a className="btn btn-secondary" href="#projects">
                {t('hero.ctaSecondary')}
                <Icon.ArrowRight />
              </a>
              <a className="btn btn-ghost" href="#contact">
                {t('hero.ctaGhost')}
              </a>
            </div>
            <div className="hero-meta">
              <span className="hero-meta-item">
                <Icon.Briefcase />
                {t('hero.currentlyAt')}{' '}
                <strong style={{ color: 'var(--text)', marginLeft: 4 }}>
                  {experienceData[0].company}
                </strong>
              </span>
              <span className="hero-meta-item">
                <Icon.MapPin />
                {personalInfo.location[lang]}
              </span>
              <span className="hero-meta-item">
                <Icon.Clock />
                {personalInfo.timezone}
              </span>
            </div>
          </div>

          {layout === 'split' && (
            <div className="hero-card">
              <div className="hero-card-window">
                <span className="window-dot" />
                <span className="window-dot" />
                <span className="window-dot" />
                <span className="window-title">~/portfolio/about.java</span>
              </div>
              <div className="hero-card-body">
                <span className="code-line">
                  <span className="code-comment">// who</span>
                </span>
                <span className="code-line">
                  <span className="code-kw">public class</span>{' '}
                  <span className="code-fn">Patryk</span> {'{'}
                </span>
                <span className="code-line code-indent">
                  <span className="code-kw">String</span>{' '}
                  <span className="code-prop">role</span> ={' '}
                  <span className="code-str">"Mid Java Dev"</span>;
                </span>
                <span className="code-line code-indent">
                  <span className="code-kw">String</span>{' '}
                  <span className="code-prop">stack</span> ={' '}
                  <span className="code-str">"Spring+React"</span>;
                </span>
                <span className="code-line code-indent">
                  <span className="code-kw">int</span>{' '}
                  <span className="code-prop">yoe</span> ={' '}
                  <span className="code-str">3</span>;
                </span>
                <span className="code-line code-indent">
                  <span className="code-kw">boolean</span>{' '}
                  <span className="code-prop">available</span> ={' '}
                  <span className="code-str">true</span>;
                </span>
                <span className="code-line">&nbsp;</span>
                <span className="code-line code-indent">
                  <span className="code-comment">// what i do</span>
                </span>
                <span className="code-line code-indent">
                  <span className="code-fn">design</span>(apis).
                  <span className="code-fn">ship</span>(features);
                </span>
                <span className="code-line code-indent">
                  <span className="code-fn">mentor</span>(juniors);
                </span>
                <span className="code-line code-indent">
                  <span className="code-fn">automate</span>(boring);
                </span>
                <span className="code-line">{'}'}</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
