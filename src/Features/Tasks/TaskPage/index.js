import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { getTaskById } from "../tasksSlice";
import Section from "../../../Section";
import Header from "../../../Header";

const TaskPage = () => {
    const { id } = useParams();
    const task = useSelector(state => getTaskById(state, id));

    return (
        <>
            <Header title="Szczegóły zadania" />
            <Section
                title={task ? task.content : "Nie znaleziono zadania 😢"}
                body={
                    task ? (
                        <>
                            <strong>Ukończone:</strong> {task.done ? "Tak" : "Nie"}
                        </>
                    ) : null
                }
            />
        </>
    );
};

export default TaskPage;