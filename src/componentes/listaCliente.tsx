/* eslint-disable jsx-a11y/anchor-is-valid */
import { Component } from "react";
import 'materialize-css/dist/css/materialize.min.css'
import Botao from "./botãoPadrao";

type props = {
    tema: string
}
const fakefunc = () => {
    console.log('a');
    
}
export default class ListaCliente extends Component<props> {
    render() {
        let estilo = `collection-item active ${this.props.tema}`
        return (<>
            <Botao cor="#0088FE" texto="texto" onClick={fakefunc}/>
            <Botao cor="#0088FE" texto="texto" onClick={fakefunc}/>
            <Botao cor="#0088FE" texto="texto" onClick={fakefunc}/>

            <div className="collection">
                
                <a className="collection-item ">Cliente 1</a>
                <a className={`collection-item`}>Cliente 2</a>
                <a className="collection-item">Cliente 3</a>
                <a className="collection-item">Cliente 4</a>
            </div>
            </>
        )
    }
}