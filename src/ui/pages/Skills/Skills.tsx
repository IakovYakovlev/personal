import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faServer, faDatabase, faWrench } from '@fortawesome/free-solid-svg-icons';
import { type IconProp } from '@fortawesome/fontawesome-svg-core';

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
    { title: string; skills: string[] }
  >;

  return (
    <section className='flex flex-col items-center justify-center px-6 text-center flex-1'>
      <h1 className='text-4xl md:text-6xl font-bold mb-6 text-primary'>{t('skills.title')}</h1>

      <p className='text-lg md:text-xl text-text-base max-w-3xl mb-12'>{t('skills.intro')}</p>

      <div className='grid md:grid-cols-2 gap-10 max-w-5xl w-full'>
        {Object.entries(categories).map(([key, { title, skills }]) => (
          <div
            key={key}
            className='bg-bg-muted dark:bg-bg-alt rounded-lg shadow-md p-6 text-left flex flex-col items-start'
          >
            {/* Заголовок с иконкой */}
            <h2 className='flex items-center gap-3 text-2xl font-semibold mb-4 text-primary'>
              <FontAwesomeIcon icon={categoryIcons[key]} />
              {title}
            </h2>

            {/* Навыки-бейджи */}
            <div className='flex flex-wrap gap-3'>
              {skills.map((skill) => (
                <span
                  key={skill}
                  className='px-4 py-2 rounded bg-primary/10 text-primary font-medium hover:bg-primary hover:text-white transition cursor-default'
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
