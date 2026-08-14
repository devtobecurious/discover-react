import { Link } from "react-router";

export const Home = () => {
  return (
    <div className="hero">
      <div className="hero-eyebrow">✦ Plateforme RH</div>
      <h1 className="hero-title">Gestion des sessions<br />de formation</h1>
      <p className="hero-subtitle">
        Planifiez, suivez et gérez vos sessions de formation et prestations en toute simplicité.
      </p>
      <Link to="/sessions/" className="hero-cta">
        Voir les sessions →
      </Link>
      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-label">Module actif</div>
          <div className="stat-value text-sm">Sessions</div>
        </div>
        <div className="stat-card">
          <div className="stat-label">Types de session</div>
          <div className="stat-value text-sm">Presta · Final</div>
        </div>
        <div className="stat-card">
          <div className="stat-label">Accès rapide</div>
          <div className="stat-value text-sm">
            <Link to="/sessions/add">+ Nouvelle</Link>
          </div>
        </div>
      </div>
    </div>
  );
};