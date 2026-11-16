import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

interface StatusBadgeProps {
  className?: string; // на случай, если где-то понадобится передать внешний отступ или ширину
}

export const StatusBadge = ({ className = '' }: StatusBadgeProps) => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <div className={`max-w-[480px] mr-auto lg:mx-0 w-fit ${className}`}>
      <button
        onClick={() => navigate('/contact')}
        type='button'
        className='group/badge w-full inline-flex items-center justify-between gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-700 dark:text-emerald-400 text-xs font-semibold shadow-sm hover:bg-emerald-500/20 hover:border-emerald-500/50 transition-all cursor-pointer text-left'
        title={t('status.title', 'Перейти к контактам')}
      >
        <div className='flex items-center gap-2'>
          <span className='w-2 h-2 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_8px_rgba(16,185,129,0.6)] flex-shrink-0' />
          <span className='group-hover/badge:underline decoration-emerald-500/50 underline-offset-2'>
            {t('status.text', 'Открыт к проектам по автоматизации и постоянному сотрудничеству')}
          </span>
        </div>
        <svg
          className='w-3.5 h-3.5 opacity-0 group-hover/badge:opacity-100 group-hover/badge:translate-x-0.5 transition-all flex-shrink-0 text-emerald-600 dark:text-emerald-400'
          fill='none'
          stroke='currentColor'
          viewBox='0 0 24 24'
        >
          <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M14 5l7 7m0 0l-7 7m7-7H3' />
        </svg>
      </button>
    </div>
  );
};
