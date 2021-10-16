import { useContext } from "react";
import { ThemeContext } from "./Day4";
import About from "./About";

const Body = () => {
  // Consume context value
  const theme = useContext(ThemeContext);

  return (
    <div>
      <h2>THEME: {theme}</h2>
      <About />
    </div>
  );
};

export default Body;
