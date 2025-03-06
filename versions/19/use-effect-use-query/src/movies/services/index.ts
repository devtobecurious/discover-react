import { Movie } from "../models"

export const getAllMovies = () => {
    return new Promise<Movie[]>(resolve => {
        const table: Movie[] = [
            {title: 'SW 01', description: 'bla'},
            {title: 'SW 02', description: 'bl1'}
        ]

        setTimeout(() => {
            resolve(table)
        }, 1500)
    })
}
