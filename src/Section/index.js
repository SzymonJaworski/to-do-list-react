import { StyledSection, SectionHeaderContainer, Title, SectionBody } from "./styled";

const Section = ({ title, body, extraHeaderContent }) => (
    <StyledSection>
        <SectionHeaderContainer>
            <Title>{title}</Title>
            {extraHeaderContent}
        </SectionHeaderContainer>
        <SectionBody>
            {body}
        </SectionBody>
    </StyledSection>
);

export default Section;