import React, {useState} from 'react';
import Form from '../Components/Form';
import List from '../Components/List';
import style from './App.module.scss';
import Cronometro from '../Components/Cronometro';
import { ITasks } from '../types/task';

function App() {
  const [tasks, setTasks] = useState<ITasks[] | []>([]);
  return (
    <div className={style.AppStyle}>
      <Form setTasks={setTasks}/>
      <List tasks={tasks}/>
      <Cronometro/>
    </div>
  );
}

export default App;
