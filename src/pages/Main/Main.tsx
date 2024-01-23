import CinemaNow from '../../sections/CinemaNow/CinemaNow';
import PopularFilms from '../../sections/PopularFilms/PopularFilms';
import Trailers from '../../sections/Trailers/Trailers';

const Main = () => {
  return (
    <main>
      <CinemaNow />
      <Trailers />
      <PopularFilms />
    </main>
  );
};

export default Main;
