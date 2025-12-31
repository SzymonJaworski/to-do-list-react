import Form from "./Form";
import Tasks from "./List";
import Buttons from "./Buttons";
import Section from "./Section";
import Header from "./Header";
import Container from "./Container";
import { GlobalStyle } from "./GlobalStyle";

function App() {
  return (
    <Container>
      <GlobalStyle />
      <Header title="Lista zadań" />
      <Section title="Dodaj nowe zadanie" body={<Form />} />
      <Section
        title="Lista zadań"
        body={<Tasks />}
        extraHeaderContent={<Buttons />}
      />
    </Container>
  );
}

export default App;