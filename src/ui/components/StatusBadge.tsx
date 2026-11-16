import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

interface StatusBadgeProps {
  className?: string;
}

export const StatusBadge = ({ className = '' }: StatusBadgeProps) => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <div className={`max-w-[580px] mr-auto lg:mx-0 w-fit ${className}`}>
      <button
        onClick={() => navigate('/contact')}
        type='button'
        className='group/badge w-full inline-flex items-center justify-between gap-3 p-1.5 pl-3.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-700 dark:text-emerald-400 text-xs font-medium shadow-sm hover:bg-emerald-500/20 hover:border-emerald-500/50 transition-all cursor-pointer text-left'
        title={t('status.title', 'Перейти к контактам')}
      >
        <div className='flex items-center gap-2'>
          <span className='w-2 h-2 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_8px_rgba(16,185,129,0.6)] flex-shrink-0' />
          <span className='text-[var(--color-text-base)] font-medium'>
            {t('status.text', 'Открыт к проектам по автоматизации и постоянному сотрудничеству')}
          </span>

          {/* Увеличенная стрелка перед кнопкой, "указывающая" на нее */}
          <span className='text-base font-bold text-[var(--color-primary)] group-hover/badge:translate-x-1 transition-transform flex-shrink-0 ml-1'>
            &rarr;
          </span>
        </div>

        {/* Фирменная кнопка-действие */}
        <span className='inline-flex items-center px-3.5 py-1 rounded-lg bg-[var(--color-primary)] text-white text-xs font-bold shadow-[0_2px_8px_rgba(16,185,129,0.3)] group-hover/badge:shadow-[0_4px_12px_rgba(16,185,129,0.5)] group-hover/badge:bg-[var(--color-primary-dark)] transition-all whitespace-nowrap flex-shrink-0'>
          <span>{t('status.btn', 'Связаться')}</span>
        </span>
      </button>
    </div>
  );
};
