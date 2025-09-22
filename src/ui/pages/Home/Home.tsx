import { faFacebook, faGithub, faTelegram } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Trans, useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

export const Home = () => {
  const { t } = useTranslation();
  return (
    <section className='flex flex-col items-center justify-center px-6 text-center flex-1'>
      <h1 className='text-4xl md:text-6xl font-bold mb-4 text-primary-light'>{t('home.welcome')}</h1>

      <p className='text-xl md:text-2xl font-semibold text-text-base mb-2'>{t('home.greeting')}</p>

      <p className='italic text-text-subtle mb-6'>{t('home.slogan')}</p>

      <p className='text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl'>
        <Trans i18nKey='home.description'>
          Я разработчик, специализирующийся на
          <span className='text-primary-light'>TypeScript</span> и <span className='text-primary-light'>C#</span>.
        </Trans>
      </p>

      <div className='mt-8 flex gap-4 flex-wrap justify-center'>
        <Link
          to='/projects'
          className='px-6 py-3 rounded bg-primary text-white font-semibold hover:bg-primary-light transition'
        >
          {t('home.cta.projects')}
        </Link>
        <Link
          to='/about'
          className='px-6 py-3 rounded border border-primary text-primary font-semibold hover:bg-primary hover:text-white transition'
        >
          {t('home.cta.about')}
        </Link>
        <a
          href='/resume.pdf'
          className='px-6 py-3 rounded border border-primary text-primary font-semibold hover:bg-primary hover:text-white transition'
        >
          {t('home.cta.resume')}
        </a>
      </div>

      {/* 🎯 иконки соцсетей */}
      <div className='flex gap-6 mt-10 text-2xl text-gray-400 transition'>
        <a href={t('linksForContacts.github')} target='_blank' rel="noopener noreferrer" className='hover:text-primary-light'>
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a href={t('linksForContacts.telegram')} target='_blank' rel="noopener noreferrer" className='hover:text-primary-light'>
          <FontAwesomeIcon icon={faTelegram} />
        </a>
        <a href={t('linksForContacts.facebook')} target='_blank' rel="noopener noreferrer" className='hover:text-primary-light'>
          <FontAwesomeIcon icon={faFacebook} />
        </a>
      </div>
    </section>
  );
};
