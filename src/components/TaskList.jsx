// Displays tasks and handles edit/delete
export default function TaskList({ tasks, deleteTask, updateTask }) {
  const editTask = (task) => {
    const newTitle = prompt("Edit task title:", task.title);
    if (!newTitle) return;

    updateTask({ ...task, title: newTitle });
  };

  return (
    <ul className="list">
      {tasks.length === 0 && <p>No tasks yet</p>}

      {tasks.map((task) => (
        <li key={task.id}>
          <span>
            {task.title}
            <small className={`priority ${task.priority.toLowerCase()}`}>
              {task.priority}
            </small>
          </span>

          <div className="actions">
            <button onClick={() => editTask(task)}>Edit</button>
            <button onClick={() => deleteTask(task.id)}>Delete</button>
          </div>
        </li>
      ))}
    </ul>
  );
}