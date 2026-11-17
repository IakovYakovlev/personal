import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faCopy, faCheck } from '@fortawesome/free-solid-svg-icons';

export const EmailContact = () => {
  const { t } = useTranslation();
  const [copied, setCopied] = useState(false);
  const email = 'j.jakovu@gmail.com';

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className='relative overflow-hidden bg-[var(--color-bg-muted)] p-4 lg:p-5 rounded-xl border border-[var(--color-text-subtle)]/15 md:col-span-2 group hover:border-[var(--color-primary)]/50 transition-colors'>
      <span className='absolute top-0 left-0 w-3 h-3 border-l-2 border-t-2 border-[var(--color-primary)]/40 rounded-tl-xl pointer-events-none' />
      <div className='flex items-center justify-between font-mono text-2xs uppercase tracking-widest text-[var(--color-text-subtle)] opacity-70'>
        <span>#01 / {t('contact.methods.email')}</span>
        <FontAwesomeIcon icon={faEnvelope} className='text-[var(--color-primary)]' />
      </div>

      <div className='flex items-center justify-between gap-4 mt-4'>
        <div className='flex items-center gap-3 min-w-0'>
          <span className='w-10 h-10 shrink-0 rounded-lg bg-[var(--color-bg-base)] border border-[var(--color-text-subtle)]/15 flex items-center justify-center text-[var(--color-primary)]'>
            <FontAwesomeIcon icon={faEnvelope} />
          </span>
          <div className='min-w-0'>
            <div className='text-sm text-[var(--color-text-subtle)]'>{t('contact.methods.email')}</div>
            <a
              href={`mailto:${email}`}
              className='text-base lg:text-lg font-semibold text-[var(--color-text-base)] hover:text-[var(--color-primary)] transition-colors break-all'
            >
              {email}
            </a>
          </div>
        </div>

        <button
          onClick={copyToClipboard}
          aria-label={copied ? t('contact.emailCopied') : t('contact.copyEmail')}
          title={copied ? t('contact.emailCopied') : t('contact.copyEmail')}
          className='shrink-0 w-10 h-10 rounded-lg border border-[var(--color-text-subtle)]/20 text-[var(--color-text-subtle)] hover:text-[var(--color-primary)] hover:border-[var(--color-primary)]/50 transition cursor-pointer'
        >
          <FontAwesomeIcon icon={copied ? faCheck : faCopy} className='w-4 h-4' />
        </button>
      </div>
    </div>
  );
};
