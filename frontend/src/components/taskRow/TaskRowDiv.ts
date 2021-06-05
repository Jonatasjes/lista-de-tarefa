import styled from 'styled-components';

export const TaskRowDiv = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 5px 0;
  box-shadow: 1px 2px 6px rgba(0, 0, 0, 0.1);
  padding: 5px 10px;

  .task-buttons {
    width: 12%;
    max-width: 65px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    button {
      border: none;
      background: none;
    }
  }
`;
