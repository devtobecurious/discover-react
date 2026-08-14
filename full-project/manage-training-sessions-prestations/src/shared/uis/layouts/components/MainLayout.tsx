import { useContext } from "react";
import { MainMenu } from "../../menus/MainMenu";
import { ThemeContext } from "../../context/theme-context";

export type MainLayoutProps = React.PropsWithChildren;

export const MainLayout = ({ children }: MainLayoutProps) => {
  const { bgColor } = useContext(ThemeContext);

  return (
    <div className={`app-shell ${bgColor}`}>
      <header className="navbar">
        <div className="navbar-inner container">
          <MainMenu />
        </div>
      </header>
      <main className="main-content">
        <div className="container">
          {children}
        </div>
      </main>
      <footer className="footer">
        <div className="container">
          © {new Date().getFullYear()} TrainManager — Gestion des sessions de formation
        </div>
      </footer>
    </div>
  );
};
