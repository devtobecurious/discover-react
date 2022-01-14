import { Apis } from "../../../config/Apis";

export class MoviesService {
    async getAll() {
        const response = await fetch(Apis.movies.url);
        const result = await response.json();
        const films = result.results;

        return films.map(film => ({ title: film.title, id: film.episode_id }));
    }
}

export default MoviesService;