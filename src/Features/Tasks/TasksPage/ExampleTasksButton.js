import { useDispatch, useSelector } from "react-redux";
import { fetchExampleTasks, selectLoading } from "../tasksSlice";
import styled from "styled-components";

const StyledButton = styled.button`
    background: transparent;
    color: ${({ theme }) => theme.color.teal || "#008080"};
    border: none;
    cursor: pointer;
    transition: filter 0.3s;
    font-size: 16px;

    &:hover {
        filter: brightness(120%);
    }

    &:disabled {
        color: #ccc;
        cursor: not-allowed;
    }
`;

const ExampleTasksButton = () => {
    const dispatch = useDispatch();
    const loading = useSelector(selectLoading);

    return (
        <StyledButton
            disabled={loading}
            onClick={() => dispatch(fetchExampleTasks())}
        >
            {loading ? "Ładowanie..." : "Pobierz przykładowe zadania"}
        </StyledButton>
    );
};

export default ExampleTasksButton;