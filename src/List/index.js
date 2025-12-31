import { useSelector, useDispatch } from "react-redux";
import { selectTasks, selectHideDone, toggleTaskDone, removeTask } from "../Features/Tasks/tasksSlice";
import { StyledList, Item, Content, ActionButton } from "./styled";

const Tasks = () => {
    const tasks = useSelector(selectTasks);
    const hideDone = useSelector(selectHideDone);
    const dispatch = useDispatch();

    return (
        <StyledList>
            {tasks.map(task => (
                <Item
                    key={task.id}
                    hidden={task.done && hideDone}
                >
                    <ActionButton
                        toggleDone
                        onClick={() => dispatch(toggleTaskDone(task.id))}
                    >
                        {task.done ? "✓" : ""}
                    </ActionButton>
                    <Content done={task.done}>
                        {task.content}
                    </Content>
                    <ActionButton
                        remove
                        onClick={() => dispatch(removeTask(task.id))}
                    >
                        🗑
                    </ActionButton>
                </Item>
            ))}
        </StyledList>
    );
};

export default Tasks;