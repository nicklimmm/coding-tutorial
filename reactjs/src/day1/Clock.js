const Clock = () => {
  return <h1>{new Date().toUTCString()}</h1>;
};

export default Clock;
