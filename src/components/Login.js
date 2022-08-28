import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { validate } from "./validateL";
import styles from "./login.module.css";

const Login = () => {
  const [data, setData] = useState({
    userName: "",
    password: "",
    checked: false,
  });
  const [errors, setErrors] = useState({});
  const changeHandler = (event) => {
    setData({ ...data, [event.target.name]: event.target.value });
  };
  const { userName, password } = data;
  useEffect(() => {
    setErrors(validate(data), {
      userName: true,
      password: true,
    });
  }, [data]);
  const submitHandler = (event) => {
    event.preventDefault();
    data.checked = true;
  };
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Login</h2>
      <form onSubmit={submitHandler}>
        <div className={styles.input}>
          <input
            type="text"
            name="userName"
            value={userName}
            onChange={changeHandler}
            placeholder="User Name"
            autoFocus
          />
          <span>{errors.userName && <p>{errors.userName}</p>}</span>
        </div>

        <div className={styles.input}>
          <input
            type="password"
            name="password"
            value={password}
            onChange={changeHandler}
            placeholder="Password"
          />
          <span>{errors.password && <p>{errors.password}</p>}</span>
        </div>

        <div className={styles.buttons}>
          <button type="submit">Login</button>
          <Link to="/signup">Sign Up</Link>
          <Link to="/home">Back</Link>
        </div>
        <div className={styles.msg}>
          <span>
            {data.checked && <p>Welcom to Light Web {data.userName}</p>}
          </span>
          <span>{data.checked === false && <p>Data is not valid</p>}</span>
        </div>
      </form>
    </div>
  );
};

export default Login;
