import Container from "../../../Container";
import Header from "../../../Header";
import Section from "../../../Section";

const AuthorPage = () => (
    <Container>
        <Header title="O autorze" />
        <Section
            title="Szymon Jaworski"
            body={
                <p>
                    Moją pasją jest <strong>muzyka</strong>. Gram na klawiszach od 20 lat,
                    komponuję i aranżuję. Muzyka jest dla mnie niezwykle ważna!
                </p>
            }
        />
    </Container>
);
export default AuthorPage;