import dashboardPreview from '../../../assets/projects/personal-ops-center/dashboard.svg';
import documentsPreview from '../../../assets/projects/personal-ops-center/documents.svg';
import servicesPreview from '../../../assets/projects/personal-ops-center/services.svg';

export interface ProjectScreenshot {
  src: string;
  altKey: string;
  captionKey: string;
  isPlaceholder?: boolean;
}

export const projectMedia: Record<string, ProjectScreenshot[]> = {
  'personal-ops-center': [
    {
      src: dashboardPreview,
      altKey: 'projects.gallery.screenshots.dashboard.alt',
      captionKey: 'projects.gallery.screenshots.dashboard.caption',
      isPlaceholder: true,
    },
    {
      src: documentsPreview,
      altKey: 'projects.gallery.screenshots.documents.alt',
      captionKey: 'projects.gallery.screenshots.documents.caption',
      isPlaceholder: true,
    },
    {
      src: servicesPreview,
      altKey: 'projects.gallery.screenshots.services.alt',
      captionKey: 'projects.gallery.screenshots.services.caption',
      isPlaceholder: true,
    },
  ],
};
