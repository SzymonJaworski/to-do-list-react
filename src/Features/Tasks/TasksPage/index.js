import { useSelector } from "react-redux";
import Container from "../../../Container";
import Header from "../../../Header";
import Section from "../../../Section";
import Form from "../../../Form";
import List from "../../../List";
import Buttons from "../../../Buttons";
import Search from "./Search";
import ExampleTasksButton from "./ExampleTasksButton";

function TasksPage() {
    return (
        <Container>
            <Header title="Lista zadań" />
            <Section
                title="Dodaj nowe zadanie"
                extraHeaderContent={<ExampleTasksButton />}
                body={<Form />}
            />
            <Section title="Wyszukiwarka" body={<Search />} />
            <Section
                title="Lista zadań"
                body={<List />}
                extraHeaderContent={<Buttons />}
            />
        </Container>
    );
}
export default TasksPage;