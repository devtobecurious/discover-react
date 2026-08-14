import { useAppSelector } from "@/chore/store/hooks";
import { selectAll } from "../store/sessions.selectors";
import { OneSession } from "./OneSession";

export const ListSessions = () => {
  const items = useAppSelector(selectAll);

  if (items.length === 0) {
    return (
      <div className="state-empty">
        <div className="state-icon">📋</div>
        <span>Aucune session prévue</span>
      </div>
    );
  }

  return (
    <div className="session-list">
      {items.map(item => <OneSession key={item.id} item={item} />)}
    </div>
  );
};