import React, { useContext } from 'react';
import MainContext from '../../store/MainContext';
import { TTask } from '../../types/types';
import { TextTaskDiv } from './TextTaskDiv';

const TextTask = (props: TTask): JSX.Element => {
  const context = useContext(MainContext);
  const isEditingTask = context.state.isEditingTask;
  const newTaskValue = context.state.newTaskValue;

  function isEditing() {
    if (isEditingTask.isEditing && isEditingTask.id === props.id) {
      return true;
    }
    return false;
  }

  function changeValue(value: string) {
    context?.setState({
      ...context.state,
      newTaskValue: value,
    });
  }

  return (
    <TextTaskDiv>
      <input
        type="text"
        value={isEditing() ? newTaskValue : props.message}
        onChange={evt => changeValue(evt.target.value)}
      />
    </TextTaskDiv>
  );
};

export default React.memo(TextTask);
