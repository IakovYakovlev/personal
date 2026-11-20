import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faServer, faDatabase, faWrench } from '@fortawesome/free-solid-svg-icons';
import { type IconProp } from '@fortawesome/fontawesome-svg-core';
import { StatusBadge } from '../../components/StatusBadge';
import { ContactCta } from '../../components/Contact/ContactCta';

const categoryIcons: Record<string, IconProp> = {
  frontend: faCode,
  backend: faServer,
  database: faDatabase,
  tools: faWrench,
};

export const Skills = () => {
  const { t } = useTranslation();

  const categories = t('skills.categories', { returnObjects: true }) as Record<
    string,
    { title: string; description: string; skills: string[]; projects?: string[] }
  >;
  const projects = t('projects.list', { returnObjects: true }) as { id: string; title: string }[];

  return (
    <div className='flex-1 w-full max-w-6xl mx-auto px-6 md:px-12 py-2 lg:py-3'>
      <main className='w-full'>
        <div className='max-w-4xl mb-5 lg:mb-7'>
          <div className='inline-flex items-center font-mono text-xs text-[var(--color-primary)] font-bold uppercase tracking-wider mb-2'>
            {t('skills.section')}
          </div>
          <h1 className='text-3xl md:text-4xl font-bold text-[var(--color-text-base)] tracking-tight mb-2'>
            {t('skills.title')}
          </h1>
          <StatusBadge className='my-3 lg:my-4' />
          <p className='text-base lg:text-lg text-[var(--color-text-muted)] leading-relaxed'>{t('skills.intro')}</p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-3.5 lg:gap-5'>
          {Object.entries(categories).map(([key, { title, description, skills, projects: projectIds }], index) => {
            const appliedProjectIds = projectIds ?? (key === 'tools' ? projects.map(({ id }) => id) : []);

            return (
              <section
                key={key}
                className='relative overflow-hidden bg-[var(--color-bg-muted)] p-4 lg:p-5 rounded-xl border border-[var(--color-text-subtle)]/15 flex flex-col group hover:border-[var(--color-primary)]/50 transition-colors'
              >
                <span className='absolute top-0 left-0 w-3 h-3 border-l-2 border-t-2 border-[var(--color-primary)]/40 rounded-tl-xl pointer-events-none' />

                <div className='flex items-center justify-between mb-4'>
                  <span className='font-mono text-2xs uppercase tracking-widest text-[var(--color-text-subtle)] opacity-70'>
                    {`// ${String(index + 1).padStart(2, '0')}`}
                  </span>
                  <FontAwesomeIcon icon={categoryIcons[key]} className='text-[var(--color-primary)]/70' />
                </div>

                <h2 className='mb-1 text-lg font-bold text-[var(--color-text-base)] lg:text-xl'>{title}</h2>
                <p className='mb-3 text-sm leading-relaxed text-[var(--color-text-muted)]'>{description}</p>
                <div className='mb-3 flex flex-wrap gap-2'>
                  {skills.map((skill) => (
                    <span
                      key={skill}
                      className='px-2.5 py-1.5 rounded-lg bg-[var(--color-bg-base)] border border-[var(--color-text-subtle)]/15 text-sm font-medium text-[var(--color-text-muted)] hover:border-[var(--color-primary)]/40 hover:text-[var(--color-primary)] transition-colors cursor-default'
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {appliedProjectIds.length > 0 && (
                  <div className='mt-auto border-t border-[var(--color-text-subtle)]/15 pt-3'>
                    <p className='mb-2 font-mono text-2xs font-bold uppercase tracking-wider text-[var(--color-text-subtle)]'>
                      {t('skills.appliedIn')}
                    </p>
                    <div className='flex flex-wrap gap-2'>
                      {appliedProjectIds.map((projectId) => {
                        const project = projects.find(({ id }) => id === projectId);

                        return project ? (
                          <Link
                            key={project.id}
                            to={`/projects#${project.id}`}
                            className='rounded-lg border border-[var(--color-primary)]/25 px-2.5 py-1 text-xs font-medium text-[var(--color-primary)] transition-colors hover:border-[var(--color-primary)]/60 hover:bg-[var(--color-primary)]/5'
                          >
                            {project.title}
                          </Link>
                        ) : null;
                      })}
                    </div>
                  </div>
                )}
              </section>
            );
          })}
        </div>

        <div className='mt-5 lg:mt-7'>
          <ContactCta label={t('skills.cta.label')} text={t('skills.cta.text')} buttonLabel={t('skills.cta.btn')} />
        </div>
      </main>
    </div>
  );
};
