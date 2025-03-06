import { useEffect, useState } from "react"
import { Movie } from "../models"
import { getAllMovies } from "../services"

export const ListMovies = () => {
    console.info('ListMovies')
    const [movies, setMovies] = useState<Movie[]>([])

    const moviesDivs = movies.map(item => (<div key={item.title}>{item.title}</div>))

    useEffect(() => {
        const callMovies = async () => {
            const data = await getAllMovies()
            setMovies(data)
        }
        callMovies()
    }, [])


    return <>
        
            {moviesDivs}
        
    </>
}