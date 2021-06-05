import React, { useContext } from 'react';

import { AiOutlinePlusCircle } from 'react-icons/ai';
import MainContext from '../../store/MainContext';
import { AddTaskButtonButton } from './AddTaskButtonButton';

const AddTaskButton = (): JSX.Element => {
  const context = useContext(MainContext);

  function showAddTaskTrue() {
    context?.setState({
      ...context.state,
      showAddTask: true,
      isEditingTask: false,
    });
  }

  return (
    <AddTaskButtonButton
      className="table-add"
      onClick={() => showAddTaskTrue()}
    >
      <AiOutlinePlusCircle />
    </AddTaskButtonButton>
  );
};

export default React.memo(AddTaskButton);
