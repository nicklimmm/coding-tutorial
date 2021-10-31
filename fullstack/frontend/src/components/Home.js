import { useState } from "react";
import { Formik, Field, Form } from "formik";
import axios from "axios";

const Home = () => {
  const [response, setResponse] = useState("");

  const getUserById = async (values) => {
    const res = await axios.get(`http://127.0.0.1:8000/users/${values.id}`);
    setResponse(res.data);
  };

  const getAllUsers = async () => {
    const res = await axios.get(`http://127.0.0.1:8000/users`);
    setResponse(res.data);
  };
  return (
    <div>
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
      {response}
    </div>
  );
};

export default Home;
