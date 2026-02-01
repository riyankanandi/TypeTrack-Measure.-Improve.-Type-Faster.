import { useNavigate } from "react-router-dom";
import { apiRequest } from "../services/api";
import AuthWrapper from "../components/AuthWrapper";
import '../App.css';
export default function Login({ setIsAuth }) {
    const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;
try {
    await apiRequest("/auth/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
    });

    setIsAuth(true);   // auth is now cookie-based
    navigate("/");

  } catch (err) {
    alert("Login failed");
  }
};
  //   const res = await apiRequest("/auth/login", {
  //     method: "POST",
  //     body: JSON.stringify({ email, password }),
  //   });

  //   if (res.token) {
  //     localStorage.setItem("token", res.token);
  //     setIsAuth(true);               // ✅ triggers re-render
  //    navigate("/");
  //   } else {
  //     alert("Login failed");
  //   }
  // };

  return (
     <AuthWrapper title="Login">
    <form onSubmit={handleSubmit} className="auth-form">
      {/* <h2>Login</h2> */}
       <div className="form-row">
          <label htmlFor="email">Email : </label>
      <input name="email" type="email" required />
      </div>
      <div className="form-row">
          <label htmlFor="password">Password :</label>
      <input name="password" type="password" required />
      </div>
      <button className="button_cust">Login</button>
    </form>
    </AuthWrapper>
  );
}
