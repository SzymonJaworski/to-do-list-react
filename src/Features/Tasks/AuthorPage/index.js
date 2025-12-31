import Container from "../../../Container";
import Header from "../../../Header";
import Section from "../../../Section";

const AuthorPage = () => (
    <Container>
        <Header title="O autorze" />
        <Section
            title="Szymon Jaworski"
            body={
                <>
                    <p>
                        Cześć! Mam 22 lata i jestem pasjonatem programowania, który nieustannie dąży
                        do pogłębiania swojej wiedzy w świecie technologii webowych.
                    </p>
                    <p>
                        Moja przygoda z kodem to ciągłe odkrywanie nowych możliwości, jakie dają
                        nowoczesne frameworki, a każdy kolejny projekt to dla mnie okazja do
                        rozwiązywania ciekawych problemów i doskonalenia warsztatu.
                    </p>
                    <p>
                        Skupiam się na tworzeniu przejrzystych i funkcjonalnych aplikacji,
                        wierząc, że technologia powinna przede wszystkim służyć ludziom.
                    </p>
                </>
            }
        />
    </Container>
);

export default AuthorPage;