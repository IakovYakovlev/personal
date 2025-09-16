import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faCopy, faCheck } from '@fortawesome/free-solid-svg-icons';

export const EmailContact = () => {
  const [copied, setCopied] = useState(false);
  const email = 'j.jakovu@gmail.com';

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className='flex items-center text-text-subtle'>
      <FontAwesomeIcon icon={faEnvelope} className='w-6 h-6' />

      <span className='ms-3'>{email}</span>
      <button onClick={copyToClipboard} className='ms-1 text-xs rounded hover:text-primary transitio cursor-pointer'>
        <FontAwesomeIcon icon={copied ? faCheck : faCopy} className='w-4 h-4' />
      </button>
    </div>
  );
};
