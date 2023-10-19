import { useContext } from "react"
import { PlayerContext } from "../AvecContext"

export const AfficherContextPlayer = () => {
    const contextPlayer = useContext(PlayerContext);

    return (
        <>
            Player {contextPlayer.currentUser?.nom}
        </>
    )
}