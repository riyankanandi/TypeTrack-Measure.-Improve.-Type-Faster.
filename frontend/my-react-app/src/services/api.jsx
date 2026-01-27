const API_URL = "http://localhost:5000/api"; // backend port

export async function apiRequest(endpoint, options = {}) {
  // const token = localStorage.getItem("token");

  // const headers = {
  //   "Content-Type": "application/json",
  //   ...(token && { Authorization: `Bearer ${token}` }),
  //   ...options.headers,
  // };

  // const res = await fetch(`${API_URL}${endpoint}`, {
  //   ...options,
  //   headers,
  // });
 const res = await fetch(`${API_URL}${endpoint}`, {
    credentials: "include", // 🔥 REQUIRED FOR COOKIES
    headers: {
      "Content-Type": "application/json",
      ...(options.headers || {}),
    },
    ...options,
  });
  //   if (res.status === 401) {
  //   // token expired or invalid
  //   window.location.href = "/login";
  //   throw new Error("Unauthorized");
  // }
    if (!res.ok) {
    throw new Error(`HTTP ${res.status}`);
  }
  return res.json();
}

// const API_URL = "http://localhost:5000/api/tests";

// // save typing test
// export const saveTest = async (data) => {
//   const res = await fetch(API_URL, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(data),
//   });

//   return res.json();
// };

// // get all tests
// export const getAllTests = async () => {
//   const res = await fetch(API_URL);
//   return res.json();
// };
