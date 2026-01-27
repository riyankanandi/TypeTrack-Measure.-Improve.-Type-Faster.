
import { apiRequest } from "../services/api";
import { useNavigate } from "react-router-dom";

export default function Signup({ setIsAuth }) {
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
 try {
    // 1️⃣ Register
    await apiRequest("/auth/register", {
      method: "POST",
      body: JSON.stringify({ email, password }),
    });

    // 2️⃣ Login immediately (cookie gets set)
    await apiRequest("/auth/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
    });

    setIsAuth(true);
    navigate("/");

  } catch (err) {
    alert("Signup failed");
  }
};
    // 1️⃣ Register
  //   const res = await apiRequest("/auth/register", {
  //     method: "POST",
  //     body: JSON.stringify({ email, password }),
  //   });

  //   if (res.message === "Registered successfully") {
  //     // 2️⃣ Login immediately
  //     const loginRes = await apiRequest("/auth/login", {
  //       method: "POST",
  //       body: JSON.stringify({ email, password }),
  //     });

  //     if (loginRes.token) {
  //       localStorage.setItem("token", loginRes.token);
  //        setIsAuth(true);
  //       navigate("/"); // ✅ Home.jsx
  //     } else {
  //       alert("Login after signup failed");
  //     }
  //   } else {
  //     alert(res.message || "Signup failed");
  //   }
  // };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Signup</h2>
      <input name="email" type="email" required />
      <input name="password" type="password" required />
      <button>Signup</button>
    </form>
  );
}
