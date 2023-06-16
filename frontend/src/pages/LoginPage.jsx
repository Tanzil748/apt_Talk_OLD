import { useContext, useState } from "react";
import css from "../styles/login.module.css";
import { useNavigate, Link } from "react-router-dom";
import AuthContext from "../context/AuthContext";

const LoginPage = () => {
  const { login } = useContext(AuthContext);

  const [userInputs, setUserInputs] = useState({
    email: "",
    userPassword: "",
  });
  const [errors, setErrors] = useState(null);
  const navigate = useNavigate();

  const loginHandler = async (e) => {
    e.preventDefault();
    try {
      await login(userInputs);
      navigate("/");
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
      <form onSubmit={loginHandler} className={css.form_container}>
        <h2 style={{ textAlign: "center", paddingBottom: "10px" }}>LOGIN</h2>
        <hr />
        <div style={{ color: "red", fontSize: "0.8rem", textAlign: "center" }}>
          {errors && errors}
        </div>
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
          Log In
        </button>
        <div style={{ fontSize: "14px", textAlign: "center" }}>
          <span style={{ marginRight: "5px" }}>Don't have an account?</span>
          <Link to="/register">Register Now</Link>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
