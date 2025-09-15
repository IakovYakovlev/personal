import { faCircleHalfStroke } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useDispatch, useSelector } from 'react-redux';
import { type RootState, type AppDispatch } from '../../application/store';
import { toggleTheme } from '../../application/store/themeSlice';
import { useEffect } from 'react';

export function ThemeSwitcher() {
  const theme = useSelector((state: RootState) => state.theme.theme);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  return (
    <FontAwesomeIcon
      icon={faCircleHalfStroke}
      onClick={() => dispatch(toggleTheme())}
      className={`rounded font-bold z-50 cursor-pointer px-2 py-2
        ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}
    />
  );
}
