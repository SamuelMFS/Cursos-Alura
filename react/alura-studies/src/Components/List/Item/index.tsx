import style from '../List.module.scss';
import { ITasks } from '../../../types/task';

export default function Item({name, time, selected, completed, id}: ITasks) {
  return(
    <li className={style.item}>
      <h3>
        {name}
      </h3>
      <span>
        {time}
      </span>
    </li> 
  )
}
