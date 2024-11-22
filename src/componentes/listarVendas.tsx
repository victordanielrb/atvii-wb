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
const ListaVendas = (props: props) => {

        let array = []
        for (let i = 0; i < props.quantidade; i++) {
            array.push(i)
        }
       
        console.log(array);
        let nomes = ['joao','maria','jose','pedro','ana','carlos']
        let produtos = ['pao','leite','cafe','arroz','feijao','macarrao']
        const fakefuncb = () => {
            console.log('vaicorinthinas');
            
        }
        return (
            
            
            

            <div className="collection h-full">
                <div className="text-center justify-center mx-auto flex"><Botao cor="green" texto="Registrar compra " onClick={fakefuncb}/></div>
                <a className="cursor-pointer flex text-xl grid grid-cols-3 w-full gap-2 p-4 text-center ">
                        <p className="col-span-1 text-black text-2xl text-center">Vendas</p>
                        <p className="col-span-1 text-black text-2xl  text-center"> Clientes</p>
                        <p className="col-span-1 text-black text-2xl  text-center"> Produto</p>


                    </a>
                <div className="w-full text-center flex justify-center">
                

                </div>
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
export default ListaVendas;