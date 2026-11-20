import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faTelegram, faFacebook, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { EmailContact } from '../../components/Contact/EmailContact';

export const Contact = () => {
  const { t } = useTranslation();

  const socialLinks = [
    { href: t('links.github'), icon: faGithub, label: t('contact.methods.github') },
    { href: t('links.telegram'), icon: faTelegram, label: t('contact.methods.telegram') },
    { href: t('links.facebook'), icon: faFacebook, label: t('contact.methods.facebook') },
    { href: t('links.linkedin'), icon: faLinkedin, label: t('contact.methods.linkedin') },
  ];

  return (
    <div className='flex flex-1 flex-col w-full max-w-6xl mx-auto px-6 md:px-12 py-2 lg:py-3 [@media(min-height:700px)]:justify-center'>
      <main className='w-full max-w-4xl mx-auto'>
        <div className='mb-6 lg:mb-8 text-center'>
          <div className='inline-flex items-center justify-center font-mono text-xs text-[var(--color-primary)] font-bold uppercase tracking-wider mb-2'>
            {t('contact.section')}
          </div>
          <h1 className='text-3xl md:text-4xl font-bold text-[var(--color-text-base)] tracking-tight mb-2'>
            {t('contact.title')}
          </h1>
          <p className='text-base lg:text-lg text-[var(--color-text-muted)] leading-relaxed max-w-xl mx-auto'>
            {t('contact.intro')}
          </p>
        </div>

        <div className='flex flex-col gap-6'>
          <EmailContact />

          <div className='w-full text-center'>
            <p className='text-sm text-[var(--color-text-subtle)] mb-3'>{t('contact.socialsIntro')}</p>
            <div className='flex flex-wrap justify-center gap-2'>
              {socialLinks.map(({ href, icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='inline-flex items-center gap-2 px-3 py-2 rounded-lg border border-[var(--color-text-subtle)]/20 text-sm text-[var(--color-text-muted)] hover:text-[var(--color-primary)] hover:border-[var(--color-primary)]/50 transition-colors'
                >
                  <FontAwesomeIcon icon={icon} />
                  <span>{label}</span>
                  <FontAwesomeIcon icon={faArrowUpRightFromSquare} className='text-xs opacity-60' />
                </a>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
