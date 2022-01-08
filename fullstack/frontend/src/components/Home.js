import { useState } from "react";
import { Formik, Field, Form } from "formik";
import axios from "axios";
import { useAuth } from "../auth";

const Home = () => {
  const [response, setResponse] = useState([]);
  const { auth } = useAuth();

  const getUsers = async ({ email }) => {
    console.log(auth.token);
    const res = await axios.get(`http://127.0.0.1:8000/users?email=${email}`, {
      headers: {
        authorization: `Bearer ${auth.token}`,
      },
    });
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
