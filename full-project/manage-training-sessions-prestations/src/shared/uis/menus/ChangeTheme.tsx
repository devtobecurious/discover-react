import { useContext, type ChangeEvent } from "react";
import { ThemeContext } from "../context/theme-context";

export const ChangeTheme = () => {
    const {bgColor, setBgColor} = useContext(ThemeContext);

  const changeFromCombo = (e: ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    console.info(setBgColor)
    if(setBgColor) {
        setBgColor(value);
    }
  };

  return (
    <>
      Theme :
      <select onChange={changeFromCombo}>
        <option selected={bgColor === 'dark'} value="dark">Dark</option>
        <option selected={bgColor === 'white'} value="white">White</option>
      </select>
    </>
  );
};
