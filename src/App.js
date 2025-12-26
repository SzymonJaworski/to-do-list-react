import Form from "./Form";
import Tasks from "./Tasks";
import Buttons from "./Buttons";
import Section from "./Section";
import Header from "./Header";
import Container from "./Container"

const tasks = [
  { id: 1, content: "Test1", check: true },
  { id: 2, content: "Test2", check: false },
];

const doneTasksHidden = false;

function App() {
  return (
    <Container>
      <main>
        <Header title="Lista zadań" />
        <Section
          title="Dodaj nowe zadanie"
          body={<Form />}
        />
        <Section
          title="Lista zadań"
          body={<Tasks tasks={tasks} doneTasksHidden={doneTasksHidden} />}
          extraHeaderContent={<Buttons tasks={tasks} doneTasksHidden={doneTasksHidden} />} />
      </main>
    </Container>
  );
}

export default App;
