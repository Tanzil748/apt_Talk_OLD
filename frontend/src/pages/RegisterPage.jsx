import { useState } from "react";
import css from "../styles/register.module.css";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

const RegisterPage = () => {
  const [userInputs, setUserInputs] = useState({
    userName: "",
    email: "",
    userPassword: "",
  });
  const [errors, setErrors] = useState(null);

  const navigate = useNavigate();

  // handle form submission
  const registerHandler = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:4500/auth/register", userInputs);
      navigate("/login");
    } catch (error) {
      setErrors(error.response.data);
    }
  };

  // handle user input
  const changeHandler = (e) => {
    setUserInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className={css.backdrop}>
      <form onSubmit={registerHandler} className={css.form_container}>
        <h2 style={{ textAlign: "center", paddingBottom: "10px" }}>REGISTER</h2>
        <hr />
        <div style={{ color: "red", fontSize: "0.8rem", textAlign: "center" }}>
          {errors && errors}
        </div>
        <label className={css.labelStyle}>Username:</label>
        <input
          name="userName"
          type="text"
          placeholder="Enter a username..."
          className={css.inputStyle}
          onChange={changeHandler}
        />
        <label className={css.labelStyle}>Email:</label>
        <input
          name="email"
          type="email"
          placeholder="Enter your email..."
          className={css.inputStyle}
          onChange={changeHandler}
        />

        <label className={css.labelStyle}>Password:</label>
        <input
          name="userPassword"
          type="password"
          placeholder="Enter password..."
          className={css.inputStyle}
          onChange={changeHandler}
        />

        <button
          style={{ marginTop: "10px", padding: "8px" }}
          className={css.btn}
        >
          Create Account
        </button>
        <div style={{ fontSize: "14px", textAlign: "center" }}>
          <span style={{ marginRight: "5px" }}>Already have an account?</span>
          <Link to="/login">Login</Link>
        </div>
      </form>
    </div>
  );
};

export default RegisterPage;
