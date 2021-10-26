import { useEffect, useState } from "react";
import { Formik, Field, Form } from "formik";
import axios from "axios";
import Login from "./components/Login";

function App() {
  const [response, setResponse] = useState("");

  const createUser = async (values) => {
    const res = await axios.post("http://127.0.0.1:8000/users", values);
    setResponse(res.data);
  };

  const getUserById = async (values) => {
    const res = await axios.get(`http://127.0.0.1:8000/users/${values.id}`);
    setResponse(res.data);
  };

  const getAllUsers = async () => {
    const res = await axios.get(`http://127.0.0.1:8000/users`);
    setResponse(res.data);
  };

  useEffect(() => {
    // createUser();
  }, []);

  return (
    <div>
      <div>
        <h2>Create User</h2>
        <Formik
          initialValues={{ name: "", email: "", password: "" }}
          onSubmit={(values) => createUser(values)}
        >
          <Form>
            <label htmlFor="name">Name</label>
            <Field name="name" type="text" />
            <br />
            <label htmlFor="email">Email</label>
            <Field name="email" type="email" />
            <br />
            <label htmlFor="password">Password</label>
            <Field name="password" type="password" />
            <br />
            <button type="submit">Create!</button>
          </Form>
        </Formik>
      </div>
      <div>
        <h2>Get User By Id</h2>
        <Formik
          initialValues={{ id: 1 }}
          onSubmit={(values) => getUserById(values)}
        >
          <Form>
            <label htmlFor="id">Id</label>
            <Field name="id" type="number" />
            <br />
            <button type="submit">Get!</button>
          </Form>
        </Formik>
      </div>
      <div>
        <h2>Get All Users</h2>
        <button onClick={getAllUsers}>Get All!</button>
      </div>
      <div>
        <h2>Login</h2>
        <Login />
      </div>
      {response}
    </div>
  );
}

export default App;
