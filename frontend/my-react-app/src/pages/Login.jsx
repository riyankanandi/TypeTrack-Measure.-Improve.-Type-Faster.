import { useNavigate } from "react-router-dom";
import { apiRequest } from "../services/api";
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
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>
      <input name="email" type="email" required />
      <input name="password" type="password" required />
      <button>Login</button>
    </form>
  );
}
