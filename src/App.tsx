import './scss/app.scss';
import Footer from './components/Footer/Footer';

import Header from './components/Header/Header';
import Main from './pages/Main/Main';
import { FC } from 'react';

const App: FC = () => {
  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
}

export default App;
