import React from 'react';
import CheckButton from '../checkButton/CheckButton';
import DeleteButton from '../deleteButton/DeleteButton';
import InputTask from '../inputTask/InputTask';
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
