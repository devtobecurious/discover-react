import { useContext } from "react"
import { PlayerContext } from "../AvecContext"

export const ChangeContext = () => {
    const context = useContext(PlayerContext);
    
    const changeUser = () => {
        if (context.setCurrentUser) {
            context.setCurrentUser({nom: 'plouf'});
        }
    }

    return (
        <>
            <button onClick={changeUser}>Change state of {context.currentUser?.nom}</button>
        </>
    )
}