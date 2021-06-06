import React, { useState, useEffect } from 'react';

import AddTaskButton from '../components/buttons/addTaskButton/AddTaskButton';
import InputSearchTask from '../components/inputs/seachTask/inputSearchTask';
import NewTask from '../components/newTask/NewTask';
import TaskNotFound from '../components/taskNotFound/TaskNotFound';
import TaskRow from '../components/taskRow/TaskRow';
import MainContext, { data } from '../store/MainContext';
import { HomeSection } from '../styles/pages/Home';
import { TTaskBack } from '../types/types';

const Home = (): JSX.Element => {
  const [state, setState] = useState(data);
  const [tasks, setTasks] = useState<TTaskBack[]>([]);

  const showAddTask = state.showAddTask;

  useEffect(() => {
    fetch(
      `http://localhost:1992/api/v1/tasks?search=${
        state.searchTerm ? state.searchTerm : ''
      }`,
    )
      .then(res => res.json())
      .then(data => {
        setState({
          ...state,
          quantTask: data.length,
        });
        setTasks(data);
      });
  }, [state.quantTask, state.isEditingTask, state.searchTerm]);

  return (
    <MainContext.Provider value={{ state, setState }}>
      <HomeSection>
        <div className="table">
          <div className="table-head">
            <div className="table-name">
              <span>Tarefas</span>
            </div>
            <InputSearchTask />
            <AddTaskButton />
          </div>

          <div className="table-body">
            <div className="table-add-row">
              {showAddTask ? <NewTask /> : <></>}
            </div>
            {tasks.map(task => {
              const id = task._id;
              const message = task.message;
              return <TaskRow key={id} id={id} message={message}></TaskRow>;
            })}
            {tasks.length === 0 ? <TaskNotFound /> : ''}
          </div>
        </div>
      </HomeSection>
    </MainContext.Provider>
  );
};

export default React.memo(Home);
