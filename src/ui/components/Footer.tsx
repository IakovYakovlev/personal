import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGithub, faLinkedin, faTelegram } from '@fortawesome/free-brands-svg-icons';
import { useTranslation } from 'react-i18next';

export const Footer = () => {
  const { t } = useTranslation();
  const year = new Date().getFullYear();

  const socialLinks = [
    { icon: faGithub, href: t('links.github', 'https://github.com'), label: 'GitHub' },
    { icon: faTelegram, href: t('links.telegram', 'https://t.me'), label: 'Telegram' },
    { icon: faLinkedin, href: t('links.linkedin', 'https://linkedin.com'), label: 'LinkedIn' },
    { icon: faFacebook, href: t('links.facebook', 'https://facebook.com'), label: 'Facebook' },
  ];

  return (
    <footer className='w-full py-8 px-4 md:px-12 flex justify-center mt-auto'>
      {/* Нижний парящий островок, симметричный хедеру */}
      <div className='w-full max-w-sm md:max-w-xl lg:max-w-4xl bg-[var(--color-bg-base)]/65 backdrop-blur-xl px-5 md:px-6 py-3.5 rounded-2xl border border-[var(--color-text-subtle)]/15 shadow-[0_8px_32px_rgba(0,0,0,0.08)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.3)] flex flex-col sm:flex-row justify-between items-center gap-4 transition-all duration-300'>
        {/* Левая часть: Бренд и копирайт */}
        <div className='flex items-center gap-2 font-mono text-xs text-[var(--color-text-subtle)] text-center sm:text-left'>
          <span className='text-[var(--color-primary)] font-extrabold'>~/</span>
          <span className='text-[var(--color-text-base)] font-semibold'>Iakov.dev</span>
          <span className='text-[var(--color-text-subtle)]/40'>•</span>
          <span>© {year}</span>
        </div>

        {/* Центральная часть: Стек со светящейся точкой */}
        <div className='hidden md:flex items-center gap-2 font-mono text-xs text-[var(--color-text-subtle)]'>
          <span className='w-1.5 h-1.5 rounded-full bg-[var(--color-primary)] shadow-[0_0_8px_var(--color-primary)]' />
          <span>React • Vite • TypeScript</span>
        </div>

        {/* Правая часть: Иконки соцсетей в единой панели с фирменным ховером */}
        <div className='flex items-center p-0.5 rounded-xl bg-[var(--color-bg-muted)] border border-[var(--color-text-subtle)]/20'>
          {socialLinks.map(({ icon, href, label }, index) => (
            <div key={label} className='flex items-center'>
              <a
                href={href}
                target='_blank'
                rel='noopener noreferrer'
                aria-label={label}
                className='flex items-center justify-center w-8 h-8 rounded-lg text-[var(--color-text-subtle)] hover:text-[var(--color-primary)] hover:bg-[var(--color-bg-base)]/50 transition-all duration-200 cursor-pointer'
              >
                <FontAwesomeIcon icon={icon} size='sm' />
              </a>
              {/* Тонкий вертикальный разделитель между иконками */}
              {index < socialLinks.length - 1 && (
                <div className='h-3.5 w-[1px] bg-[var(--color-text-subtle)]/20 mx-0.5'></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};
