import ToDoItem from "./todoitem.jsx";

function ToDoList({tasks,deleteTask,toggleComplete,editTask}){
    if(tasks.length === 0){
        return <p>No task added yet!</p>
    }
    return (
        <ul>
            { tasks.map((task)=>(
                <ToDoItem key={task.id} task={task} deleteTask={deleteTask} toggleComplete={toggleComplete} editTask={editTask} />
            ))}
        </ul>
    );
}

export default ToDoList;