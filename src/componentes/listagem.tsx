/* eslint-disable jsx-a11y/anchor-is-valid */
import { Component } from "react";
import 'materialize-css/dist/css/materialize.min.css'
import Botao from "./botãoPadrao";
import ListaCliente from "./listaCliente"
import ListaProduto from "./listarProduto"
type state = {
    option: string
}

export default class Listagem extends Component<{},state> {
       constructor(props: {} | Readonly<{}>) {
        super(props)
        this.state = {
            option:''
        }
        
    }
    
    render() {

        const fakefunc =()=> {
            console.log('a');
            
        }
        const fakefunca =() => {
            this.setState({option:'cliente'}) 
            
        }
         const fakefuncb =() => {
            this.setState({option:'produto'}) 
        }


        return (
           <>
            
            <div className="flex justify-center">
                    <Botao cor="#0088FE" texto="Clientes" onClick={fakefunca}/>
                    <Botao cor="#AF4565" texto="Produtos " onClick={fakefuncb}/>

           </div>
            <div>
                <div className="flex my-8 flex-col">
                    <div className="flex align-middle items-center my-auto">
                    <p className="text-2xl align-middle my-auto text-center mx-4 ">Filtrar por: </p>

                    {this.state.option === 'cliente' ? <>
                    <Botao cor="#0088FE" texto="Consumo (Quantidade) " onClick={fakefunc}/>
                    <Botao cor="#0088FE" texto="Consumo (Preço)" onClick={fakefunc}/>
                    <Botao cor="#0088FE" texto="Menor Consumo" onClick={fakefunc}/></> :  <>
                    <Botao cor="#AF4565" texto="Por Genêro do comprador" onClick={fakefunc}/>
                    <Botao cor="#AF4565" texto="Por compras" onClick={fakefunc}/></> }

                        
                    </div>
                    {this.state.option === 'cliente' ? <ListaCliente tema="pink" quantidade={5} /> : <ListaProduto tema="pink" quantidade={5} />}
                </div>
                <div>

                </div>
            </div>
            </>
        )   
    }
}