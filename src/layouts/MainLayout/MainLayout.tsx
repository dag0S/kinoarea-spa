import { FC } from "react";
import Header from "../../components/Header/Header";
import Main from "../../pages/Main/Main";
import Footer from "../../components/Footer/Footer";

const MainLayout: FC = () => {
  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
}
 
export default MainLayout;