import { createContext } from "react";
import { Theme } from "types/theme";

const ThemeContext = createContext<Theme>('light');
export const { Provider } = ThemeContext;
export default ThemeContext;

