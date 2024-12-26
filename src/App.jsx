import { useEffect, useState } from "react";
import ToDoList from "./todolist.jsx";

function App() {
  const [tasks, setTasks] = useState(intialFn());
  const [taskInput, setTaskInput] = useState("");
  const [editingTaskId,setEditingTaskId] =useState(null)

  function intialFn(){  
    const storedTask =localStorage.getItem('tasks')
    const temp = JSON.parse(storedTask)
    return temp || []
  }
  

useEffect(()=>{
  localStorage.setItem('tasks',JSON.stringify(tasks))
},[tasks])


  const addTask = () => {
    if (taskInput.trim()) {
      if(editingTaskId){
        setTasks(tasks.map((task)=>task.id === editingTaskId ? {...task,text:taskInput} : task))
        setEditingTaskId(null)
      }else{
        setTasks([...tasks, { id: Date.now(), text: taskInput, completed: false }]);
      }
      setTaskInput("");
    }
  };

  const deleteTask = (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this item?");
    if(confirmDelete){
      setTasks(tasks.filter((task) => task.id !== id));

    }
  };

  const toggleComplete = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const editTask = (id)=>{
    const taskToEdit = tasks.find((task)=>task.id === id)
    if(taskToEdit){
      setTaskInput(taskToEdit.text)
      setEditingTaskId(id)
    }
  }

  return (
    <div style={styles.app}>
      <h1 style={styles.heading}>To-Do App</h1>
      <div style={styles.inputContainer}>
        <input
          style={styles.input}
          type="text"
          placeholder="Add a new task..."
          value={taskInput}
          onChange={(e) => setTaskInput(e.target.value)}
        />
        <button style={styles.addButton} onClick={addTask}>
          {editingTaskId ?'Edit' : 'Add'}
        </button>
      </div>
      <div style={styles.taskListContainer}>
        <ToDoList
          tasks={tasks}
          deleteTask={deleteTask}
          toggleComplete={toggleComplete}
          editTask={editTask}
        />
      </div>
    </div>
  );
}

const styles = {
  app: {
    textAlign: "center",
    marginTop: "20px",
    backgroundColor: "#f9f9f9",
    minHeight: "100vh",
    fontFamily: "Arial, sans-serif",
  },
  heading: {
    fontSize: "2.5rem",
    color: "#333",
    marginBottom: "20px",
  },
  inputContainer: {
    margin: "20px auto",
    display: "flex",
    justifyContent: "center",
    gap: "10px",
    padding: "10px",
  },
  input: {
    padding: "10px",
    fontSize: "16px",
    width: "300px",
    borderRadius: "5px",
    border: "1px solid #ddd",
    boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
  },
  addButton: {
    padding: "10px 20px",
    fontSize: "16px",
    color: "#fff",
    backgroundColor: "#007BFF",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
    transition: "background-color 0.3s",
  },
  addButtonHover: {
    backgroundColor: "#0056b3",
  },
  taskListContainer: {
    margin: "20px auto",
    width: "80%",
    maxWidth: "500px",
    backgroundColor: "#fff",
    borderRadius: "10px",
    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
    padding: "20px",
  },
};

export default App;
