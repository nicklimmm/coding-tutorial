import Greetings from "./Greetings";
import Clock from "./Clock";
import Counter from "./Counter";

const Day1 = () => {
  return (
    <div>
      <Clock />
      <Greetings name="John" age={20} />
      <Greetings name="Helen" age={22} />
      <Greetings name="Anne" age={23} />
      <hr />
      <Counter />
      <Counter />
    </div>
  );
};

export default Day1;
