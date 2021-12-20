import { useState } from "react";
import { Formik, Field, Form } from "formik";
import { useHistory } from "react-router-dom";
import { useAuth } from "../auth";

const Register = () => {
  const history = useHistory();
  const [response, setResponse] = useState("");
  const { register } = useAuth();

  return (
    <div>
      <h2>Create User</h2>
      <Formik
        initialValues={{ name: "", email: "", password: "" }}
        onSubmit={async (values) => {
          try {
            await register(values.name, values.email, values.password);
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
