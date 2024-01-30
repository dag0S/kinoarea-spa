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
