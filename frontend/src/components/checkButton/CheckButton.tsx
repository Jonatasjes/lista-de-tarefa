import React, { useContext } from 'react';

import { BsCheckBox } from 'react-icons/bs';
import MainContext from '../../store/MainContext';
import { TCheckAddButton } from '../../types/types';
import generatePassword from '../textTask/PasswordGenerator';
import { CheckButtonButton } from './CheckButtonButton';

const CheckButton = (props: TCheckAddButton): JSX.Element => {
  const context = useContext(MainContext);

  function addTask() {
    const newTask = context?.state.newTaskValue;
    const newQuant = context.state.quantTask + 1;

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id: generatePassword(), task: newTask }),
    };

    fetch('http://localhost:1992/tasks', requestOptions)
      .then(res => res.json())
      .then(() => {
        context.setState({
          ...context.state,
          showAddTask: false,
          quantTask: newQuant,
        });
      });
  }

  function editTask() {
    const newTask = context?.state.newTaskValue;
    const id = props.id;

    const requestOptions = {
      method: 'put',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ task: newTask }),
    };

    fetch('http://localhost:1992/tasks/' + id, requestOptions)
      .then(res => res.json())
      .then(() => {
        context.setState({
          ...context.state,
          showAddTask: false,
          isEditingTask: false,
        });
      });
  }

  function addOrEditTask() {
    if (context?.state.newTaskValue.length === 0) {
      alert('Opss.. campo vazio!');
      return;
    }
    if (props.to === 'add') {
      addTask();
    }
    if (props.to === 'edit') {
      editTask();
    }
  }

  return (
    <CheckButtonButton className="task-check" onClick={() => addOrEditTask()}>
      <BsCheckBox />
    </CheckButtonButton>
  );
};

export default React.memo(CheckButton);
