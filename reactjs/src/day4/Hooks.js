import useToggle from "./hooks/useToggle";

const Hooks = () => {
  // Hooks are not allowed to be inside loops, conditions, or nested functions

  // e.g.
  //   for (let i = 0; i < 10; i++) {
  //     const [state, setState] = useState(0);
  //   }

  //   If we want to run an effect conditionally, we can put the condition in our hook

  const [bulbState, toggleBulb] = useToggle("on", "off");

  return (
    <div>
      <h1>Bulb is {bulbState}</h1>
      <button onClick={toggleBulb}>Toggle</button>
    </div>
  );
};

export default Hooks;
