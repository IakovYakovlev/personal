import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faTelegram, faFacebook } from '@fortawesome/free-brands-svg-icons';
import { EmailContact } from '../../components/Contact/EmailContact';

export const Contact = () => {
  const { t } = useTranslation();

  return (
    <section className='flex flex-col items-center justify-center flex-1 px-6 text-center mb-10'>
      <h1 className='text-4xl md:text-6xl font-bold mb-6 text-primary'>{t('contact.title')}</h1>

      <p className='text-lg md:text-xl text-text-muted max-w-2xl mb-10'>{t('contact.intro')}</p>

      <div className='flex flex-col md:flex-row gap-8 text-lg items-center justify-center'>
        <EmailContact />
        <a
          href='https://github.com/IakovYakovlev'
          target='_blank'
          className='flex items-center gap-3 text-text-subtle hover:text-primary transition'
        >
          <FontAwesomeIcon icon={faGithub} />
          <span>{t('contact.methods.github')}</span>
        </a>
        <a
          href='https://t.me/JakovJakovlev'
          target='_blank'
          className='flex items-center gap-3 text-text-subtle hover:text-primary transition'
        >
          <FontAwesomeIcon icon={faTelegram} />
          <span>{t('contact.methods.telegram')}</span>
        </a>
        <a
          href='https://www.facebook.com/profile.php?id=100057579385708'
          target='_blank'
          className='flex items-center gap-3 text-text-subtle hover:text-primary transition'
        >
          <FontAwesomeIcon icon={faFacebook} />
          <span>{t('contact.methods.facebook')}</span>
        </a>
      </div>
    </section>
  );
};
