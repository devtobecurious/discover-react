import { createContext } from "react";

export type ThemeType = {
    bgColor: string,
    setBgColor ?: React.Dispatch<React.SetStateAction<string>>
}

export const ThemeContext = createContext<ThemeType>({bgColor: 'white'});