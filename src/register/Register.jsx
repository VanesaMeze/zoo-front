import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../service/usersService";

const Register = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
    emailVerified: true,
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    registerUser(user.username, user.email, user.password, user.emailVerified);
    setUser({
      username: "",
      email: "",
      password: "",
      emailVerified: true,
    });
  };

  const handelInputChange = (event) => {
    const { name, value } = event.target;
    setUser((prevState) => {
      return { ...prevState, [name]: value };
    });
  };

  return (
    <div>
      <br />
      <br />
      <form
        onSubmit={(e) => {
          handleSubmit(e);
          navigate("/login");
        }}
        className="container"
        style={{ width: "500px", alignItems: "center" }}
      >
        <h1 className="h3 mb-3 fw-normal">Register</h1>
        <div className="form-floating">
          <input
            type="text"
            className="form-control"
            placeholder="Password"
            name="username"
            value={user.username}
            onChange={handelInputChange}
          />
          <label htmlFor="floatingPassword">Username</label>
        </div>

        <div className="form-floating">
          <input
            type="email"
            className="form-control"
            id="floatingInput"
            placeholder="name@example.com"
            name="email"
            value={user.email}
            onChange={handelInputChange}
          />
          <label htmlFor="floatingInput">Email address</label>
        </div>

        <div className="form-floating">
          <input
            type="password"
            className="form-control"
            id="floatingPassword"
            placeholder="Password"
            value={user.password}
            name="password"
            onChange={handelInputChange}
          />
          <label htmlFor="floatingPassword">Password</label>
        </div>
        <button className="btn button1 w-100 py-2" type="submit">
          Confirm
        </button>
      </form>
    </div>
  );
};

export default Register;
