import { useSelector } from 'react-redux';
import type { RootState } from '../../application/store';

export default function Background() {
  const theme = useSelector((state: RootState) => state.theme.theme);
  return (
    <div
      className={`fixed inset-0 transition-colors duration-300 -z-10
        ${
          theme === 'dark'
            ? 'bg-[#0f172a] text-cyan-300 [background-image:linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[length:40px_40px]'
            : 'bg-gradient-to-br from-slate-100 to-sky-100 text-blue-900 [background-image:linear-gradient(90deg,rgba(30,58,138,0.1)_1px,transparent_1px),linear-gradient(rgba(30,58,138,0.1)_1px,transparent_1px)] bg-[length:40px_40px]'
        }`}
    ></div>
  );
}
