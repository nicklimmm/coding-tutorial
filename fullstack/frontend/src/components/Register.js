import { useState } from "react";
import { Formik, Field, Form } from "formik";
import { useHistory } from "react-router-dom";
import axios from "axios";

const Register = () => {
  const history = useHistory();
  const [response, setResponse] = useState("");

  const createUser = async (values) => {
    const res = await axios.post("http://127.0.0.1:8000/users", values);
    setResponse(res.data);
  };

  return (
    <div>
      <h2>Create User</h2>
      <Formik
        initialValues={{ name: "", email: "", password: "" }}
        onSubmit={(values) => {
          createUser(values);
          history.push("/login");
        }}
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
      {response}
    </div>
  );
};

export default Register;
