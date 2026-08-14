import { NavLink } from "react-router";
import { ChangeTheme } from "./ChangeTheme";

export const MainMenu = () => {
  return (
    <>
      <div className="navbar-brand">
        <div className="brand-logo">📚</div>
        <span>TrainManager</span>
      </div>
      <nav className="navbar-nav">
        <NavLink to="/">Accueil</NavLink>
        <NavLink to="/sessions/">Sessions</NavLink>
        <NavLink to="/sessions/add">Nouvelle session</NavLink>
      </nav>
      <div className="navbar-actions">
        <ChangeTheme />
      </div>
    </>
  );
};
