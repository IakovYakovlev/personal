import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import avatar from '../../../assets/images/avatar.jpg';
import workspace from '../../../assets/images/workspace.jpg';

export const About = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <div className='flex-1 flex flex-col justify-center w-full max-w-6xl mx-auto px-6 md:px-12 py-2 lg:py-4 text-left overflow-hidden'>
      <main className='w-full flex flex-col gap-4 lg:gap-6'>
        {/* ВЕРХНИЙ БЛОК: Фотографии (4) + Текст (8) */}
        <div className='grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start'>
          {/* Левая колонка: Коллаж фотографий */}
          <div className='lg:col-span-4 flex flex-col'>
            <div className='relative w-full max-w-[320px] mx-auto lg:mx-0 pb-6 pr-5'>
              {/* Главный портрет */}
              <div className='relative w-full aspect-[4/5] rounded-2xl overflow-hidden border-2 border-[var(--color-primary)]/40 shadow-xl group bg-[var(--color-bg-muted)]'>
                <img
                  src={avatar}
                  alt='Iakov Yakovlev'
                  className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-500'
                />
                <div className='absolute inset-0 bg-gradient-to-b from-transparent via-white/10 to-transparent -translate-y-full group-hover:translate-y-full transition-transform duration-700 pointer-events-none' />

                <div className='absolute bottom-3 left-3 bg-[var(--color-bg-base)]/80 backdrop-blur-md px-3 py-1 rounded-lg border border-[var(--color-text-subtle)]/20 text-[11px] font-mono text-[var(--color-text-base)] shadow-sm z-10'>
                  #DEV-PROFILE / 01
                </div>
              </div>

              {/* Рабочее пространство */}
              <div className='absolute -bottom-1 -right-6 w-2/3 max-w-[190px] aspect-[4/3] rounded-xl overflow-hidden border-2 border-[var(--color-primary)] shadow-lg bg-[var(--color-bg-muted)] z-20 group'>
                <img
                  src={workspace}
                  alt='Workspace'
                  className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-500'
                />
                <div className='absolute inset-0 bg-gradient-to-b from-transparent via-white/10 to-transparent -translate-y-full group-hover:translate-y-full transition-transform duration-700 pointer-events-none' />

                <div className='absolute bottom-0 inset-x-0 bg-[var(--color-bg-base)]/90 backdrop-blur-md px-2 py-0.5 border-t border-[var(--color-text-subtle)]/15 text-[8px] font-mono text-[var(--color-text-subtle)] flex justify-between items-center'>
                  <span>WORKSPACE</span>
                  <span className='text-[var(--color-primary)] font-bold'>● LIVE</span>
                </div>
              </div>
            </div>
          </div>

          {/* Правая колонка: Весь текст */}
          <div className='lg:col-span-8 flex flex-col justify-start'>
            <div className='inline-flex items-center gap-2 font-mono text-xs text-[var(--color-primary)] font-bold uppercase tracking-wider mb-1.5'>
              <span className='w-2 h-2 rounded-full bg-[var(--color-primary)]' />
              {t('about.section')}
            </div>

            <h1 className='text-3xl md:text-4xl font-bold text-[var(--color-text-base)] tracking-tight mb-3'>
              {t('about.title')}
            </h1>

            <p className='text-sm md:text-base text-[var(--color-text-base)] font-medium leading-relaxed mb-3'>
              {t('about.intro')}
            </p>

            <p className='text-xs md:text-sm text-[var(--color-text-muted)] leading-relaxed mb-3'>{t('about.main')}</p>

            <div className='relative bg-[var(--color-bg-muted)] p-3.5 rounded-xl border-l-4 border-[var(--color-primary)] mb-3 shadow-sm'>
              <p className='text-xs md:text-sm text-[var(--color-text-base)] italic leading-relaxed'>
                {t('about.highlight')}
              </p>
            </div>

            <p className='text-xs md:text-sm text-[var(--color-text-muted)] leading-relaxed'>{t('about.conclusion')}</p>
          </div>
        </div>

        {/* НИЖНИЙ БЛОК: Выравнивание по нижнему краю (items-end) синхронизирует высоту плашки и карточек */}
        <div className='grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center'>
          {/* Левый блок (4 колонки): Статус */}
          <div className='lg:col-span-4 w-full max-w-[320px] mx-auto lg:mx-0 pt-3'>
            <button
              onClick={() => navigate('/contact')}
              type='button'
              className='group/badge w-full inline-flex items-center justify-between gap-2 px-3.5 py-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/25 text-emerald-700 dark:text-emerald-400 text-xs font-semibold shadow-sm hover:bg-emerald-500/20 hover:border-emerald-500/50 transition-all cursor-pointer text-left'
              title={t('status.title')}
            >
              <div className='flex items-center gap-2'>
                <span className='w-2 h-2 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_8px_rgba(16,185,129,0.6)] flex-shrink-0' />
                <span className='group-hover/badge:underline decoration-emerald-500/50 underline-offset-2'>
                  {t('status.text')}
                </span>
              </div>
              <svg
                className='w-3.5 h-3.5 opacity-60 group-hover/badge:opacity-100 group-hover/badge:translate-x-0.5 transition-all flex-shrink-0'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
              >
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M14 5l7 7m0 0l-7 7m7-7H3' />
              </svg>
            </button>
          </div>

          {/* Правый блок (8 колонок): 3 плашки метрик С ЛИНИЕЙ сверху */}
          <div className='lg:col-span-8 grid grid-cols-3 gap-3 font-mono pt-3 border-t border-[var(--color-text-subtle)]/15'>
            <div className='relative overflow-hidden bg-[var(--color-bg-muted)] p-3 rounded-xl border border-[var(--color-text-subtle)]/15 flex flex-col justify-between group hover:border-[var(--color-primary)]/50 transition-colors'>
              <div className='absolute top-0 left-0 w-2.5 h-2.5 border-l-2 border-t-2 border-[var(--color-primary)]/40 rounded-tl-xl pointer-events-none' />
              <div className='text-base md:text-lg font-bold text-[var(--color-primary)]'>
                {t('about.metrics.exp_value')}
              </div>
              <div className='text-[9px] uppercase tracking-wider text-[var(--color-text-subtle)] opacity-80'>
                {t('about.metrics.exp_label')}
              </div>
            </div>

            <div className='relative overflow-hidden bg-[var(--color-bg-muted)] p-3 rounded-xl border border-[var(--color-text-subtle)]/15 flex flex-col justify-between group hover:border-[var(--color-primary)]/50 transition-colors'>
              <div className='absolute top-0 left-0 w-2.5 h-2.5 border-l-2 border-t-2 border-[var(--color-primary)]/40 rounded-tl-xl pointer-events-none' />
              <div className='text-base md:text-lg font-bold text-[var(--color-primary)]'>
                {t('about.metrics.routine_value')}
              </div>
              <div className='text-[9px] uppercase tracking-wider text-[var(--color-text-subtle)] opacity-80'>
                {t('about.metrics.routine_label')}
              </div>
            </div>

            <div className='relative overflow-hidden bg-[var(--color-bg-muted)] p-3 rounded-xl border border-[var(--color-text-subtle)]/15 flex flex-col justify-between group hover:border-[var(--color-primary)]/50 transition-colors'>
              <div className='absolute top-0 left-0 w-2.5 h-2.5 border-l-2 border-t-2 border-[var(--color-primary)]/40 rounded-tl-xl pointer-events-none' />
              <div className='text-sm md:text-base font-bold text-[var(--color-primary)]'>
                {t('about.metrics.ai_value')}
              </div>
              <div className='text-[9px] uppercase tracking-wider text-[var(--color-text-subtle)] opacity-80'>
                {t('about.metrics.ai_label')}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
