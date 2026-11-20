import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faCopy, faCheck, faClock } from '@fortawesome/free-solid-svg-icons';

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
    <section className='relative mx-auto w-full max-w-xl overflow-hidden bg-[var(--color-bg-muted)] p-4 lg:p-5 rounded-xl border border-[var(--color-text-subtle)]/15 hover:border-[var(--color-primary)]/50 transition-colors'>
      <span className='absolute top-0 left-0 w-3 h-3 border-l-2 border-t-2 border-[var(--color-primary)]/40 rounded-tl-xl pointer-events-none' />

      <div className='flex items-start gap-3 mb-5'>
        <span className='w-10 h-10 shrink-0 rounded-xl bg-[var(--color-bg-base)] border border-[var(--color-text-subtle)]/15 flex items-center justify-center text-[var(--color-primary)]'>
          <FontAwesomeIcon icon={faEnvelope} />
        </span>
        <div className='min-w-0'>
          <h2 className='font-semibold text-[var(--color-text-base)]'>
            {t('contact.methods.email')}
          </h2>
          <p className='text-sm text-[var(--color-text-subtle)] break-all'>{email}</p>
        </div>
      </div>

      <div className='flex flex-wrap items-center gap-3'>
        <a
          href={`mailto:${email}`}
          className='inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-[var(--color-primary)] text-[var(--color-bg-base)] font-semibold hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-primary)] transition'
        >
          <FontAwesomeIcon icon={faEnvelope} />
          {t('contact.sendEmail')}
        </a>
        <button
          onClick={copyToClipboard}
          aria-label={copied ? t('contact.emailCopied') : t('contact.copyEmail')}
          title={copied ? t('contact.emailCopied') : t('contact.copyEmail')}
          className='inline-flex items-center justify-center w-10 h-10 rounded-lg border border-[var(--color-text-subtle)]/20 text-[var(--color-text-subtle)] hover:text-[var(--color-primary)] hover:border-[var(--color-primary)]/50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-primary)] transition cursor-pointer'
        >
          <FontAwesomeIcon icon={copied ? faCheck : faCopy} className='w-4 h-4' />
        </button>
        {copied && (
          <span role='status' aria-live='polite' className='text-sm text-[var(--color-text-muted)]'>
            {t('contact.emailCopiedShort')}
          </span>
        )}
      </div>

      <div className='mt-5 flex items-start gap-2.5 rounded-lg bg-[var(--color-bg-base)]/70 px-3 py-2.5 text-sm text-[var(--color-text-muted)]'>
        <FontAwesomeIcon icon={faClock} className='mt-0.5 text-[var(--color-primary)]' />
        <span>{t('contact.responseTime')}</span>
      </div>
    </section>
  );
};
