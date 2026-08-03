function StudentCard({ student }) {
  return (
    <div
      style={{
        border: "1px solid gray",
        borderRadius: "10px",
        padding: "15px",
        margin: "10px",
        backgroundColor: "white",
boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
      }}
    >
      <h3>{student.name}</h3>

      <p>
        <strong>Age:</strong> {student.age}
      </p>

      <p>
        <strong>Course:</strong> {student.course}
      </p>

      <p>
        <strong>Grade:</strong> {student.grade}
      </p>
    </div>
  );
}

export default StudentCard;