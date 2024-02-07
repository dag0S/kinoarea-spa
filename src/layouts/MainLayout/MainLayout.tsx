import { FC } from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import { Outlet } from 'react-router-dom';
import ButtonScroll from '../../components/ButtonScroll/ButtonScroll';

const MainLayout: FC = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
        <ButtonScroll />
      </main>
      <Footer />
    </>
  );
};

export default MainLayout;
