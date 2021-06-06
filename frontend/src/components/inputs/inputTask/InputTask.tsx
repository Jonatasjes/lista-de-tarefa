import React, { useContext } from 'react';
import MainContext from '../../../store/MainContext';
import { InputTaskDiv } from './InputTaskDiv';

const InputTask = (): JSX.Element => {
  const context = useContext(MainContext);

  function changeValue(value: string) {
    context?.setState({
      ...context.state,
      newTaskValue: value,
    });
  }

  return (
    <InputTaskDiv className="task-input">
      <input type="text" onChange={evt => changeValue(evt.target.value)} />
    </InputTaskDiv>
  );
};

export default React.memo(InputTask);
