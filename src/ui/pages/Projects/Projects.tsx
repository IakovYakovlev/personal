import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { StatusBadge } from '../../components/StatusBadge';
import { ContactCta } from '../../components/Contact/ContactCta';
import { ProjectGallery } from './ProjectGallery';
import { projectMedia } from './projectMedia';

interface Project {
  id: string;
  title: string;
  description: string;
  tech: string[];
  links: { github?: string; demo?: string | null };
  goal?: string;
  implementation?: string;
  result?: string;
  status?: string;
}

export const Projects = () => {
  const { t } = useTranslation();
  const { hash } = useLocation();

  const projects = t('projects.list', { returnObjects: true }) as Project[];
  const featuredProject = projects.find((project) => project.id === 'personal-ops-center');
  const supportingProjects = projects.filter((project) => project.id !== 'personal-ops-center');
  const featuredScreenshots = featuredProject ? (projectMedia[featuredProject.id] ?? []) : [];

  useEffect(() => {
    if (!hash) {
      return;
    }

    document.getElementById(hash.slice(1))?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, [hash]);

  return (
    <div className='flex-1 w-full max-w-6xl mx-auto px-6 md:px-12 py-2 lg:py-3'>
      <main className='w-full'>
        <div className='mb-5 lg:mb-7'>
          <div className='inline-flex items-center font-mono text-xs text-[var(--color-primary)] font-bold uppercase tracking-wider mb-2'>
            {t('projects.section')}
          </div>
          <h1 className='text-3xl md:text-4xl font-bold text-[var(--color-text-base)] tracking-tight mb-2'>
            {t('projects.title')}
          </h1>

          <StatusBadge className='my-3 lg:my-4' />

          <p className='text-base lg:text-lg text-[var(--color-text-muted)] leading-relaxed'>{t('projects.intro')}</p>
        </div>

        {featuredProject && (
          <article
            id={featuredProject.id}
            className='relative mb-5 overflow-hidden rounded-xl border border-[var(--color-primary)]/35 bg-[var(--color-bg-muted)] p-4 shadow-sm scroll-mt-24 md:p-6 lg:mb-7'
          >
            <span className='absolute left-0 top-0 h-4 w-4 rounded-tl-xl border-l-2 border-t-2 border-[var(--color-primary)]/60' />
            <div>
              <div>
                <div className='mb-3 flex flex-wrap items-center justify-between gap-2'>
                  <span className='rounded-full border border-[var(--color-primary)]/30 bg-[var(--color-primary)]/10 px-3 py-1 font-mono text-2xs font-bold uppercase tracking-wider text-[var(--color-primary)]'>
                    {t('projects.featuredLabel')}
                  </span>
                  <span className='font-mono text-2xs uppercase tracking-widest text-[var(--color-text-subtle)]'>
                    #{t('projects.projectLabel')}-01
                  </span>
                </div>

                <h2 className='mb-2 text-xl font-bold text-[var(--color-text-base)] lg:text-2xl'>
                  {featuredProject.title}
                </h2>
                <p className='mb-4 text-sm leading-relaxed text-[var(--color-text-muted)] lg:text-base'>
                  {featuredProject.description}
                </p>

                <div className='grid gap-3 sm:grid-cols-2'>
                  <div className='rounded-lg border border-[var(--color-text-subtle)]/15 bg-[var(--color-bg-base)]/60 p-3 shadow-lg shadow-black/5'>
                    <h3 className='mb-1 font-mono text-2xs font-bold uppercase tracking-wider text-[var(--color-primary)]'>
                      {t('projects.case.goal')}
                    </h3>
                    <p className='text-sm leading-relaxed text-[var(--color-text-muted)]'>{featuredProject.goal}</p>
                  </div>
                  <div className='rounded-lg border border-[var(--color-text-subtle)]/15 bg-[var(--color-bg-base)]/60 p-3 shadow-lg shadow-black/5'>
                    <h3 className='mb-1 font-mono text-2xs font-bold uppercase tracking-wider text-[var(--color-primary)]'>
                      {t('projects.case.implementation')}
                    </h3>
                    <p className='text-sm leading-relaxed text-[var(--color-text-muted)]'>
                      {featuredProject.implementation}
                    </p>
                  </div>
                  <div className='rounded-lg border border-[var(--color-text-subtle)]/15 bg-[var(--color-bg-base)]/60 p-3 shadow-lg shadow-black/5'>
                    <h3 className='mb-1 font-mono text-2xs font-bold uppercase tracking-wider text-[var(--color-primary)]'>
                      {t('projects.case.result')}
                    </h3>
                    <p className='text-sm leading-relaxed text-[var(--color-text-muted)]'>{featuredProject.result}</p>
                  </div>
                  <div className='rounded-lg border border-[var(--color-text-subtle)]/15 bg-[var(--color-bg-base)]/60 p-3 shadow-lg shadow-black/5'>
                    <h3 className='mb-1 font-mono text-2xs font-bold uppercase tracking-wider text-[var(--color-primary)]'>
                      {t('projects.case.status')}
                    </h3>
                    <p className='text-sm leading-relaxed text-[var(--color-text-muted)]'>{featuredProject.status}</p>
                  </div>
                </div>

                <div className='mt-4 flex flex-wrap gap-2'>
                  {featuredProject.tech.map((tech) => (
                    <span
                      key={tech}
                      className='rounded-lg border border-[var(--color-text-subtle)]/15 bg-[var(--color-bg-base)] px-2.5 py-1 font-mono text-2xs text-[var(--color-text-subtle)]'
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className='mt-4 flex flex-wrap items-center gap-x-5 gap-y-3'>
                  {featuredProject.links.github && (
                    <a
                      href={featuredProject.links.github}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-primary)] transition-colors hover:text-[var(--color-primary-dark)]'
                    >
                      <FontAwesomeIcon icon={faGithub} />
                      <span>GitHub</span>
                      <FontAwesomeIcon icon={faArrowUpRightFromSquare} className='text-xs' />
                    </a>
                  )}
                  {featuredScreenshots.length > 0 && <ProjectGallery screenshots={featuredScreenshots} />}
                </div>
              </div>
            </div>
          </article>
        )}

        <div className='grid grid-cols-1 gap-3.5 md:grid-cols-2 lg:gap-5'>
          {supportingProjects.map((project, index) => (
            <article
              key={project.id}
              id={project.id}
              className='group relative flex flex-col scroll-mt-24 overflow-hidden rounded-xl border border-[var(--color-text-subtle)]/15 bg-[var(--color-bg-muted)] p-4 transition-colors hover:border-[var(--color-primary)]/50 lg:p-5'
            >
              <span className='absolute top-0 left-0 w-3 h-3 border-l-2 border-t-2 border-[var(--color-primary)]/40 rounded-tl-xl pointer-events-none' />

              <div className='flex items-center justify-between mb-3 font-mono text-2xs uppercase tracking-widest text-[var(--color-text-subtle)] opacity-70'>
                <span>
                  #{t('projects.projectLabel')}-{String(index + 2).padStart(2, '0')}
                </span>
              </div>

              <h2 className='text-lg lg:text-xl font-bold text-[var(--color-text-base)] mb-2'>{project.title}</h2>
              <p className='text-sm lg:text-base text-[var(--color-text-muted)] leading-relaxed mb-4'>
                {project.description}
              </p>

              <div className='mt-auto'>
                <div className='mb-4 flex flex-wrap gap-2'>
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className='rounded-lg border border-[var(--color-text-subtle)]/15 bg-[var(--color-bg-base)] px-2.5 py-1 font-mono text-2xs text-[var(--color-text-subtle)]'
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className='flex flex-wrap gap-3 border-t border-[var(--color-text-subtle)]/15 pt-3'>
                  {project.links.github && (
                    <a
                      href={project.links.github}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-primary)] transition-colors hover:text-[var(--color-primary-dark)]'
                    >
                      <FontAwesomeIcon icon={faGithub} />
                      <span>GitHub</span>
                    </a>
                  )}
                  {project.links.demo && (
                    <a
                      href={project.links.demo}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-primary)] transition-colors hover:text-[var(--color-primary-dark)]'
                    >
                      <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                      <span>{t('projects.demo')}</span>
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className='mt-5 lg:mt-7'>
          <ContactCta
            label={t('projects.cta.label')}
            text={t('projects.cta.text')}
            buttonLabel={t('projects.cta.btn')}
          />
        </div>
      </main>
    </div>
  );
};
