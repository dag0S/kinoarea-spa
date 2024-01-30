export interface IMenu {
  name: string;
  path: string;
}

export interface IGenres {
  name: string;
}

export interface IPoster {
  url: string;
  previewUrl: string;
}

export interface IRating {
  filmCritics?: number;
  imdb?: number;
  kp: number;
  russianFilmCritics?: number;
}

export interface IPeople {
  age: number;
  enName: string;
  id: number;
  name: string;
  photo: string;
  sex: string;
}

export interface IMovie {
  genres: IGenres[];
  id: number;
  name: string;
  poster: IPoster;
  rating: IRating;
}
