import StudentCard from "./components/StudentCard";

function App() {
  const students = [
    { id: 1, name: "Shivam Bind", age: 20, course: "CSE", grade: "A" },
    { id: 2, name: "Rahul Sharma", age: 21, course: "ECE", grade: "B+" },
    { id: 3, name: "Priya Gupta", age: 19, course: "IT", grade: "A+" },
    { id: 4, name: "Aman Verma", age: 22, course: "ME", grade: "B" },
    { id: 5, name: "Simran Kaur", age: 20, course: "CE", grade: "A" },
  ];

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h1>Student List</h1>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {students.map((student) => (
          <StudentCard
            key={student.id}
            name={student.name}
            age={student.age}
            course={student.course}
            grade={student.grade}
          />
        ))}
      </div>
    </div>
  );
}

export default App;