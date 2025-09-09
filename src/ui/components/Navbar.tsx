import { useSelector } from 'react-redux';
import type { RootState } from '../../application/store';

import { useTranslation } from 'react-i18next';
import { ThemeSwitcher } from './ThemeSwitcher';
import { LanguageSwitcher } from './LanguageSwitcher';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import { Link, NavLink } from 'react-router';

export const Navbar = () => {
  const theme = useSelector((state: RootState) => state.theme.theme);
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { to: '/', label: t('nav.home') },
    { to: '/about', label: t('nav.about') },
    { to: '/projects', label: t('nav.projects') },
    { to: '/skills', label: t('nav.skills') },
    { to: '/contact', label: t('nav.contact') },
  ];

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full flex justify-between items-center px-6 md:px-20 py-4 backdrop-blur-md z-50 transition-colors
        ${theme === 'dark' ? 'bg-black/40 text-white' : 'bg-white/40 text-black'}`}
    >
      {/* Логотип */}
      <Link to='/' className='font-bold text-xl text-cyan-400'>
        {t('nav.brand')}
      </Link>

      {/* Десктопное меню */}
      <ul className='hidden md:flex gap-6'>
        {links.map(({ to, label }) => (
          <li key={to}>
            <NavLink
              to={to}
              className={({ isActive }) =>
                `transition-colors ${
                  isActive
                    ? 'text-cyan-400'
                    : theme === 'dark'
                      ? 'text-gray-300 hover:text-white'
                      : 'text-gray-700 hover:text-black'
                }`
              }
            >
              {label}
            </NavLink>
          </li>
        ))}
      </ul>

      {/* Переключатели (десктоп) */}
      <div className='hidden md:flex items-center gap-4'>
        <LanguageSwitcher />
        <ThemeSwitcher />
      </div>

      {/* Бургер-кнопка (мобильная версия) */}
      <button className='md:hidden z-50 me-7 mt-1' onClick={() => setIsOpen(!isOpen)}>
        <FontAwesomeIcon icon={isOpen ? faXmark : faBars} size='lg' />
      </button>

      {/* Мобильное меню */}
      {isOpen && (
        <div
          className={`absolute top-0 left-0 w-full h-screen flex flex-col items-center justify-center gap-8 text-xl
            ${theme === 'dark' ? 'bg-[#0f172a] text-white' : 'bg-white text-black'}`}
        >
          <ul className='flex flex-col gap-6'>
            {links.map(({ to, label }) => (
              <li key={to}>
                <NavLink
                  to={to}
                  className={({ isActive }) =>
                    `transition-colors ${
                      isActive
                        ? 'text-cyan-400'
                        : theme === 'dark'
                          ? 'text-gray-300 hover:text-white'
                          : 'text-gray-700 hover:text-black'
                    }`
                  }
                  onClick={() => setIsOpen(false)}
                >
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Переключатели (мобильная версия) */}
          <div className='flex flex-col gap-4 items-center'>
            <LanguageSwitcher />
            <ThemeSwitcher />
          </div>
        </div>
      )}
    </nav>
  );
};
