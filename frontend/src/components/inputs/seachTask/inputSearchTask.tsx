import React, { useContext } from 'react';
import { FiSearch } from 'react-icons/fi';
import MainContext from '../../../store/MainContext';
import { InputSearchTaskDiv } from './InputSearchTaskDiv';

const InputSearchTask = (): JSX.Element => {
  const context = useContext(MainContext);

  const searchTerm = context.state.searchTerm;

  function changeValue(value: string) {
    if (value.length === 0) return;
    context.setState({
      ...context.state,
      searchTerm: value,
    });
  }

  return (
    <InputSearchTaskDiv>
      <input type="search" onChange={evt => changeValue(evt.target.value)} />
      {!searchTerm ? <FiSearch /> : ''}
    </InputSearchTaskDiv>
  );
};

export default InputSearchTask;
