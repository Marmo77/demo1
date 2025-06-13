// import type { ReactNode } from 'react'; // Add 'type' keyword
import Navbar from './Navbar';
import Footer from './Footer';
import { Outlet } from 'react-router-dom'; // Add this import


const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Outlet /> {/* This renders the child routes */}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;