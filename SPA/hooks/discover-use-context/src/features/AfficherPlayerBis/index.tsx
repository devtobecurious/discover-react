import { useContext } from "react"
import { PlayerContext } from "../AvecContext"

export const AfficherPlayerBis = () => {
    const player = useContext(PlayerContext)
    return (
        <>
            <h2>{player.currentUser?.nom}</h2>
        </>
    )
}