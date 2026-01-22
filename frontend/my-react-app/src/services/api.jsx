const API_URL = "http://localhost:5000/api/tests";

// save typing test
export const saveTest = async (data) => {
  const res = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  return res.json();
};

// get all tests
export const getAllTests = async () => {
  const res = await fetch(API_URL);
  return res.json();
};
