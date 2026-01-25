// import { useEffect, useState } from "react";

// function History() {
//   const [history, setHistory] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");

//   useEffect(() => {
//     const fetchHistory = async () => {
//       try {
//         const res = await fetch("http://localhost:5000/api/history");

//         if (!res.ok) {
//           throw new Error("Failed to fetch history");
//         }

//         const data = await res.json();
//         setHistory(data);
//       } catch (err) {
//         setError(err.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchHistory();
//   }, []);

//   if (loading) return <p style={{ textAlign: "center" }}>Loading history...</p>;
//   if (error) return <p style={{ textAlign: "center" }}>{error}</p>;

//   return (
//     <div className="container" style={{ textAlign: "center" }}>
//       <h2 style={{ color: "#B983FF" }}>Typing History</h2>

//       {history.length === 0 ? (
//         <p>No history available.</p>
//       ) : (
//         <table
//           style={{
//             margin: "20px auto",
//             borderCollapse: "collapse",
//             width: "90%",
//           }}
//         >
//           <thead>
//             <tr>
//               <th style={thStyle}>Date</th>
//               <th style={thStyle}>WPM</th>
//               <th style={thStyle}>Accuracy (%)</th>
              
//             </tr>
//           </thead>
//           <tbody>
//             {history.map((item) => (
//               <tr key={item.id}>
//                 <td style={tdStyle}>
//                   {new Date(item.created_at).toLocaleString()}
//                 </td>
//                 <td style={tdStyle}>{item.wpm}</td>
//                 <td style={tdStyle}>{item.accuracy}</td>
                
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       )}
//     </div>
//   );
// }

// const thStyle = {
//   border: "1px solid #ccc",
//   padding: "10px",
// };

// const tdStyle = {
//   border: "1px solid #ccc",
//   padding: "10px",
// };

// export default History;

import { useEffect, useState } from "react";
import { apiRequest } from "../services/api";

function History() {
  const [history, setHistory] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchHistory = async () => {
      try {
        const data = await apiRequest("/scores");
        setHistory(data);
      } catch (err) {
        setError("Failed to fetch history");
      } finally {
        setLoading(false);
      }
    };

    fetchHistory();
  }, []);

  if (loading) return <p style={{ textAlign: "center" }}>Loading history...</p>;
  if (error) return <p style={{ textAlign: "center" }}>{error}</p>;

  return (
    <div style={{ textAlign: "center" }}>
      <h2 style={{ color: "#B983FF" }}>Typing History</h2>

      {history.length === 0 ? (
        <p>No history available.</p>
      ) : (
        <table
          style={{
            margin: "20px auto",
            borderCollapse: "collapse",
            width: "90%",
          }}
        >
          <thead>
            <tr>
              <th style={thStyle}>Date</th>
              <th style={thStyle}>WPM</th>
              <th style={thStyle}>Accuracy (%)</th>
            </tr>
          </thead>
          <tbody>
            {history.map((item) => (
              <tr key={item.id}>
                <td style={tdStyle}>
                  {new Date(item.created_at).toLocaleString()}
                </td>
                <td style={tdStyle}>{item.wpm}</td>
                <td style={tdStyle}>{item.accuracy}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

const thStyle = {
  border: "1px solid #ccc",
  padding: "10px",
};

const tdStyle = {
  border: "1px solid #ccc",
  padding: "10px",
};

export default History;
