import { useEffect, useState } from "react";

function App() {
  const [students, setStudents] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchStudents() {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );

        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }

        const data = await response.json();

        const groupNames = [
          "Shivam Bind",
          "Manu Negi",
          "Sanidhya",
          "Ayan",
          "Sarvesh",
          "Rishav",
          "Rahul",
          "Aman",
          "Ankit",
          "Vishal",
          "Rohit",
          "Aditya",
          "Arjun",
          "Karan",
          "Yash",
        ];

        const updatedStudents = groupNames.map((name, index) => {
          const apiStudent = data[index % data.length];

          return {
            id: index + 1,
            name,
            email: apiStudent.email,
            address: {
              city: apiStudent.address.city,
            },
          };
        });

        setStudents(updatedStudents);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchStudents();
  }, []);

  const filteredStudents = students.filter((student) =>
    student.name.toLowerCase().includes(search.toLowerCase())
  ); 

  if (loading) {
    return (
      <div style={styles.center}>
        <h1>⏳ Loading Students...</h1>
      </div>
    );
  }

  if (error) {
    return (
      <div style={styles.center}>
        <h2 style={{ color: "red" }}>❌ {error}</h2>
      </div>
    );
  }

  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <h1 style={styles.heading}>🎓 Student Data Dashboard</h1>

        <p style={styles.subHeading}>
          Total Students : <b>{filteredStudents.length}</b>
        </p>

        <input
          type="text"
          placeholder="🔍 Search student..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={styles.search}
        />

        <table style={styles.table}>
          <thead>
            <tr style={styles.headerRow}>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>City</th>
            </tr>
          </thead>

          <tbody>
            {filteredStudents.length > 0 ? (
              filteredStudents.map((student) => (
                <tr key={student.id} style={styles.row}>
                  <td>{student.id}</td>
                  <td>{student.name}</td>
                  <td>{student.email}</td>
                  <td>{student.address.city}</td>
                </tr> 
              ))
            ) : (
              <tr>
                <td
                  colSpan="4"
                  style={{
                    textAlign: "center",
                    padding: "20px",
                    color: "red",
                  }}
                >
                  😔 No student found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    background: "linear-gradient(135deg,#667eea,#764ba2)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "40px",
    fontFamily: "Arial, sans-serif",
  },

  card: {
    width: "95%",
    maxWidth: "1100px",
    background: "#fff",
    borderRadius: "15px",
    padding: "30px",
    boxShadow: "0 10px 25px rgba(0,0,0,0.3)",
  },

  heading: {
    textAlign: "center",
    color: "#4b0082",
    marginBottom: "5px",
  },

  subHeading: {
    textAlign: "center",
    color: "#666",
    marginBottom: "20px",
  },

  search: {
    width: "100%",
    padding: "12px",
    fontSize: "16px",
    borderRadius: "8px",
    border: "1px solid #ccc",
    marginBottom: "20px",
    outline: "none",
  },

  table: {
    width: "100%",
    borderCollapse: "collapse",
    overflow: "hidden",
  },

  headerRow: {
    background: "#4b0082",
    color: "white",
  },

  row: {
    textAlign: "center",
    borderBottom: "1px solid #ddd",
  },

  center: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "Arial",
  },
};

export default App; 