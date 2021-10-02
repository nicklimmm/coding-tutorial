const Greetings = (props) => {
  return (
    <div>
      Greetings, {props.name}. Nice to meet you! I heard that you are{" "}
      {props.age} years old.
    </div>
  );
};

export default Greetings;
