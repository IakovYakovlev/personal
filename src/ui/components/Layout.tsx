import { Outlet } from 'react-router';
import { Navbar } from './Navbar';

export const Layout = () => {
  return (
    <div className='relative min-h-screen'>
      <Navbar />
      <main className='pt-20 relative z-10'>
        <Outlet />
      </main>
    </div>
  );
};
