function StudentCard({ name, age, course, grade }) {
  return (
    <div
      style={{
        border: "1px solid black",
        borderRadius: "10px",
        padding: "15px",
        margin: "10px",
        width: "250px",
        backgroundColor: "#f9f9f9",
      }}
    >
      <h2 style={{ color: "black" }}>{name}</h2>

      <p>
        <strong>Age:</strong> {age}
      </p>

      <p>
        <strong>Course:</strong> {course}
      </p>

      <p>
        <strong>Grade:</strong> {grade}
      </p>
    </div>
  );
}

export default StudentCard;