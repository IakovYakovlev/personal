import { Outlet } from 'react-router';
import { Navbar } from './Navbar/Navbar';
import { Footer } from './Footer';

export const Layout = () => {
  return (
    <div className='flex flex-col min-h-screen'>
      <Navbar />
      <main className='flex-1 pt-20 flex flex-col'>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
