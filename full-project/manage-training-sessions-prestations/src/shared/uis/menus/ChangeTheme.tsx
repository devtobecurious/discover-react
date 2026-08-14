import { useContext, type ChangeEvent } from "react";
import { ThemeContext } from "../context/theme-context";

export const ChangeTheme = () => {
  const { bgColor, setBgColor } = useContext(ThemeContext);

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    if (setBgColor) setBgColor(e.target.value);
  };

  return (
    <div className="theme-select">
      <span>🌙</span>
      <select onChange={handleChange} value={bgColor}>
        <option value="white">Clair</option>
        <option value="dark">Sombre</option>
      </select>
    </div>
  );
};
