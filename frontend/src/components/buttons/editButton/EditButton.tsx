import React, { useContext } from 'react';

import { FiEdit } from 'react-icons/fi';
import MainContext from '../../../store/MainContext';
import { TTask, TTaskId } from '../../../types/types';
import { EditButtonButton } from './EditButtonButton';

const EditButton = (props: TTask): JSX.Element => {
  const context = useContext(MainContext);

  function editTask() {
    const isEditingTask = {
      id: props.id,
      isEditing: true,
    };

    context.setState({
      ...context.state,
      isEditingTask: isEditingTask,
      newTaskValue: props.message,
    });
  }

  return (
    <EditButtonButton className="task-edit" onClick={() => editTask()}>
      <FiEdit />
    </EditButtonButton>
  );
};

export default React.memo(EditButton);
