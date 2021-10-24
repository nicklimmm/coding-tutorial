import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [response, setResponse] = useState("");

  const createUser = async () => {
    const res = await axios.post("http://127.0.0.1:8000/users", {
      name: "John",
      password: "12345678",
      email: "john@gmail.com",
    });

    setResponse(res.data);
  };

  useEffect(() => {
    createUser();
  }, []);

  return <div>{response}</div>;
}

export default App;
