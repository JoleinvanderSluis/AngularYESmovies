import { Movie } from './movie';
import { Rating } from './rating';
import { Genre } from './genre';

export class YesProfile {
    id: Number;
    userName: string;
    watchedMovies: Set<Movie>;
    ratedMovies: Set<Rating>;
    preferredGenres: Set<Genre>;
}
