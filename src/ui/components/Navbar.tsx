import { useSelector } from 'react-redux';
import type { RootState } from '../../application/store';
import { Link, NavLink } from 'react-router';

export const Navbar = () => {
  const theme = useSelector((state: RootState) => state.theme.theme);

  const links = [
    { to: '/', label: 'Главная' },
    { to: '/about', label: 'Обо мне' },
    { to: '/projects', label: 'Проекты' },
    { to: '/skills', label: 'Навыки' },
    { to: '/contact', label: 'Контакты' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full flex justify-between items-center ps-8 pe-20 pt-5 pb-4 backdrop-blur-md z-50 transition-colors
        ${theme === 'dark' ? 'bg-black/40 text-white' : 'bg-white/40 text-black'}`}
    >
      <Link to='/' className='font-bold text-xl text-cyan-400'>
        Портфолио
      </Link>
      <ul className='flex gap-6'>
        {links.map(({ to, label }) => (
          <li key={to}>
            <NavLink
              to={to}
              className={({ isActive }) =>
                `transition-colors ${
                  isActive
                    ? 'text-cyan-400'
                    : theme === 'dark'
                      ? 'text-gray-300 hover:text-white'
                      : 'text-gray-700 hover:text-black'
                }`
              }
            >
              {label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};
