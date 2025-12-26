import "./style.css";

const Tasks = ({ tasks, doneTasksHidden }) => (
    <ul className="list">
        {tasks.map(task => (
            <li
                key={task.id}
                className={`list__item ${task.check && doneTasksHidden ? "list__item--hidden" : ""}`}
            >
                <button className="list__button list__button--check">
                    {task.check ? "✓" : ""}
                </button>
                <span className={`list__task ${task.check ? "list__task--done" : ""}`}>
                    {task.content}
                </span>
                <button className="list__button list__button--delete">🗑</button>
            </li>
        ))}
    </ul>
);

export default Tasks;