import type { ButtonHTMLAttributes } from 'react';
import { useSelector } from 'react-redux';
import type { RootState } from '../../../application/store';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
}

export function Button({ label, className = '', ...props }: Props) {
  const theme = useSelector((state: RootState) => state.theme.theme);

  return (
    <button
      {...props}
      className={`
        px-4 py-2 rounded font-bold transition-colors duration-300 shadow
        ${theme === 'dark' ? 'bg-cyan-600 text-white hover:bg-cyan-500' : 'bg-blue-500 text-white hover:bg-blue-400'}
        ${className}
      `}
    >
      {label}
    </button>
  );
}
