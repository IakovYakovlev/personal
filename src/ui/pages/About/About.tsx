import { useTranslation } from 'react-i18next';
import avatar from '../../../resurce/avatar.jpg';

export const About = () => {
  const { t } = useTranslation();
  //const skills = t('about.skills', { returnObjects: true }) as string[];
  return (
    <section className='flex flex-col items-center justify-center px-6 text-center'>
      {/* Фото/аватарка */}
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
      {/* 🔹 Список навыков
      <div className='grid grid-cols-2 md:grid-cols-3 gap-4 max-w-2xl mb-8'>
        {skills.map((skill) => (
          <span key={skill} className='px-4 py-2 bg-bg-alt text-text-base rounded shadow-sm'>
            {skill}
          </span>
        ))}
      </div> */}
      {/* 🔹 CTA */}
      {/* <a
        href='/projects'
        className='px-6 py-3 rounded bg-primary text-white font-semibold hover:bg-primary-light transition'
      >
        {t('about.cta')}
      </a> */}
    </section>
  );
};
