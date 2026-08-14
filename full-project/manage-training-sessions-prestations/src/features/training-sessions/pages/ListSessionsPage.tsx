import { useAppDispatch, useAppSelector } from "@/chore/store/hooks"
import { ListSessions } from "../components/ListSessions"
import { fetchSessions } from "../store/sessions.thunks"
import { isLoading } from "../store/sessions.selectors"
import { useEffect } from "react"

export const ListSessionsPage = () => {
    const dispatch = useAppDispatch()
    const isLoadingData = useAppSelector(isLoading)

    useEffect(() => {
        dispatch(fetchSessions())
    }, [dispatch])

    return (
        <>
            {isLoadingData && <i>Chargement en cours</i>}
            {!isLoadingData && <ListSessions />}
        </>
    )
}