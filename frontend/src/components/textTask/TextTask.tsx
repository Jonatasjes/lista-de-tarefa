import React, { useContext } from 'react';
import MainContext from '../../store/MainContext';
import { TTask } from '../../types/types';
import { TextTaskDiv } from './TextTaskDiv';

const TextTask = (props: TTask): JSX.Element => {
  const context = useContext(MainContext);
  const isEditingTask = context.state.isEditingTask;

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
      {isEditing() ? (
        <input onChange={evt => changeValue(evt.target.value)} />
      ) : (
        <input value={props.task} readOnly />
      )}
    </TextTaskDiv>
  );
};

export default React.memo(TextTask);
