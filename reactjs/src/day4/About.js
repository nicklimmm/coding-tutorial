import { useContext } from "react";
import { ThemeContext } from "./Day4";
import "./day4.css";

const About = () => {
  const theme = useContext(ThemeContext);

  return (
    <div className={theme}>
      <h1 className={theme}>About</h1>
      <p className={theme}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam fuga
        culpa magni nam esse quasi repellendus saepe tenetur ratione inventore!
      </p>
    </div>
  );
};

export default About;
