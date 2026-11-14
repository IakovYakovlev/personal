import { Trans, useTranslation } from 'react-i18next';
import { Link, useNavigate } from 'react-router-dom';
import i18n from '../../../i18n';
import avatar from '../../../assets/images/avatar.jpg';

export const Home = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <div className='flex-1 flex flex-col justify-center w-full max-w-6xl mx-auto px-6 md:px-12 py-3 md:py-8 text-left'>
      <main className='w-full'>
        {/* Главный заголовок и контент с оптимизированными отступами */}
        <div className='max-w-3xl mb-4 md:mb-6'>
          {/* Шапка: Аватар + Кликабельный Статус */}
          <div className='flex items-center gap-3 sm:gap-5 mb-3'>
            {/* Круглый аватар с CAD-уголками и ховер-эффектами */}
            <div className='relative w-16 h-16 sm:w-24 sm:h-24 md:w-28 md:h-28 flex-shrink-0 group cursor-pointer'>
              <div className='w-full h-full rounded-full overflow-hidden border-4 border-[var(--color-primary)] shadow-md group-hover:shadow-[0_0_20px_rgba(var(--color-primary-rgb),0.5)] transition-all duration-300 bg-[var(--color-bg-muted)] relative'>
                <img
                  src={avatar}
                  alt='Iakov Yakovlev'
                  className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-500'
                />

                {/* Эффект сканирующего луча при наведении */}
                <div className='absolute inset-0 bg-gradient-to-b from-transparent via-white/20 to-transparent -translate-y-full group-hover:translate-y-full transition-transform duration-700 pointer-events-none' />
              </div>

              {/* CAD-угловые технические засечки поверх круга */}
              <div className='absolute -top-1 -left-1 w-3 h-3 border-l-2 border-t-2 border-[var(--color-primary)] rounded-tl-full pointer-events-none group-hover:scale-110 transition-transform' />
              <div className='absolute -bottom-1 -right-1 w-3 h-3 border-r-2 border-b-2 border-[var(--color-primary)] rounded-br-full pointer-events-none group-hover:scale-110 transition-transform' />
            </div>

            {/* Блок кликабельного статуса (ведет на /contact) */}
            <div className='flex-1'>
              <button
                onClick={() => navigate('/contact')}
                type='button'
                className='group/badge inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-700 dark:text-emerald-400 text-xs md:text-sm font-semibold shadow-sm hover:bg-emerald-500/20 hover:border-emerald-500/50 transition-all cursor-pointer text-left'
                title={t('home.statusTitle', 'Перейти к контактам')}
              >
                <span className='w-2 h-2 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_8px_rgba(16,185,129,0.6)] flex-shrink-0' />
                <span className='group-hover/badge:underline decoration-emerald-500/50 underline-offset-2'>
                  {t('home.status', 'Открыт к проектам по автоматизации и постоянному сотрудничеству')}
                </span>
                <svg
                  className='w-3.5 h-3.5 opacity-0 group-hover/badge:opacity-100 transition-opacity -ml-1 text-emerald-600 dark:text-emerald-400 flex-shrink-0'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M14 5l7 7m0 0l-7 7m7-7H3' />
                </svg>
              </button>
            </div>
          </div>

          <h1 className='text-2xl sm:text-3xl md:text-5xl font-bold text-[var(--color-text-base)] tracking-tight leading-tight mb-2 md:mb-3'>
            {t('home.role', 'Разработка надежных веб-приложений')}
          </h1>

          {/* Строка стека */}
          <div className='font-mono text-xs md:text-sm text-[var(--color-text-subtle)] mb-3 md:mb-4 border-l-2 border-[var(--color-primary)]/30 pl-3 py-0.5 space-y-0.5'>
            <div>C# / .NET</div>
            <div>TypeScript / React</div>
          </div>

          {/* Основное описание */}
          <p className='text-xs sm:text-sm md:text-base text-[var(--color-text-muted)] leading-relaxed mb-4 md:mb-5'>
            <Trans i18nKey='home.description'>
              Веб-разработчик полного цикла (Fullstack) с 5+ годами опыта. Специализируюсь на автоматизации бизнеса и
              создании надежных цифровых решений. Превращаю запутанный учет в таблицах и ручные процессы в четко
              работающие системы — с удобным интерфейсом и прочной архитектурой.
            </Trans>
          </p>

          {/* Кнопки действий (CTA) */}
          <div className='flex flex-wrap gap-2.5 items-center'>
            <Link
              to='/projects'
              className='px-3.5 py-2 rounded-lg bg-[var(--color-primary)] text-white text-xs sm:text-sm font-medium hover:bg-[var(--color-primary-dark)] transition shadow-sm flex items-center gap-2'
            >
              <span>{t('home.cta.projects', 'Смотреть проекты')}</span>
              <span>&rarr;</span>
            </Link>

            <a
              href={t('links.resume')}
              download={`Iakov_Yakovlev_Fullstack_${i18n.language.toUpperCase()}.pdf`}
              className='px-3.5 py-2 rounded-lg border border-[var(--color-text-subtle)] text-[var(--color-text-base)] text-xs sm:text-sm font-medium hover:border-[var(--color-primary)] transition flex items-center gap-2'
            >
              <svg
                className='w-4 h-4 text-[var(--color-text-subtle)]'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4'
                />
              </svg>
              <span>{t('home.cta.resume', 'Скачать резюме')}</span>
            </a>
          </div>
        </div>

        {/* Разделитель */}
        <hr className='border-[var(--color-text-subtle)]/15 my-4 md:my-5' />

        {/* Информационные инженерные блоки (Blueprint style) с компактными отступами */}
        <div className='grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-5'>
          {/* Блок 1 */}
          <div className='relative overflow-hidden bg-[var(--color-bg-muted)] p-3.5 md:p-4 rounded-xl border border-[var(--color-text-subtle)]/15 flex flex-col justify-between cursor-default group hover:border-[var(--color-primary)]/50 transition-colors'>
            <div className='absolute inset-0 bg-gradient-to-b from-transparent via-white/10 to-transparent -translate-y-full group-hover:translate-y-full transition-transform duration-700 pointer-events-none' />
            <div className='absolute top-0 left-0 w-3 h-3 border-l-2 border-t-2 border-[var(--color-primary)]/40 rounded-tl-xl pointer-events-none' />

            <div className='flex items-center justify-between mb-2 relative z-10'>
              <span className='font-mono text-[10px] uppercase tracking-widest text-[var(--color-text-subtle)] opacity-70'>
                #SPEC-01
              </span>
              <svg
                className='w-4 h-4 text-[var(--color-primary)]/70'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='1.5'
                  d='M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10'
                />
              </svg>
            </div>

            <div className='relative z-10'>
              <div className='text-base md:text-lg font-bold text-[var(--color-text-base)] font-mono mb-0.5'>
                {t('home.cards.card1.title')}
              </div>
              <div className='text-[11px] font-bold uppercase tracking-wider text-[var(--color-primary)] mb-1.5'>
                {t('home.cards.card1.subtitle')}
              </div>
            </div>
            <p className='text-xs md:text-[13px] text-[var(--color-text-base)] opacity-90 leading-snug relative z-10'>
              {t('home.cards.card1.desc')}
            </p>
          </div>

          {/* Блок 2 */}
          <div className='relative overflow-hidden bg-[var(--color-bg-muted)] p-3.5 md:p-4 rounded-xl border border-[var(--color-text-subtle)]/15 flex flex-col justify-between cursor-default group hover:border-[var(--color-primary)]/50 transition-colors'>
            <div className='absolute inset-0 bg-gradient-to-b from-transparent via-white/10 to-transparent -translate-y-full group-hover:translate-y-full transition-transform duration-700 pointer-events-none' />
            <div className='absolute top-0 left-0 w-3 h-3 border-l-2 border-t-2 border-[var(--color-primary)]/40 rounded-tl-xl pointer-events-none' />

            <div className='flex items-center justify-between mb-2 relative z-10'>
              <span className='font-mono text-[10px] uppercase tracking-widest text-[var(--color-text-subtle)] opacity-70'>
                #SPEC-02
              </span>
              <svg
                className='w-4 h-4 text-[var(--color-primary)]/70'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='1.5'
                  d='M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15'
                />
              </svg>
            </div>

            <div className='relative z-10'>
              <div className='text-base md:text-lg font-bold text-[var(--color-text-base)] font-mono mb-0.5'>
                {t('home.cards.card2.title')}
              </div>
              <div className='text-[11px] font-bold uppercase tracking-wider text-[var(--color-primary)] mb-1.5'>
                {t('home.cards.card2.subtitle')}
              </div>
            </div>
            <p className='text-xs md:text-[13px] text-[var(--color-text-base)] opacity-90 leading-snug relative z-10'>
              {t('home.cards.card2.desc')}
            </p>
          </div>

          {/* Блок 3 */}
          <div className='relative overflow-hidden bg-[var(--color-bg-muted)] p-3.5 md:p-4 rounded-xl border border-[var(--color-text-subtle)]/15 flex flex-col justify-between cursor-default group hover:border-[var(--color-primary)]/50 transition-colors'>
            <div className='absolute inset-0 bg-gradient-to-b from-transparent via-white/10 to-transparent -translate-y-full group-hover:translate-y-full transition-transform duration-700 pointer-events-none' />
            <div className='absolute top-0 left-0 w-3 h-3 border-l-2 border-t-2 border-[var(--color-primary)]/40 rounded-tl-xl pointer-events-none' />

            <div className='flex items-center justify-between mb-2 relative z-10'>
              <span className='font-mono text-[10px] uppercase tracking-widest text-[var(--color-text-subtle)] opacity-70'>
                #SPEC-03
              </span>
              <svg
                className='w-4 h-4 text-[var(--color-primary)]/70'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='1.5'
                  d='M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z'
                />
              </svg>
            </div>

            <div className='relative z-10'>
              <div className='text-base md:text-lg font-bold text-[var(--color-text-base)] font-mono mb-0.5'>
                {t('home.cards.card3.title')}
              </div>
              <div className='text-[11px] font-bold uppercase tracking-wider text-[var(--color-primary)] mb-1.5'>
                {t('home.cards.card3.subtitle')}
              </div>
            </div>
            <p className='text-xs md:text-[13px] text-[var(--color-text-base)] opacity-90 leading-snug relative z-10'>
              {t('home.cards.card3.desc')}
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};
