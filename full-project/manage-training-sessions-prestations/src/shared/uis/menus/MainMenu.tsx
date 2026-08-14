import { NavLink } from "react-router";
import { ChangeTheme } from "./ChangeTheme";

export const MainMenu = () => {


  return (
    <>
      <div className="container">
        <div>
          <nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/sessions/">Liste des sessions</NavLink>
            <NavLink to="/sessions/add">Nouvelle session</NavLink>
          </nav>
        </div>
        <div>
          <ChangeTheme />
        </div>
      </div>
    </>
  );
};
