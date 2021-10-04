import DoubleCounter from "./DoubleCounter";
import PostPage from "./PostPage";
import Greetings from "../day1/Greetings";
import DataForm from "./DataForm";

const people = [
  ["John", 20],
  ["Amy", 19],
  ["Dirk", 22],
  ["Lily", 21],
];

const Day2 = () => {
  return (
    <div>
      <DoubleCounter />
      <PostPage />

      {/* Working with Lists and Keys */}
      {people.map((value, index) => (
        <Greetings key={index} name={value[0]} age={value[1]} />
      ))}

      <DataForm />
    </div>
  );
};

export default Day2;
