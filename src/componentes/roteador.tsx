import { Component } from "react";
import ListaProduto from "./listarProduto";
import FormularioCadastroCliente from "./formularioCadastroCliente";
import ListaCliente from "./listaCliente";
import Sidebari from "./sidebar";
import MainPage from "./mainPage";
import ListaVendas from "./listarVendas";
type state = {
    tela: string,
    collapsed: boolean,
    windowWidth: number
}

export default class Roteador extends Component<{}, state> {
    constructor(props: {} | Readonly<{}>) {
        super(props)
        this.state = {
            tela: 'Clientes',
            collapsed: window.innerWidth < 640,
            windowWidth: window.innerWidth
        }
        this.selecionarView = this.selecionarView.bind(this)
    }
   

    selecionarView(novaTela: string, evento: Event) {
        evento.preventDefault()
        console.log(novaTela);
        this.setState({
            tela: novaTela
        })
    }
   
    render() {
        console.log(this.state.windowWidth);
        if (this.state.tela === 'Clientes') {
            return (
                <MainPage func={this.selecionarView}>
                     <ListaCliente tema="pink" quantidade={5} />

                </MainPage>
            )
        } else if (this.state.tela === 'Produtos') {
            return (
                <MainPage func={this.selecionarView}>
                     <ListaProduto tema="pink" quantidade={5} />

                </MainPage>
            )
        }
        else if (this.state.tela === 'Vendas') {
            return (
                <MainPage func={this.selecionarView}>
                    <ListaVendas tema="pink" quantidade={5} />
                </MainPage>
            )
        }
    }
}