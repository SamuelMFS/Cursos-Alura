import Button from "../Button";
import Relogio from "./Relogio";
import style from './Cronometro.module.scss';

export default function Cronometro() {
  return(
    <div className={style.cronometro}>
      <p className={style.titulo}>Escolha um card e inicie o Cronometro</p>
      <div className={style.relogioWrapper}>
        <Relogio/>
      </div>
      <Button>Iniciar</Button>
    </div>
  )
}
