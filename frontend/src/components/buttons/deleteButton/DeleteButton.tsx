import React, { useContext } from 'react';

import { AiOutlineDelete } from 'react-icons/ai';
import MainContext from '../../../store/MainContext';
import { TCheckDelButton } from '../../../types/types';
import { DeleteButtonButton } from './DeleteButtonButton';

const DeleteButton = (props: TCheckDelButton): JSX.Element => {
  const context = useContext(MainContext);

  function deleteTask(): void {
    const id = props.id;
    const requestOptions = {
      method: 'delete',
      headers: { 'Content-Type': 'application/json' },
    };

    const newQuant = context.state.quantTask - 1;

    fetch('http://localhost:1992/api/v1/tasks/' + id, requestOptions).then(
      () => {
        context.setState({
          ...context.state,
          quantTask: newQuant,
        });
      },
    );
  }

  function cancelEdit(): void {
    context.setState({
      ...context.state,
      isEditingTask: false,
      showAddTask: false,
    });
  }

  function deleteOrEditTask(): void {
    if (props.to == 'del') {
      deleteTask();
    }
    if (props.to == 'cancel') {
      cancelEdit();
    }
  }

  return (
    <DeleteButtonButton
      className="task-delete"
      onClick={() => deleteOrEditTask()}
    >
      <AiOutlineDelete />
    </DeleteButtonButton>
  );
};

export default React.memo(DeleteButton);
