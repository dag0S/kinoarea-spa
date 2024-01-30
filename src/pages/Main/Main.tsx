import { FC } from 'react';
import CinemaNow from '../../sections/CinemaNow/CinemaNow';
import PopularFilms from '../../sections/PopularFilms/PopularFilms';
import PopularPeople from '../../sections/PopularPeople/PopularPeople';
import Trailers from '../../sections/Trailers/Trailers';

const Main: FC = () => {
  return (
    <main>
      <CinemaNow />
      <Trailers />
      <PopularFilms />
      <PopularPeople />
    </main>
  );
};

export default Main;
