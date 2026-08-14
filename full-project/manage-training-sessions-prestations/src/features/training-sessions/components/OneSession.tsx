import type { TrainingSession } from "../models/training-session";

export type OneSessionProps = {
  item: TrainingSession;
};

const formatDate = (d: Date | string) =>
  new Date(d).toLocaleDateString("fr-FR", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });

const typeBadge: Record<string, { cls: string; label: string }> = {
  presta: { cls: "badge badge-info", label: "Prestation" },
  final: { cls: "badge badge-warning", label: "Client final" },
};

export const OneSession = ({ item }: OneSessionProps) => {
  const badge = typeBadge[item.type] ?? { cls: "badge badge-info", label: item.type };

  return (
    <div className="session-card">
      <div className="session-dates">
        <div className="session-date-range">
          <span className="session-date-label">Début</span>
          <span className="session-date-value">{formatDate(item.beginDate)}</span>
        </div>
        <span className="session-arrow">→</span>
        <div className="session-date-range">
          <span className="session-date-label">Fin</span>
          <span className="session-date-value">{formatDate(item.endDate)}</span>
        </div>
      </div>
      <span className={badge.cls}>{badge.label}</span>
    </div>
  );
};