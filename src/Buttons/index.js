import { ButtonsPanel, Button } from "./styled";

const Buttons = ({ tasks, hideDone, toggleHideDone, setAllDone }) => (
    <ButtonsPanel>
        {tasks.length > 0 && (
            <>
                <Button onClick={toggleHideDone}>
                    {hideDone ? "Pokaż" : "Ukryj"} ukończone
                </Button>
                <Button
                    onClick={setAllDone}
                    disabled={tasks.every(({ check }) => check)}
                >
                    Ukończ wszystkie
                </Button>
            </>
        )}
    </ButtonsPanel>
);

export default Buttons;