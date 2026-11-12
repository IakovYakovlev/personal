import { useSelector } from 'react-redux';
import type { RootState } from '../../application/store';

export default function Background() {
  const theme = useSelector((state: RootState) => state.theme.theme);

  return (
    <div
      className={`fixed inset-0 transition-colors duration-300 -z-10 ${
        theme === 'dark' ? 'bg-[#0f172a]' : 'bg-gradient-to-br from-slate-50 via-white to-slate-100'
      }`}
    ></div>
  );
}
