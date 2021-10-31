import { useState } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { useHistory } from "react-router-dom";
import { useAuth } from "../auth";
import axios from "axios";
import * as Yup from "yup";

const Login = () => {
  const [response, setResponse] = useState("");
  const history = useHistory();
  const { auth, setAuth } = useAuth();

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
          const res = await axios.post("http://127.0.0.1:8000/login", values);
          if (res.data.success) {
            setAuth({
              name: res.data.name,
              email: values.email,
              isLoggedIn: true,
            });
            // Go to home page
            history.push("/");
          } else {
            setResponse("Login Unsuccessful");
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
