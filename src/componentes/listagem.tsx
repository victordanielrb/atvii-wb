/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState,useEffect } from "react";
import 'materialize-css/dist/css/materialize.min.css'
import Botao from "./botãoPadrao";
import ListaCliente from "./listaCliente"

const Listagem = () => {
    const [option,setOption] = useState('');
    const fakefunc = () => {
        console.log('a');
        
    }
    const fakefunca = () => {
        setOption('cliente');
        
    }
    const fakefuncb = () => {
        setOption('produto');
    }
    return (
           <>
            
            <div className="flex justify-center">
                    <Botao cor="#0088FE" texto="Clientes" onClick={fakefunca}/>
                    <Botao cor="#AF4565" texto="Produtos " onClick={fakefuncb}/>

           </div>
            <div>
                <div className="flex my-8">
                    <p className="text-2xl align-middle my-auto text-center mx-4 ">Filtrar por: </p>
                    <div className="flex align-middle items-center my-auto">
                    {option === 'cliente' ? <>
                    <Botao cor="#0088FE" texto="Consumo (Quantidade) " onClick={fakefunc}/>
                    <Botao cor="#0088FE" texto="Consumo (Preço)" onClick={fakefunc}/>
                    <Botao cor="#0088FE" texto="Menor Consumo" onClick={fakefunc}/></> :  <>
                    <Botao cor="#AF4565" texto="Por Genêro do comprador" onClick={fakefunc}/>
                    <Botao cor="#AF4565" texto="Por compras" onClick={fakefunc}/></> }


                    </div>
                </div>
                <div>
                </div>
            </div>
            </>
    )   
    
}

export default Listagem;