import { useState } from "react";

const PostPage = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = () => {
    setIsLoggedIn(true);
  };

  const logout = () => {
    setIsLoggedIn(false);
  };

  return (
    <div>
      {/* Conditional Rendering */}
      {isLoggedIn ? (
        <>
          <h2>Welcome!</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse
            incidunt obcaecati quaerat at dicta maxime excepturi mollitia, omnis
            soluta culpa earum enim. Ex explicabo recusandae placeat quis, natus
            veritatis quisquam facere itaque magni ratione facilis vero amet cum
            nihil cumque fugit optio? Adipisci delectus reiciendis possimus vero
            illum similique ex.
          </p>
          <button onClick={logout}>Logout</button>
        </>
      ) : (
        <>
          <h2>Please Login</h2>
          <button onClick={login}>Login</button>
        </>
      )}
    </div>
  );
};

export default PostPage;
