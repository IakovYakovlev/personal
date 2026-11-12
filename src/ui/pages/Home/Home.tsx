import { Trans, useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import i18n from '../../../i18n';

export const Home = () => {
  const { t } = useTranslation();

  return (
    <div className='flex-1 flex flex-col justify-center w-full max-w-6xl mx-auto px-6 md:px-12 py-6 md:py-10 text-left'>
      <main className='w-full'>
        {/* Главный заголовок с локализацией и идеальным размером */}
        <div className='max-w-3xl mb-8'>
          <h1 className='text-3xl md:text-5xl font-bold text-[var(--color-text-base)] tracking-tight leading-tight mb-3'>
            {t('home.role', 'Разработка надежных веб-приложений')}
          </h1>

          {/* Строка стека с акцентным цветом */}
          <div className='font-mono text-base md:text-lg text-[var(--color-primary)] mb-4 flex items-center gap-3'>
            <span>.NET / C#</span>
            <span className='text-[var(--color-text-subtle)] font-light'>|</span>
            <span>React / TypeScript</span>
          </div>

          {/* Основное описание */}
          <p className='text-base md:text-lg text-[var(--color-text-muted)] leading-relaxed mb-6'>
            <Trans i18nKey='home.description'>
              Более 5 лет коммерческого опыта. Помогаю компаниям наводить порядок в операционных процессах: переводить
              учет из громоздких Excel-таблиц и устаревших систем в надежные, удобные и масштабируемые веб-сервисы.
            </Trans>
          </p>

          {/* Кнопки действий */}
          <div className='flex flex-wrap gap-4 items-center'>
            <Link
              to='/projects'
              className='px-5 py-2.5 rounded-lg bg-[var(--color-primary)] text-white font-medium hover:bg-[var(--color-primary-dark)] transition shadow-sm flex items-center gap-2'
            >
              <span>{t('home.cta.projects', 'Смотреть проекты')}</span>
              <span>&rarr;</span>
            </Link>

            <Link
              to='/about'
              className='px-5 py-2.5 rounded-lg border border-[var(--color-primary)] text-[var(--color-primary)] font-medium hover:bg-[var(--color-primary)] hover:text-white transition'
            >
              {t('home.cta.about', 'Узнать больше обо мне')}
            </Link>

            <a
              href={t('links.resume')}
              download={`Iakov_Yakovlev_Fullstack_${i18n.language.toUpperCase()}.pdf`}
              className='px-5 py-2.5 rounded-lg border border-[var(--color-text-subtle)] text-[var(--color-text-base)] font-medium hover:border-[var(--color-primary)] transition'
            >
              {t('home.cta.resume', 'Скачать резюме')}
            </a>
          </div>
        </div>

        {/* Разделитель */}
        <hr className='border-[var(--color-text-subtle)]/15 my-6 md:my-8' />

        {/* Информационные блоки */}
        <div className='grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6'>
          {/* Блок 1 */}
          <div className='relative bg-[var(--color-bg-muted)] p-5 md:p-6 rounded-2xl border border-[var(--color-text-subtle)]/15 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.04)] flex flex-col justify-between cursor-default overflow-hidden [clip-path:polygon(0_0,calc(100%-2.25rem)_0,100%_2.25rem,100%_100%,0_100%)]'>
            <div className='absolute top-0 right-0 w-9 h-9 bg-[linear-gradient(225deg,var(--color-bg-base)_0%,var(--color-bg-base)_45%,rgba(0,0,0,0.08)_45%,rgba(0,0,0,0.02)_70%,transparent_100%)] border-l border-b border-[var(--color-text-subtle)]/20 pointer-events-none rounded-bl-lg shadow-[-2px_2px_4px_rgba(0,0,0,0.04)]'></div>

            <div>
              <div className='text-2xl md:text-3xl font-bold text-[var(--color-text-base)] font-mono mb-1'>
                {t('home.cards.card1.title')}
              </div>
              <div className='text-xs font-semibold uppercase tracking-wider text-[var(--color-text-subtle)] mb-2'>
                {t('home.cards.card1.subtitle')}
              </div>
            </div>
            <p className='text-xs text-[var(--color-text-muted)] leading-relaxed'>{t('home.cards.card1.desc')}</p>
          </div>

          {/* Блок 2 */}
          <div className='relative bg-[var(--color-bg-muted)] p-5 md:p-6 rounded-2xl border border-[var(--color-text-subtle)]/15 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.04)] flex flex-col justify-between cursor-default overflow-hidden [clip-path:polygon(0_0,calc(100%-2.25rem)_0,100%_2.25rem,100%_100%,0_100%)]'>
            <div className='absolute top-0 right-0 w-9 h-9 bg-[linear-gradient(225deg,var(--color-bg-base)_0%,var(--color-bg-base)_45%,rgba(0,0,0,0.08)_45%,rgba(0,0,0,0.02)_70%,transparent_100%)] border-l border-b border-[var(--color-text-subtle)]/20 pointer-events-none rounded-bl-lg shadow-[-2px_2px_4px_rgba(0,0,0,0.04)]'></div>

            <div>
              <div className='text-2xl md:text-3xl font-bold text-[var(--color-text-base)] font-mono mb-1'>
                {t('home.cards.card2.title')}
              </div>
              <div className='text-xs font-semibold uppercase tracking-wider text-[var(--color-text-subtle)] mb-2'>
                {t('home.cards.card2.subtitle')}
              </div>
            </div>
            <p className='text-xs text-[var(--color-text-muted)] leading-relaxed'>{t('home.cards.card2.desc')}</p>
          </div>

          {/* Блок 3 */}
          <div className='relative bg-[var(--color-bg-muted)] p-5 md:p-6 rounded-2xl border border-[var(--color-text-subtle)]/15 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.04)] flex flex-col justify-between cursor-default overflow-hidden [clip-path:polygon(0_0,calc(100%-2.25rem)_0,100%_2.25rem,100%_100%,0_100%)]'>
            <div className='absolute top-0 right-0 w-9 h-9 bg-[linear-gradient(225deg,var(--color-bg-base)_0%,var(--color-bg-base)_45%,rgba(0,0,0,0.08)_45%,rgba(0,0,0,0.02)_70%,transparent_100%)] border-l border-b border-[var(--color-text-subtle)]/20 pointer-events-none rounded-bl-lg shadow-[-2px_2px_4px_rgba(0,0,0,0.04)]'></div>

            <div>
              <div className='text-2xl md:text-3xl font-bold text-[var(--color-text-base)] font-mono mb-1'>
                {t('home.cards.card3.title')}
              </div>
              <div className='text-xs font-semibold uppercase tracking-wider text-[var(--color-text-subtle)] mb-2'>
                {t('home.cards.card3.subtitle')}
              </div>
            </div>
            <p className='text-xs text-[var(--color-text-muted)] leading-relaxed'>{t('home.cards.card3.desc')}</p>
          </div>
        </div>
      </main>
    </div>
  );
};
