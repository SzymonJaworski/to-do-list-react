import "./style.css";

const Tasks = ({ tasks, hideDone, removeTask, toggleTaskDone }) => (
    <ul className="list">
        {tasks.map(task => (
            <li
                key={task.id}
                className={
                    `list__item ${task.check && hideDone ? "list__item--hidden" : ""}`
                }>
                <button
                    className="list__button list__button--check"
                    onClick={() => toggleTaskDone(task.id)}
                >
                    {task.check ? "✓" : ""}
                </button>
                <span className={
                    `list__task ${task.check ? "list__task--done" : ""}`
                }>
                    {task.content}
                </span>
                <button
                    className="list__button list__button--delete"
                    onClick={() => removeTask(task.id)}
                >
                    🗑
                </button>
            </li>
        ))}
    </ul >
);

export default Tasks;