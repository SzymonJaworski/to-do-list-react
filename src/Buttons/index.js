import { useSelector, useDispatch } from "react-redux";
import { selectTasks, selectHideDone, toggleHideDone, setAllDone } from "../Features/Tasks/tasksSlice";
import { ButtonsPanel, Button } from "./styled";

const Buttons = () => {
    const tasks = useSelector(selectTasks);
    const hideDone = useSelector(selectHideDone);
    const dispatch = useDispatch();

    if (tasks.length === 0) {
        return null;
    }

    return (
        <ButtonsPanel>
            <Button onClick={() => dispatch(toggleHideDone())}>
                {hideDone ? "Pokaż" : "Ukryj"} ukończone
            </Button>
            <Button
                onClick={() => dispatch(setAllDone())}
                disabled={tasks.every(({ done }) => done)}
            >
                Ukończ wszystkie
            </Button>
        </ButtonsPanel>
    );
};

export default Buttons;