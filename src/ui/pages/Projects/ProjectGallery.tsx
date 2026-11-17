import { useRef, useState, type KeyboardEvent } from 'react';
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faImages } from '@fortawesome/free-solid-svg-icons';
import type { ProjectScreenshot } from './projectMedia';

interface ProjectGalleryProps {
  screenshots: ProjectScreenshot[];
}

export const ProjectGallery = ({ screenshots }: ProjectGalleryProps) => {
  const { t } = useTranslation();
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const activeScreenshot = screenshots[activeIndex];

  if (!activeScreenshot) {
    return null;
  }

  const showPrevious = () => {
    setActiveIndex((index) => (index - 1 + screenshots.length) % screenshots.length);
  };

  const showNext = () => {
    setActiveIndex((index) => (index + 1) % screenshots.length);
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLDialogElement>) => {
    if (screenshots.length < 2) {
      return;
    }

    if (event.key === 'ArrowLeft') {
      event.preventDefault();
      showPrevious();
    } else if (event.key === 'ArrowRight') {
      event.preventDefault();
      showNext();
    }
  };

  return (
    <>
      <button
        type='button'
        onClick={() => dialogRef.current?.showModal()}
        className='inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-primary)] transition-colors hover:text-[var(--color-primary-dark)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-primary)] cursor-pointer'
      >
        <FontAwesomeIcon icon={faImages} />
        <span>
          {t('projects.gallery.open')} · {screenshots.length}
        </span>
      </button>

      <dialog
        ref={dialogRef}
        aria-labelledby='project-gallery-title'
        onKeyDown={handleKeyDown}
        onClick={(event) => {
          if (event.target === event.currentTarget) {
            dialogRef.current?.close();
          }
        }}
        className='m-auto max-h-[92dvh] w-[96vw] max-w-6xl overflow-auto rounded-2xl border border-[var(--color-text-subtle)]/20 bg-[var(--color-bg-muted)] p-0 text-[var(--color-text-base)] shadow-2xl backdrop:bg-black/80'
      >
        <div className='flex items-center justify-between gap-4 border-b border-[var(--color-text-subtle)]/15 px-4 py-3'>
          <div className='min-w-0'>
            <h3 id='project-gallery-title' className='truncate text-sm font-semibold'>
              {t(activeScreenshot.captionKey)}
            </h3>
            <p className='font-mono text-2xs text-[var(--color-text-subtle)]'>
              {t('projects.gallery.counter', { current: activeIndex + 1, total: screenshots.length })}
            </p>
          </div>
          <button
            type='button'
            autoFocus
            onClick={() => dialogRef.current?.close()}
            aria-label={t('projects.gallery.close')}
            className='flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-[var(--color-text-subtle)]/20 text-lg hover:border-[var(--color-primary)]/50 hover:text-[var(--color-primary)]'
          >
            &times;
          </button>
        </div>

        <div className='relative flex min-h-64 items-center justify-center bg-black/90 p-4 sm:min-h-96 sm:p-8'>
          {screenshots.length > 1 && (
            <button
              type='button'
              onClick={showPrevious}
              aria-label={t('projects.gallery.previous')}
              className='absolute left-2 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-black/60 text-xl text-white hover:bg-black/80 sm:left-4'
            >
              &larr;
            </button>
          )}
          <img
            src={activeScreenshot.src}
            alt={t(activeScreenshot.altKey)}
            className='max-h-[68dvh] max-w-full object-contain'
          />
          {activeScreenshot.isPlaceholder && (
            <span className='pointer-events-none absolute bottom-4 right-4 rounded-md bg-black/70 px-2.5 py-1 font-mono text-2xs font-bold uppercase tracking-wider text-white'>
              {t('projects.gallery.placeholder')}
            </span>
          )}
          {screenshots.length > 1 && (
            <button
              type='button'
              onClick={showNext}
              aria-label={t('projects.gallery.next')}
              className='absolute right-2 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-black/60 text-xl text-white hover:bg-black/80 sm:right-4'
            >
              &rarr;
            </button>
          )}
        </div>

        {screenshots.length > 1 && (
          <div className='flex gap-2 overflow-x-auto p-3' aria-label={t('projects.gallery.thumbnails')}>
            {screenshots.map((screenshot, index) => (
              <button
                key={screenshot.src}
                type='button'
                onClick={() => setActiveIndex(index)}
                aria-label={`${t('projects.gallery.goToImage')} ${index + 1}`}
                aria-pressed={index === activeIndex}
                className={`shrink-0 overflow-hidden rounded-md border-2 ${
                  index === activeIndex
                    ? 'border-[var(--color-primary)]'
                    : 'border-transparent opacity-70 hover:opacity-100'
                }`}
              >
                <img src={screenshot.src} alt='' className='h-14 w-24 object-cover sm:h-16 sm:w-28' loading='lazy' />
              </button>
            ))}
          </div>
        )}
      </dialog>
    </>
  );
};
