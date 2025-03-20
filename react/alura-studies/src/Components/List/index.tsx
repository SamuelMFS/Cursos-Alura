import { ITasks } from '../../types/task';
import React from 'react';
import Item from './Item';
import style from './List.module.scss';

function List({tasks}: {tasks: ITasks[]}) {
  return (
  <aside className={style.listaTarefas}>
    <h2>Estudos do dia</h2>
    <ul>
      {tasks.map((item, index) => (
        <Item 
            key={index}
            name={item.name}
            time={item.time}
            selected={item.selected}
            completed={item.completed}
            id={item.id}
        />
      ))}
    </ul>
  </aside>
  )
}

export default List;
