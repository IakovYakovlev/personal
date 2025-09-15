import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import type { RootState } from '../../application/store';

export const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const theme = useSelector((state: RootState) => state.theme.theme);

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className='flex gap-2 ml-6'>
      {['ru', 'lv', 'en'].map((lng) => {
        const isActive = i18n.language.startsWith(lng);
        return (
          <button
            key={lng}
            onClick={() => changeLanguage(lng)}
            className={`px-3 py-1 rounded font-semibold transition-colors cursor-pointer
              ${
                isActive
                  ? 'bg-primary text-white'
                  : theme === 'dark'
                    ? 'bg-slate-800 text-gray-300 hover:bg-slate-700'
                    : 'bg-slate-200 text-gray-700 hover:bg-slate-300'
              }`}
          >
            {lng.toUpperCase()}
          </button>
        );
      })}
    </div>
  );
};
