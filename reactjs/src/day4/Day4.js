import { createContext } from "react";
import useToggle from "./hooks/useToggle";
import Hooks from "./Hooks";
import Body from "./Body";

// Create React Context
export const ThemeContext = createContext("light");

const Day4 = () => {
  const [theme, toggleTheme] = useToggle("light", "dark");

  return (
    // Provide value
    <ThemeContext.Provider value={theme}>
      <Hooks />
      <Body />
      <button onClick={toggleTheme}>Toggle Theme</button>
    </ThemeContext.Provider>
  );
};

export default Day4;
