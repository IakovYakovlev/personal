import { useDispatch, useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleHalfStroke } from '@fortawesome/free-solid-svg-icons';
import { useEffect } from 'react';
import type { RootState, AppDispatch } from '../../application/store';
import { toggleTheme } from '../../application/store/themeSlice';

export const ThemeSwitcher = () => {
  const dispatch = useDispatch<AppDispatch>();
  const theme = useSelector((state: RootState) => state.theme.theme);

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  return (
    <button
      type='button'
      onClick={() => dispatch(toggleTheme())}
      aria-label='Toggle theme'
      className='flex items-center justify-center px-2.5 py-1 rounded-md text-[var(--color-text-subtle)] hover:text-[var(--color-text-base)] transition-all duration-200 cursor-pointer'
    >
      <FontAwesomeIcon icon={faCircleHalfStroke} size='sm' />
    </button>
  );
};
