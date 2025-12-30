import { StyledList, Item, Content, ActionButton } from "./styled";

const Tasks = ({ tasks, hideDone, removeTask, toggleTaskDone }) => (
    <StyledList>
        {tasks.map(task => (
            <Item
                key={task.id}
                hidden={task.check && hideDone}
            >
                <ActionButton
                    toggleDone
                    onClick={() => toggleTaskDone(task.id)}
                >
                    {task.check ? "✓" : ""}
                </ActionButton>
                <Content done={task.check}>
                    {task.content}
                </Content>
                <ActionButton
                    remove
                    onClick={() => removeTask(task.id)}
                >
                    🗑
                </ActionButton>
            </Item>
        ))}
    </StyledList>
);

export default Tasks;