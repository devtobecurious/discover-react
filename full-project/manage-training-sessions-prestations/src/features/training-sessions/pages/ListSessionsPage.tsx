import { useAppDispatch, useAppSelector } from "@/chore/store/hooks";
import { ListSessions } from "../components/ListSessions";
import { fetchSessions } from "../store/sessions.thunks";
import { isLoading, selectCount } from "../store/sessions.selectors";
import { useEffect } from "react";
import { Link } from "react-router";

export const ListSessionsPage = () => {
  const dispatch = useAppDispatch();
  const isLoadingData = useAppSelector(isLoading);
  const count = useAppSelector(selectCount);

  useEffect(() => {
    dispatch(fetchSessions());
  }, [dispatch]);

  return (
    <>
      <div className="page-header">
        <div>
          <h1>Sessions de formation</h1>
          {!isLoadingData && (
            <p className="subtitle">
              {count} session{count !== 1 ? 's' : ''} au total
            </p>
          )}
        </div>
        <Link to="/sessions/add" className="btn">+ Nouvelle session</Link>
      </div>
      {isLoadingData && (
        <div className="state-loading">
          <div className="spinner" />
          <span>Chargement en cours…</span>
        </div>
      )}
      {!isLoadingData && <ListSessions />}
    </>
  );
};