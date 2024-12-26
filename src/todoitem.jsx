function ToDoItem({ task, deleteTask, toggleComplete,editTask }) {
  const styles = {
    item: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "10px 20px",
      margin: "10px auto",
      width: "300px",
      border: "1px solid #ddd",
      borderRadius: "5px",
    },
    buttonGroup: {
      display: "flex",
      gap: "5px", // Space between buttons
    },
    deleteButton: {
      background: "red",
      color: "white",
      border: "none",
      padding: "5px 10px",
      cursor: "pointer",
      borderRadius: "3px",
    },
    editButton: {
      background: "grey",
      color: "white",
      border: "none",
      padding: "5px 10px",
      cursor: "pointer",
      borderRadius: "3px",
    },
  };

  return (
    <li style={styles.item}>
      <span
        style={{
          textDecoration: task.completed ? "line-through" : "none",
          cursor: "pointer",
        }}
        onClick={() => toggleComplete(task.id)}
      >
        {task.text}
      </span>
      <div style={styles.buttonGroup}>
        <button style={styles.editButton} onClick={()=>editTask(task.id)}>Edit</button>
        <button style={styles.deleteButton} onClick={() => deleteTask(task.id)}>
          Delete
        </button>
      </div>
    </li>
  );
}

export default ToDoItem;
