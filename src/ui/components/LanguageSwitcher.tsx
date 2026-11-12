import { useTranslation } from 'react-i18next';

export const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const languages = ['ru', 'en'] as const;
  const currentLang = i18n.language.startsWith('en') ? 'en' : 'ru';

  const changeLanguage = (lng: string) => {
    if (currentLang !== lng) {
      i18n.changeLanguage(lng);
    }
  };

  return (
    <div className='inline-flex items-center font-mono text-xs'>
      {languages.map((lng) => {
        const isActive = currentLang === lng;
        return (
          <button
            key={lng}
            type='button'
            onClick={() => changeLanguage(lng)}
            className={`px-2.5 py-1 rounded-md font-semibold transition-all duration-200 cursor-pointer ${
              isActive
                ? 'bg-[var(--color-primary)] text-white shadow-xs'
                : 'text-[var(--color-text-subtle)] hover:text-[var(--color-text-base)]'
            }`}
          >
            {lng.toUpperCase()}
          </button>
        );
      })}
    </div>
  );
};
