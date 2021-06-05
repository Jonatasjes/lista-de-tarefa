import React, { useState, useEffect } from 'react';

import AddTaskButton from '../components/addTaskButton/AddTaskButton';
import NewTask from '../components/newTask/NewTask';
import TaskRow from '../components/taskRow/TaskRow';
import MainContext, { data } from '../store/MainContext';
import { HomeSection } from '../styles/pages/Home';
import { TTask } from '../types/types';

const Home = (): JSX.Element => {
  const [state, setState] = useState(data);
  const [tasks, setTasks] = useState<TTask[]>([]);

  const showAddTask = state.showAddTask;

  useEffect(() => {
    fetch('http://localhost:1992/tasks')
      .then(res => res.json())
      .then(data => {
        setState({
          ...state,
          quantTask: data.length,
        });
        setTasks(data);
      });
  }, [state.quantTask, state.isEditingTask]);

  return (
    <MainContext.Provider value={{ state, setState }}>
      <HomeSection>
        <div className="table">
          <div className="table-head">
            <div className="table-name">
              <span>Tarefas</span>
            </div>
            <AddTaskButton />
          </div>

          <div className="table-body">
            <div className="table-add-row">
              {showAddTask ? <NewTask /> : <></>}
            </div>
            {tasks.map(task => {
              return (
                <TaskRow key={task.id} id={task.id} task={task.task}></TaskRow>
              );
            })}
          </div>
        </div>
      </HomeSection>
    </MainContext.Provider>
  );
};

export default React.memo(Home);
