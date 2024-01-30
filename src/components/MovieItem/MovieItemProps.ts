import { IGenres, IPoster, IRating } from "../../types/types";

export interface MovieItemProps {
  name: string;
  genres: IGenres[];
  rating: IRating;
  poster: IPoster;
}
