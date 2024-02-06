import { FC } from 'react';
import CinemaNow from '../../sections/CinemaNow/CinemaNow';
import PopularFilms from '../../sections/PopularFilms/PopularFilms';
import PopularPeople from '../../sections/PopularPeople/PopularPeople';
import Trailers from '../../sections/Trailers/Trailers';
import Newsletter from '../../sections/Newsletter/Newsletter';
import ExpectedFilms from '../../sections/ExpectedFilms/ExpectedFilms';

const Main: FC = () => {
  return (
    <main>
      <CinemaNow />
      <Trailers />
      <PopularFilms />
      <PopularPeople />
      <ExpectedFilms />
      <Newsletter />
    </main>
  );
};

export default Main;
