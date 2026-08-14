import { useState, type PropsWithChildren } from "react";
import { ThemeContext } from "./theme-context";


export const ThemeContextProvider = ({children}: PropsWithChildren) => {
    const [bgColor, setBgColor] = useState('white');

    console.info('Provider', bgColor)

    return (
        <>
    
            <ThemeContext value={{ bgColor, setBgColor }}>
                {children}
            </ThemeContext>
        </>
    )
}