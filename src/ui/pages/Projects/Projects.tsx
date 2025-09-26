import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';

export const Projects = () => {
  const { t } = useTranslation();

  // Загружаем список проектов из i18n
  const projects = t('projects.list', { returnObjects: true }) as {
    title: string;
    description: string;
    tech: string[];
    links: { github?: string; demo?: string | null };
  }[];

  return (
    <section className='flex flex-col items-center text-center flex-1 px-6 py-10 '>
      {/* Заголовок */}
      <h1 className='text-4xl md:text-6xl font-bold mb-6 text-primary'>{t('projects.title')}</h1>

      {/* Вступление */}
      <p className='text-lg md:text-xl text-text-muted max-w-3xl mb-10'>{t('projects.intro')}</p>

      {/* Список проектов */}
      <div className='flex flex-wrap justify-center gap-8 max-w-5xl w-full'>
        {projects.map((project, index) => (
          <div
            key={index}
            className='flex flex-col bg-bg-muted dark:bg-bg-alt p-6 rounded-lg shadow-md text-left w-full max-w-md'
          >
            {/* Заголовок */}
            <h2 className='text-2xl font-semibold text-primary mb-3'>{project.title}</h2>

            {/* Описание */}
            <p className='text-text-base mb-4'>{project.description}</p>

            {/* Технологии */}
            <div className='flex flex-wrap gap-2 mb-4 mt-auto'>
              {project.tech.map((tech) => (
                <span key={tech} className='px-3 py-1 text-sm rounded bg-bg-base text-text-subtle border border-bg-alt'>
                  {tech}
                </span>
              ))}
            </div>

            {/* Ссылки */}
            <div className='flex gap-4 mt-auto'>
              {project.links.github && (
                <a
                  href={project.links.github}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='flex items-center gap-2 text-primary hover:text-primary-light transition'
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
                  className='flex items-center gap-2 text-primary hover:text-primary-light transition'
                >
                  <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                  <span>Demo</span>
                </a>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className='mt-12'>
        <Link
          to='/contact'
          className='inline-block text-center px-6 py-3 sm:px-6 sm:py-3 px-4 py-2 rounded bg-primary text-white font-semibold hover:bg-primary-light transition text-sm sm:text-base'
        >
          {t('projects.cta')}
        </Link>
      </div>
    </section>
  );
};
