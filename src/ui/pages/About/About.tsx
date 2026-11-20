import { useTranslation } from 'react-i18next';
import avatar from '../../../assets/images/avatar.jpg';
import { StatusBadge } from '../../components/StatusBadge';
import { ContactCta } from '../../components/Contact/ContactCta';

export const About = () => {
  const { t } = useTranslation();

  return (
    <div className='flex-1 flex flex-col justify-center w-full max-w-6xl mx-auto px-6 md:px-12 py-1 lg:py-2 text-left overflow-hidden'>
      <main className='w-full grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start'>
        {/* ТЕКСТОВЫЕ БЛОКИ (на десктопе слева) */}
        <div className='lg:col-span-8 lg:order-1 flex flex-col justify-start space-y-2.5'>
          <div className='inline-flex items-center font-mono text-xs text-[var(--color-primary)] font-bold uppercase tracking-wider'>
            {t('about.section')}
          </div>

          <h1 className='text-3xl md:text-4xl font-bold text-[var(--color-text-base)] tracking-tight'>
            {t('about.title')}
          </h1>

          <StatusBadge />

          {/* Блок 1 */}
          <div className='space-y-0.5'>
            <span className='font-mono text-2xs text-[var(--color-text-subtle)] uppercase tracking-widest'>
              {t('about.block1_label')}
            </span>
            <p className='text-base lg:text-lg text-[var(--color-text-base)] font-medium leading-relaxed'>
              {t('about.intro')}
            </p>
          </div>

          {/* Блок 2 */}
          <div className='space-y-1'>
            <span className='font-mono text-2xs text-[var(--color-text-subtle)] uppercase tracking-widest'>
              {t('about.block2_label')}
            </span>
            <p className='text-base lg:text-lg text-[var(--color-text-muted)] leading-relaxed'>{t('about.main')}</p>

            <div className='relative bg-[var(--color-bg-muted)] p-2.5 rounded-xl border-l-4 border-[var(--color-primary)] shadow-sm'>
              <p className='text-base lg:text-lg text-[var(--color-text-base)] italic leading-relaxed'>
                {t('about.highlight')}
              </p>
            </div>
          </div>

          {/* Блок 3 */}
          <div className='space-y-0.5'>
            <span className='font-mono text-2xs text-[var(--color-text-subtle)] uppercase tracking-widest'>
              {t('about.block3_label')}
            </span>
            <p className='text-base lg:text-lg text-[var(--color-text-muted)] leading-relaxed'>
              {t('about.conclusion')}
            </p>
          </div>

          <ContactCta label={t('about.cta.label')} text={t('about.cta.text')} buttonLabel={t('about.cta.btn')} />
        </div>

        {/* ФОТО + МЕТРИКИ (на десктопе справа) */}
        <div className='lg:col-span-4 lg:order-2 flex flex-col gap-3'>
          <div className='relative w-full max-w-[320px] mx-auto lg:mx-0 pb-2 pr-2'>
            <div className='relative w-full aspect-[4/5] rounded-2xl overflow-hidden border-2 border-[var(--color-primary)]/40 shadow-xl group bg-[var(--color-bg-muted)]'>
              <img
                src={avatar}
                alt='Iakov Yakovlev'
                className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-500'
              />
              <div className='absolute inset-0 bg-gradient-to-b from-transparent via-white/20 to-transparent -translate-y-full group-hover:translate-y-full transition-transform duration-700 pointer-events-none' />

              <div className='absolute bottom-3 left-3 bg-[var(--color-bg-base)]/80 backdrop-blur-md px-3 py-1 rounded-lg border border-[var(--color-text-subtle)]/20 text-xs font-mono text-[var(--color-text-base)] shadow-sm z-10'>
                #DEV-PROFILE / 01
              </div>
            </div>
          </div>

          {/* Метрики */}
          <div className='max-w-[312px] mx-auto lg:mx-0 w-full flex flex-col gap-2 font-mono mt-2'>
            <div className='relative overflow-hidden bg-[var(--color-bg-muted)] p-2.5 rounded-xl border border-[var(--color-text-subtle)]/15 flex items-center justify-between group hover:border-[var(--color-primary)]/50 transition-colors'>
              <div className='absolute top-0 left-0 w-2.5 h-2.5 border-l-2 border-t-2 border-[var(--color-primary)]/40 rounded-tl-xl pointer-events-none' />
              <div className='text-xs uppercase tracking-wider text-[var(--color-text-subtle)] opacity-80'>
                {t('about.metrics.exp_label')}
              </div>
              <div className='text-base font-bold text-[var(--color-primary)]'>{t('about.metrics.exp_value')}</div>
            </div>

            <div className='relative overflow-hidden bg-[var(--color-bg-muted)] p-2.5 rounded-xl border border-[var(--color-text-subtle)]/15 flex items-center justify-between group hover:border-[var(--color-primary)]/50 transition-colors'>
              <div className='absolute top-0 left-0 w-2.5 h-2.5 border-l-2 border-t-2 border-[var(--color-primary)]/40 rounded-tl-xl pointer-events-none' />
              <div className='text-xs uppercase tracking-wider text-[var(--color-text-subtle)] opacity-80'>
                {t('about.metrics.routine_label')}
              </div>
              <div className='text-base font-bold text-[var(--color-primary)]'>{t('about.metrics.routine_value')}</div>
            </div>

            <div className='relative overflow-hidden bg-[var(--color-bg-muted)] p-2.5 rounded-xl border border-[var(--color-text-subtle)]/15 flex items-center justify-between group hover:border-[var(--color-primary)]/50 transition-colors'>
              <div className='absolute top-0 left-0 w-2.5 h-2.5 border-l-2 border-t-2 border-[var(--color-primary)]/40 rounded-tl-xl pointer-events-none' />
              <div className='text-xs uppercase tracking-wider text-[var(--color-text-subtle)] opacity-80'>
                {t('about.metrics.ai_label')}
              </div>
              <div className='text-base font-bold text-[var(--color-primary)]'>{t('about.metrics.ai_value')}</div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
