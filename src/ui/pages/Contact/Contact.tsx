import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faTelegram, faFacebook } from '@fortawesome/free-brands-svg-icons';
import { EmailContact } from '../../components/Contact/EmailContact';

export const Contact = () => {
  const { t } = useTranslation();

  const socialLinks = [
    { href: t('links.github'), icon: faGithub, label: t('contact.methods.github') },
    { href: t('links.telegram'), icon: faTelegram, label: t('contact.methods.telegram') },
    { href: t('links.facebook'), icon: faFacebook, label: t('contact.methods.facebook') },
  ];

  return (
    <div className='flex-1 w-full max-w-6xl mx-auto px-6 md:px-12 py-2 lg:py-3'>
      <main className='w-full max-w-4xl'>
        <div className='mb-5 lg:mb-7'>
          <div className='inline-flex items-center gap-2 font-mono text-xs text-[var(--color-primary)] font-bold uppercase tracking-wider mb-2'>
            <span className='w-2 h-2 rounded-full bg-[var(--color-primary)]' />
            {t('contact.section')}
          </div>
          <h1 className='text-3xl md:text-4xl font-bold text-[var(--color-text-base)] tracking-tight mb-2'>
            {t('contact.title')}
          </h1>
          <p className='text-base lg:text-lg text-[var(--color-text-muted)] leading-relaxed max-w-3xl'>
            {t('contact.intro')}
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-3.5 lg:gap-5'>
          <EmailContact />

          {socialLinks.map(({ href, icon, label }, index) => (
            <a
              key={label}
              href={href}
              target='_blank'
              rel='noopener noreferrer'
              className='relative overflow-hidden bg-[var(--color-bg-muted)] p-4 lg:p-5 rounded-xl border border-[var(--color-text-subtle)]/15 flex flex-col justify-between min-h-32 group hover:border-[var(--color-primary)]/50 transition-colors'
            >
              <span className='absolute top-0 left-0 w-3 h-3 border-l-2 border-t-2 border-[var(--color-primary)]/40 rounded-tl-xl pointer-events-none' />
              <div className='flex items-center justify-between font-mono text-2xs uppercase tracking-widest text-[var(--color-text-subtle)] opacity-70'>
                <span>#{String(index + 2).padStart(2, '0')} / {label}</span>
                <FontAwesomeIcon
                  icon={faArrowUpRightFromSquare}
                  className='text-[var(--color-primary)] opacity-70 group-hover:opacity-100 transition-opacity'
                />
              </div>
              <div className='flex items-center gap-3 mt-4'>
                <span className='w-10 h-10 rounded-lg bg-[var(--color-bg-base)] border border-[var(--color-text-subtle)]/15 flex items-center justify-center text-[var(--color-primary)]'>
                  <FontAwesomeIcon icon={icon} />
                </span>
                <span className='text-base lg:text-lg font-semibold text-[var(--color-text-base)] group-hover:text-[var(--color-primary)] transition-colors'>
                  {label}
                </span>
              </div>
            </a>
          ))}
        </div>
      </main>
    </div>
  );
};
