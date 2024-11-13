/* eslint-disable jsx-a11y/anchor-is-valid */
import { Component } from "react";
import 'materialize-css/dist/css/materialize.min.css'


type props = {
    cor: string,
    onClick: React.MouseEventHandler<HTMLAnchorElement>,
    texto:string,
}

export default class Botao extends Component<props> {
    
    render() {
        let estilo = ` w-[6rem] h-[3] text-2xl   align-middle rounded-md text-center text-white active bg-[${this.props.cor}]`
        
        
        return (
           <a onClick={this.props.onClick} className={'m-12'}>
                <p className={estilo}>{this.props.texto}</p>
           </a>
        )
    }
}