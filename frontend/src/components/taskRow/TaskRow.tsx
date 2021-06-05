import React, { useContext } from 'react';
import MainContext from '../../store/MainContext';
import { TTask } from '../../types/types';

import CheckButton from '../checkButton/CheckButton';
import DeleteButton from '../deleteButton/DeleteButton';
import EditButton from '../editButton/EditButton';
import TextTask from '../textTask/TextTask';
import { TaskRowDiv } from './TaskRowDiv';

const TaskRow = (props: TTask): JSX.Element => {
  const context = useContext(MainContext);

  const isEditingTask = context.state.isEditingTask;

  return (
    <TaskRowDiv className="table-row task-row">
      <TextTask id={props.id} task={props.task}></TextTask>
      <div className="task-buttons">
        {isEditingTask.isEditing && isEditingTask.id === props.id ? (
          <CheckButton to="edit" id={props.id} />
        ) : (
          <></>
        )}

        {isEditingTask.id !== props.id ? <EditButton id={props.id} /> : <></>}
        {isEditingTask.id === props.id ? (
          <DeleteButton to="cancel" id={props.id} />
        ) : (
          <DeleteButton to="del" id={props.id} />
        )}
      </div>
    </TaskRowDiv>
  );
};

export default React.memo(TaskRow);
