import React from 'react';

type TIsEditingTask = {
  id: string;
  isEditing: boolean;
};

type data = {
  showAddTask: boolean;
  isEditingTask: TIsEditingTask;
  newTaskValue: string;
  searchTerm: string;
  quantTask: number;
};

export interface IMainContext {
  state: data;
  setState: React.Dispatch<React.SetStateAction<data>>;
}

export const data = {
  showAddTask: false,
  isEditingTask: {
    idEditing: '',
    isEditing: false,
  },
  newTaskValue: '',
  searchTerm: '',
  quantTask: 0,
};

const MainContext = React.createContext<IMainContext | any>(null);

export default MainContext;
