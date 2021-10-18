// Using Formik Context
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

const Login = () => {
  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      validationSchema={Yup.object({
        email: Yup.string().email("Invalid email").required("Required"),
        password: Yup.string()
          .min(8, "Password must be 8 characters or more")
          .required("Required"),
      })}
      onSubmit={(values) => {
        alert(JSON.stringify(values, null, 2));
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
  );
};

export default Login;
