import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGithub, faTelegram } from '@fortawesome/free-brands-svg-icons';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

export const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className='w-full py-6 px-8 md:px-20 flex flex-col md:flex-row items-center justify-between bg-bg-alt text-text-muted'>
      {/* Левая часть */}
      <div className='mb-4 md:mb-0 text-center md:text-left'>
        <p className='font-semibold text-text-base'>© 2025 Jakov</p>
        <p className='text-sm'>{t('footer.tagline', 'Создаю надёжные и удобные решения')}</p>
      </div>

      {/* Навигация */}
      <ul className='flex gap-6 text-sm md:me-42'>
        <li>
          <Link to='/about' className='hover:text-primary transition whitespace-nowrap'>
            {t('nav.about')}
          </Link>
        </li>
        <li>
          <Link to='/projects' className='hover:text-primary transition'>
            {t('nav.projects')}
          </Link>
        </li>
        <li>
          <Link to='/contact' className='hover:text-primary transition'>
            {t('nav.contact')}
          </Link>
        </li>
      </ul>

      {/* Соцсети */}
      <div className='flex gap-4 mt-4 md:mt-0 text-lg'>
        <a href={t('linksForContacts.github')} target='_blank' className='hover:text-primary-light'>
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a href={t('linksForContacts.telegram')} target='_blank' className='hover:text-primary-light'>
          <FontAwesomeIcon icon={faTelegram} />
        </a>
        <a href={t('linksForContacts.facebook')} target='_blank' className='hover:text-primary-light'>
          <FontAwesomeIcon icon={faFacebook} />
        </a>
      </div>
    </footer>
  );
};
