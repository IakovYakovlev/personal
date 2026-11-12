import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import { Link, NavLink } from 'react-router-dom';
import type { RootState } from '../../../application/store';
import { LanguageSwitcher } from '../LanguageSwitcher';
import { ThemeSwitcher } from '../ThemeSwitcher';
import { navbarLinks } from './navbarLinks';

export const Navbar = () => {
  const theme = useSelector((state: RootState) => state.theme.theme);
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <header className='fixed top-4 left-0 w-full z-50 px-4 md:px-12 flex justify-center'>
      {/* Сверхкомпактный плавающий островок */}
      <nav className='w-full max-w-sm md:max-w-xl lg:max-w-4xl bg-[var(--color-bg-base)]/65 backdrop-blur-xl px-4 md:px-6 py-2.5 rounded-2xl border border-[var(--color-text-subtle)]/15 shadow-[0_8px_32px_rgba(0,0,0,0.08)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.3)] flex justify-between items-center transition-all duration-300'>
        {/* Логотип / Бренд */}
        <Link
          to='/'
          className='font-mono font-bold text-base md:text-lg text-[var(--color-text-base)] flex items-center gap-1.5 group whitespace-nowrap'
        >
          <span className='text-[var(--color-primary)] font-extrabold'>~/</span>
          <span className='group-hover:text-[var(--color-primary)] transition-colors'>
            {t('nav.brand', 'Iakov.dev')}
          </span>
        </Link>

        {/* Десктопное меню с точкой-индикатором статуса */}
        <div className='hidden lg:flex items-center gap-5'>
          <ul className='flex items-center gap-5'>
            {navbarLinks.map(({ to, labelKey }) => (
              <li key={to}>
                <NavLink
                  to={to}
                  className={({ isActive }) =>
                    `text-sm font-medium transition-all whitespace-nowrap flex items-center gap-1.5 ${
                      isActive
                        ? 'text-[var(--color-text-base)] font-semibold'
                        : 'text-[var(--color-text-muted)] hover:text-[var(--color-text-base)]'
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      {/* Маленькая точка-индикатор для активной страницы со свечением */}
                      <span
                        className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                          isActive
                            ? 'bg-[var(--color-primary)] scale-100 opacity-100 shadow-[0_0_8px_var(--color-primary)]'
                            : 'bg-transparent scale-0 opacity-0'
                        }`}
                      />
                      <span className={isActive ? 'text-[var(--color-primary)]' : ''}>{t(labelKey)}</span>
                    </>
                  )}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Разделитель */}
          <div className='h-4 w-[1px] bg-[var(--color-text-subtle)]/20'></div>

          {/* Единая панель инструментов (Язык + Тема) */}
          <div className='inline-flex items-center p-0.5 rounded-lg bg-[var(--color-bg-muted)] border border-[var(--color-text-subtle)]/20'>
            <LanguageSwitcher />
            <div className='h-3.5 w-[1px] bg-[var(--color-text-subtle)]/25 mx-0.5'></div>
            <ThemeSwitcher />
          </div>
        </div>

        {/* Элементы управления для планшетов и мобильных */}
        <div className='flex lg:hidden items-center gap-2.5'>
          <div className='inline-flex items-center p-0.5 rounded-lg bg-[var(--color-bg-muted)] border border-[var(--color-text-subtle)]/20'>
            <LanguageSwitcher />
            <div className='h-3.5 w-[1px] bg-[var(--color-text-subtle)]/25 mx-0.5'></div>
            <ThemeSwitcher />
          </div>
          <button
            className='z-50 text-[var(--color-text-base)] p-1 cursor-pointer'
            onClick={() => setIsOpen(!isOpen)}
            aria-label='Toggle menu'
          >
            <FontAwesomeIcon icon={isOpen ? faXmark : faBars} size='lg' />
          </button>
        </div>

        {/* Мобильное/Планшетное меню */}
        {isOpen && (
          <div className='absolute top-0 left-0 w-full h-screen flex flex-col items-center justify-center gap-8 text-xl bg-[var(--color-bg-base)]/95 backdrop-blur-2xl text-[var(--color-text-base)] z-40'>
            <ul className='flex flex-col items-center gap-6'>
              {navbarLinks.map(({ to, labelKey }) => (
                <li key={to}>
                  <NavLink
                    to={to}
                    className={({ isActive }) =>
                      `transition-colors font-medium text-lg flex items-center gap-3 ${
                        isActive
                          ? 'text-[var(--color-primary)] font-semibold'
                          : 'text-[var(--color-text-muted)] hover:text-[var(--color-text-base)]'
                      }`
                    }
                    onClick={() => setIsOpen(false)}
                  >
                    {({ isActive }) => (
                      <>
                        <span
                          className={`w-2 h-2 rounded-full transition-all ${
                            isActive
                              ? 'bg-[var(--color-primary)] shadow-[0_0_10px_var(--color-primary)]'
                              : 'bg-transparent'
                          }`}
                        />
                        <span>{t(labelKey)}</span>
                      </>
                    )}
                  </NavLink>
                </li>
              ))}
            </ul>

            <div className='h-[1px] w-16 bg-[var(--color-text-subtle)]/20 my-2'></div>

            <div className='inline-flex items-center p-0.5 rounded-lg bg-[var(--color-bg-muted)] border border-[var(--color-text-subtle)]/20'>
              <LanguageSwitcher />
              <div className='h-3.5 w-[1px] bg-[var(--color-text-subtle)]/25 mx-0.5'></div>
              <ThemeSwitcher />
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
