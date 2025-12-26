import "./style.css"

const Buttons = ({ tasks, doneTasksHidden }) => (

    <div className="section__panel">
        {tasks.length > 0 && (
            <>
                <button className="section__button">
                    {doneTasksHidden ? "Pokaż" : "Ukryj"} ukończone
                </button>
                <button
                    className="section__button"
                    disabled={tasks.every(({ check }) => check)} >Ukończ wszystkie
                </button>
            </>
        )}
    </div>
);



export default Buttons;