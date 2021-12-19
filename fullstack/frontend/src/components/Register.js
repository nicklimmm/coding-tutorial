import { useState } from "react";
import { Formik, Field, Form } from "formik";
import { useHistory } from "react-router-dom";
import axios from "axios";

const Register = () => {
  const history = useHistory();
  const [response, setResponse] = useState("");

  return (
    <div>
      <h2>Create User</h2>
      <Formik
        initialValues={{ name: "", email: "", password: "" }}
        onSubmit={async (values) => {
          try {
            const res = await axios.post(
              "http://127.0.0.1:8000/auth/register",
              values
            );
            setResponse(res.data);
            history.push("/login");
          } catch (err) {
            console.log(JSON.stringify(err, null, 2));
            setResponse(err.response.data);
          }
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
