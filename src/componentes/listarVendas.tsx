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
const ListaVendas = (props: props) => {

        let array = []
        for (let i = 0; i < props.quantidade; i++) {
            array.push(i)
        }
        let estilo = `collection-item active ${props.tema}`
        console.log(array);
        
        return (
            
            
            

            <div className="collection h-full">
                <a className="cursor-pointer flex text-xl grid grid-cols-3 w-full gap-2 p-4 text-center ">
                        <p className="col-span-1 text-center">Vendas</p>
                        <p className="col-span-1 text-center"> Clientes</p>
                        <p className="col-span-1 text-center"> Produto</p>


                    </a>
                <div className="w-full text-center flex justify-center">
                <Botao cor="#22502A" texto="Cadastrar" onClick={fakefunc}/>

                </div>
                {array.map((item,index) => {
                    return (
                    <div className="flex collection-item align middle content-center  items-center justify-center">
                    <a className="cursor-pointer flex text-xl grid grid-cols-3 gap-8 w-full text-center ">
                        <p className="col-span-1">{index}</p>
                        <p className="col-span-1"> {index*2+3*index+1}</p>
                        <p className="col-span-1"> {index*2+3*index+1}</p>


                    </a>
                      
                    </div>)
                })}
                
            </div>
            
        )
    }
export default ListaVendas;