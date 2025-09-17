import { useTranslation } from 'react-i18next';
import avatar from '../../../assets/images/avatar.jpg';

export const About = () => {
  const { t } = useTranslation();
  return (
    <section className='flex flex-col items-center justify-center px-6 text-center flex-1'>
      <img
        src={avatar}
        alt='My photo'
        className='w-45 h-45 rounded-full mb-6 shadow-lg border-4 border-primary object-cover'
      />
      <h1 className='text-4xl md:text-6xl font-bold mb-8 text-primary'>{t('about.title')}</h1>
      <p className='text-lg md:text-xl text-text-base max-w-4xl mb-6'>{t('about.intro')}</p>
      <p className='text-lg md:text-xl text-text-muted max-w-4xl mb-6'>{t('about.main')}</p>
      <p className='text-lg md:text-xl italic text-text-subtle max-w-4xl mb-6'>{t('about.highlight')}</p>
      <p className='text-lg md:text-xl text-text-base max-w-4xl mb-10'>{t('about.conclusion')}</p>
    </section>
  );
};
