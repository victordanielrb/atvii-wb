/* eslint-disable jsx-a11y/anchor-is-valid */
import { Component } from "react";
import 'materialize-css/dist/css/materialize.min.css'
import Botao from "./botãoPadrao";

type props = {
    tema: string,
    quantidade: number
}
const fakefunc = () => {
    console.log('a');
    
}
export default class ListaProduto extends Component<props> {
    render() {
        let array = []
        for (let i = 0; i < this.props.quantidade; i++) {
            array.push(i)
        }
        let estilo = `collection-item active ${this.props.tema}`
        console.log(array);
        
        return (
            
            
            

            <div className="collection h-full">

                {array.map((item,index) => {
                    return (
                    <div className="flex collection-item align middle content-center items-center justify-center">
                    <a className="cursor-pointer text-xl mx-4">
                        Produto {index}
                    </a>
                        <div className="flex">
                        <Botao cor="#0088FE" texto="Editar" onClick={fakefunc}/>
                        <Botao cor="#AF4565" texto="Deletar" onClick={fakefunc}/>
                        
                        </div>
                    </div>)
                })}
                
            </div>
            
        )
    }
}