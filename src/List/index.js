import { useSelector, useDispatch } from "react-redux";
import { useLocation, Link } from "react-router-dom";
import { selectTasks, selectHideDone, toggleTaskDone, removeTask } from "../Features/Tasks/tasksSlice";
import { useQueryParameter } from "../Features/Tasks/queryParameters";
import { StyledList, Item, Content, ActionButton, StyledLink } from "./styled";

const Tasks = () => {
    const query = useQueryParameter("szukaj");
    const tasks = useSelector(selectTasks);
    const hideDone = useSelector(selectHideDone);
    const dispatch = useDispatch();

    const filteredTasks = tasks.filter(task => {
        if (!query || query.trim() === "") return true;
        return task.content.toLowerCase().includes(query.trim().toLowerCase());
    });

    return (
        <StyledList>
            {filteredTasks.map(task => (
                <Item
                    key={task.id}
                    $hidden={task.done && hideDone}
                >
                    <ActionButton
                        $toggleDone
                        onClick={() => dispatch(toggleTaskDone(task.id))}
                    >
                        {task.done ? "✓" : ""}
                    </ActionButton>
                    <Content $done={task.done}>
                        { }
                        <StyledLink to={`/zadania/${task.id}`}>
                            {task.content}
                        </StyledLink>
                    </Content>
                    <ActionButton
                        $remove
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