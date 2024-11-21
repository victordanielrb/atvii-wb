/* eslint-disable jsx-a11y/anchor-is-valid */
import { Component } from "react";
import 'materialize-css/dist/css/materialize.min.css'


type props = {
    cor: string,
    onClick: React.MouseEventHandler<HTMLAnchorElement>,
    texto:string,
}

const Botao = (props:props) => {
    
    
        let estilo = ` w-[6rem] h-[3] text-xl   align-middle rounded-md text-center text-white active bg-[${props.cor}]`
        
        
        return (
           <a onClick={props.onClick} className={'m-2 cursor-pointer'}>
                <p className={estilo}>{props.texto}</p>
           </a>
        )
    }
export default Botao;
