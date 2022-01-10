import { useState } from "react";
import { Formik, Field, Form } from "formik";
import api from "../api";

const Home = () => {
  const [response, setResponse] = useState([]);

  const getUsers = async ({ email }) => {
    const res = await api.get(`/users?email=${email}`);
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
      <table>
        <tr>
          <th>Email</th>
          <th>Name</th>
          <th>Created At</th>
        </tr>
        {response.map((user) => (
          <tr>
            <td>{user.email}</td>
            <td>{user.name}</td>
            <td>{user.createdAt}</td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default Home;
