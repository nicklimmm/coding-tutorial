import { useState } from "react";
import { Formik, Field, Form } from "formik";
import axios from "axios";

const Home = () => {
  const [response, setResponse] = useState("");

  const getUsers = async ({ email }) => {
    const res = await axios.get(`http://127.0.0.1:8000/users?email=${email}`);
    setResponse(res.data);
  };

  return (
    <div>
      <div>
        <h2>Get Users</h2>
        <Formik
          initialValues={{ email: "" }}
          onSubmit={(values) => getUsers(values)}
        >
          <Form>
            <label htmlFor="email">Email</label>
            <Field name="email" type="text" />
            <br />
            <button type="submit">Get!</button>
          </Form>
        </Formik>
      </div>
      {response}
    </div>
  );
};

export default Home;
