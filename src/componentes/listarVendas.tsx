/* eslint-disable jsx-a11y/anchor-is-valid */
import { Component } from "react";
import 'materialize-css/dist/css/materialize.min.css'
import Botao from "./botãoPadrao";

type props = {
    
    quantidade: number
}
const fakefunc = () => {
    console.log('a');
    
}
export default class ListaVendas extends Component<props> {
    render() {
        let array = []
        for (let i = 0; i < this.props.quantidade; i++) {
            array.push(i)
        }

        console.log(array);
        let nomes = ['ari','joao','maria','jose','pedro','joana','lucas','lucia','julio']
        let produtos = ['arroz','feijao','macarrao','carne','frango','peixe','batata','cenoura','beterraba']
        return (
            
            
            

            <div className="collection h-full">
                <div className="w-1/2  px-8 text-center flex justify-center mx-auto"><Botao cor="green" texto="Registrar venda" onClick={fakefunc}/></div>
                <a className="cursor-pointer flex text-xl grid grid-cols-3 w-full gap-2 p-4 text-center ">
                        <p className="col-span-1 text-black text-2xl text-center">Id da Venda</p>
                        <p className="col-span-1 text-black text-2xl  text-center"> Nome do Cliente</p>
                        <p className="col-span-1 text-black text-2xl  text-center"> Nome do  Produto</p>


                    </a>
                {array.map((item,index) => {
                    return (
                    <div className="flex collection-item align middle content-center  items-center justify-center">
                    <a className="cursor-pointer flex text-xl grid grid-cols-3 gap-8 w-full text-center ">
                        <p className="col-span-1">{index}</p>
                        <p className="col-span-1"> {nomes[index]}</p>
                        <p className="col-span-1"> {produtos[index]}</p>


                    </a>
                      
                    </div>)
                })}
                
            </div>
            
        )
    }
}