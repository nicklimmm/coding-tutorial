// Using useFormik hook
import { useFormik } from "formik";
import * as Yup from "yup";

const SignUp = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email").required("Required"),
      password: Yup.string()
        .min(8, "Password must be 8 characters or more")
        .required("Required"),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="email">Email</label>
      <input
        type="email"
        name="email"
        {...formik.getFieldProps("email")} // to reduce code duplication
        // id="email"
        // onChange={formik.handleChange}
        // onBlur={formik.handleBlur} // to update formik.touched
        // value={formik.values.email}
      />

      {formik.touched.email && formik.errors.email ? (
        <div style={{ color: "red" }}>{formik.errors.email}</div>
      ) : null}

      <br />

      <label htmlFor="password">Password</label>
      <input
        type="password"
        name="password"
        {...formik.getFieldProps("password")}
        // id="password"
        // onChange={formik.handleChange}
        // onBlur={formik.handleBlur}
        // value={formik.values.password}
      />

      {formik.touched.password && formik.errors.password ? (
        <div style={{ color: "red" }}>{formik.errors.password}</div>
      ) : null}
      <br />

      <button type="submit">Sign Up</button>
    </form>
  );
};

export default SignUp;
