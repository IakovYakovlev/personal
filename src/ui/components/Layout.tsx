import { Outlet } from 'react-router';
import { Navbar } from './Navbar';
import { ThemeSwitcher } from './ThemeSwitcher';

export const Layout = () => {
  return (
    <div className='relative min-h-screen'>
      <Navbar />
      <ThemeSwitcher />
      <main className='pt-20 relative z-10'>
        <Outlet />
      </main>
    </div>
  );
};
