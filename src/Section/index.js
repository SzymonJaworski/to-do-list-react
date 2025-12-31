import { SectionBody, SectionHeader, StyledSection, Title } from "./styled";

const Section = ({ title, body, extraHeaderContent }) => (
    <StyledSection>
        <SectionHeader>
            <Title>{title}</Title>
            {extraHeaderContent}
        </SectionHeader>
        <SectionBody>
            {body}
        </SectionBody>
    </StyledSection>
);

export default Section;