import { useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
  projectFilters,
  personalInfo,
  type ProjectFilter,
  type ProjectTag,
} from '../../data';
import { useGitHub, useLang, type GitHubRepo } from '../../hooks';
import { SectionHead, Icon } from '../../components';

interface CardItem {
  name: string;
  desc: string;
  tags: string[];
  lang: string;
  stars: number;
  forks: number;
  tag: ProjectTag;
  url: string;
}

const LANG_SHORT: Record<string, string> = {
  TypeScript: 'TS',
  JavaScript: 'JS',
  Python: 'PY',
  Java: 'Java',
  Kotlin: 'KT',
  Go: 'Go',
  Rust: 'RS',
  'C#': 'C#',
  'C++': 'C++',
  Shell: 'SH',
  HTML: 'HTML',
  CSS: 'CSS',
  PHP: 'PHP',
  Ruby: 'RB',
};

const langToShort = (lang: string | null): string =>
  lang ? (LANG_SHORT[lang] ?? lang.slice(0, 4)) : '—';

const langToTag = (lang: string | null): ProjectTag => {
  switch (lang) {
    case 'Java':
    case 'Kotlin':
    case 'Go':
    case 'Rust':
    case 'C#':
    case 'PHP':
      return 'backend';
    case 'TypeScript':
    case 'JavaScript':
    case 'HTML':
    case 'CSS':
    case 'Vue':
    case 'Svelte':
      return 'frontend';
    case 'Python':
    case 'Shell':
    case 'Dockerfile':
      return 'tools';
    default:
      return 'fullstack';
  }
};

const repoToCard = (repo: GitHubRepo, fallbackDesc: string): CardItem => ({
  name: repo.name,
  desc: repo.description ?? fallbackDesc,
  tags: repo.topics?.length ? repo.topics.slice(0, 4) : repo.language ? [repo.language] : [],
  lang: langToShort(repo.language),
  stars: repo.stargazers_count,
  forks: repo.forks_count,
  tag: langToTag(repo.language),
  url: repo.html_url,
});

const ProjectCard = ({ project, exploreLabel }: { project: CardItem; exploreLabel: string }) => (
  <a className="project-card" href={project.url} target="_blank" rel="noreferrer">
    <div className="project-cover">
      <span className="lang-badge">{project.lang}</span>
      <span className="project-cover-label">project preview</span>
    </div>
    <div className="project-body">
      <div className="project-name">
        <span className="project-name-prefix">~/</span>
        {project.name}
      </div>
      <p className="project-desc">{project.desc}</p>
      <div className="project-stats">
        <span className="project-stat">
          <Icon.Star /> {project.stars}
        </span>
        <span className="project-stat">
          <Icon.Fork /> {project.forks}
        </span>
        <span className="project-stat explore">
          {exploreLabel} <Icon.ArrowUpRight />
        </span>
      </div>
      <div className="project-tags">
        {project.tags.map((tag) => (
          <span className="tech-tag" key={tag}>
            {tag}
          </span>
        ))}
      </div>
    </div>
  </a>
);

export const ProjectsSection = () => {
  const { t } = useTranslation();
  const lang = useLang();
  const [filter, setFilter] = useState<ProjectFilter['id']>('all');

  const { repos, loading, error } = useGitHub();

  const cards = useMemo<CardItem[]>(() => {
    if (loading || error || repos.length === 0) return [];
    return repos.map((r) => repoToCard(r, t('projects.noDescription')));
  }, [repos, loading, error, t]);

  const filtered = filter === 'all' ? cards : cards.filter((p) => p.tag === filter);

  const countFor = (id: ProjectFilter['id']) =>
    id === 'all' ? cards.length : cards.filter((p) => p.tag === id).length;

  return (
    <section id="projects">
      <div className="container">
        <SectionHead num="05" title={t('projects.title')} />
        <p className="projects-lead">{t('projects.lead')}</p>

        {!loading && !error && cards.length > 0 && (
          <div className="projects-controls">
            {projectFilters.map((f) => (
              <button
                key={f.id}
                className={`filter-chip${filter === f.id ? ' active' : ''}`}
                onClick={() => setFilter(f.id)}
              >
                {f.label[lang]}
                <span className="filter-chip-count">{countFor(f.id)}</span>
              </button>
            ))}
          </div>
        )}

        {loading && (
          <div className="projects-state">fetching repos…</div>
        )}
        {!loading && error && (
          <div className="projects-state">could not load GitHub repos</div>
        )}
        {!loading && !error && cards.length === 0 && (
          <div className="projects-state">no public repos found</div>
        )}

        {!loading && !error && (
          <div className="projects-grid">
            {filtered.map((p) => (
              <ProjectCard key={p.name} project={p} exploreLabel={t('projects.explore')} />
            ))}
          </div>
        )}

        <a
          href={personalInfo.social.github}
          target="_blank"
          rel="noreferrer"
          className="btn btn-secondary"
          style={{ marginTop: 32 }}
        >
          <Icon.Github />
          {t('projects.viewAll')}
          <Icon.ArrowUpRight />
        </a>
      </div>
    </section>
  );
};
