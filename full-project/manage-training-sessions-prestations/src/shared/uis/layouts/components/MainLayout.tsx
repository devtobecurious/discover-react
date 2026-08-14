import { useContext } from "react";
import { MainMenu } from "../../menus/MainMenu";
import { ThemeContext } from "../../context/theme-context";

export type MainLayoutProps = React.PropsWithChildren;

export const MainLayout = ({ children }: MainLayoutProps) => {
  const { bgColor } = useContext(ThemeContext);

  return (
    <>
      <div className={bgColor}>
        <div id="header">
          <MainMenu />
        </div>
        <div>{children}</div>
        <div id="footer"></div>
      </div>
    </>
  );
};
