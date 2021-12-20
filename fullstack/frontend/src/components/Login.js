import { useState } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { useHistory } from "react-router-dom";
import { useAuth } from "../auth";
import * as Yup from "yup";

const Login = () => {
  const [response, setResponse] = useState("");
  const history = useHistory();
  const { login } = useAuth();

  return (
    <div>
      <h2>Login</h2>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={Yup.object({
          email: Yup.string().email("Invalid email").required("Required"),
          password: Yup.string().required("Required"),
        })}
        onSubmit={async (values) => {
          try {
            await login(values.email, values.password);
            history.push("/");
          } catch (err) {
            console.log(JSON.stringify(err, null, 2));
            setResponse(err.response.data);
          }
        }}
      >
        <Form>
          <label htmlFor="email">Email</label>
          <Field name="email" type="text" />
          <ErrorMessage name="email" />

          <br />

          <label htmlFor="password">Password</label>
          <Field name="password" type="password" />
          <ErrorMessage name="password" />
          <br />

          <button type="submit">Login</button>
        </Form>
      </Formik>
      {response}
    </div>
  );
};

export default Login;
