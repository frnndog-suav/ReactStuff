import styles from './Ordenador.module.scss';
import opcoes from './opcoes.json';
import { useState } from 'react';
import classNames from 'classnames';
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md';

interface Props {
  ordenador: string;
  setOrdenador: React.Dispatch<React.SetStateAction<string>>;
}

export default function Ordenador(props: Props) {
    const [aberto, setAberto] = useState(false);
    const nomeOrdenador =
    props.ordenador &&
    opcoes.find((opcao) => opcao.value === props.ordenador)?.nome;

    return (
        <button
            className={classNames({
                [styles.ordenador]: true,
                [styles['ordenador--ativo']]: props.ordenador !== '',
            })}
            onClick={() => setAberto(!aberto)}
            onBlur={() => setAberto(false)}
        >
            <span>{nomeOrdenador || 'Ordenador por'}</span>
            {aberto ? (
                <MdKeyboardArrowUp size={20} />
            ) : (
                <MdKeyboardArrowDown size={20} />
            )}
            <div
                className={classNames({
                    [styles.ordenador__options]: true,
                    [styles['ordenador__options--ativo']]: aberto,
                })}
            >
                {opcoes.map((opcao) => (
                    <div
                        className={styles.ordenador__option}
                        key={opcao.value}
                        onClick={() => props.setOrdenador(opcao.value)}
                    >
                        {opcao.nome}
                    </div>
                ))}
            </div>
        </button>
    );
}
