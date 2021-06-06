import React from 'react';
import CheckButton from '../buttons/checkButton/CheckButton';
import DeleteButton from '../buttons/deleteButton/DeleteButton';
import InputTask from '../inputs/inputTask/InputTask';
import { NewTaskDiv } from './NewTaskDiv';

const NewTask = (): JSX.Element => {
  return (
    <NewTaskDiv className="table-row new-task">
      <InputTask />
      <div className="task-buttons">
        <CheckButton to="add" />

        <DeleteButton to="cancel" />
      </div>
    </NewTaskDiv>
  );
};

export default React.memo(NewTask);
