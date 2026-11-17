import { Link } from 'react-router-dom';

interface ContactCtaProps {
  label: string;
  text: string;
  buttonLabel: string;
}

export const ContactCta = ({ label, text, buttonLabel }: ContactCtaProps) => (
  <div className='relative overflow-hidden bg-[var(--color-bg-muted)] px-4 py-2.5 rounded-xl border border-[var(--color-text-subtle)]/15 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 font-mono text-xs mt-1.5 group'>
    <div className='absolute top-0 left-0 w-2.5 h-2.5 border-l-2 border-t-2 border-[var(--color-primary)]/40 rounded-tl-xl pointer-events-none' />

    <div className='flex items-center gap-2 text-[var(--color-text-muted)]'>
      <span className='text-[var(--color-primary)] font-bold whitespace-nowrap'>{label}</span>
      <span>{text}</span>
    </div>

    <Link
      to='/contact'
      className='w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-lg bg-[var(--color-primary)] text-white font-medium hover:bg-[var(--color-primary-dark)] transition-all cursor-pointer shadow-sm'
    >
      <span>{buttonLabel}</span>
      <span>&rarr;</span>
    </Link>
  </div>
);
