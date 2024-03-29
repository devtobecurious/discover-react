import { Apis } from "../../../config/Apis";

export class MoviesService {
    async getAll() {
        const response = await fetch(Apis.movies.url);

        if (! response.ok) {
            throw new Error('Fail');
        }

        const result = await response.json();
        const films = result.results;

        return films.map(film => ({ title: film.title, id: film.episode_id }));
    }

    async getOne(id) {
        const response = await fetch(`${Apis.movies.url}/${id}`);

        if (! response.ok) {
            throw new Error('Fail');
        }

        const result = await response.json();
        const film = result.result;

        return film;
    }
}

export default MoviesService;