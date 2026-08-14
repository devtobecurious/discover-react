import { useAppSelector } from "@/chore/store/hooks"
import { selectAll } from "../store/sessions.selectors"
import { OneSession } from "./OneSession"

export const ListSessions = () => {
    const items = useAppSelector(selectAll)
    const divList = items.map(item => <OneSession key={item.id} item={item} /> )

    return (
        <>
            {divList.length === 0 && <i>Aucune session prévue</i>}
            {divList.length > 0 && divList}
        </>
    )
}