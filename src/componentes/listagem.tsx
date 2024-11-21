/* eslint-disable jsx-a11y/anchor-is-valid */
import { Component } from "react";
import 'materialize-css/dist/css/materialize.min.css'
import Botao from "./botãoPadrao";
import ListaCliente from "./listaCliente"
type props = {
    tema: string,
    quantidade: number
}
const fakefunc = () => {
    console.log('a');
    
}
export default class Listagem extends Component<props> {
    
    render() {
        return (
           <>
            
            <div className="flex justify-center">
                    <Botao cor="#0088FE" texto="Cliente" onClick={fakefunc}/>
                    <Botao cor="#AF4565" texto="Produto" onClick={fakefunc}/>

           </div>
            <div>
                <div className="flex my-8">
                    <p className="text-2xl align-middle ">Filtro: </p>
                    <div className="flex align-middle items-center my-auto">
                    <Botao cor="#0088FE" texto="Por Consumo " onClick={fakefunc}/>
                    <Botao cor="#0088FE" texto="Por compras" onClick={fakefunc}/>


                    </div>
                </div>
                <div></div>
            </div>
            </>
        )   
    }
}