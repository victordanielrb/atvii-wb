import { Component } from "react";
import BarraNavegacao from "./barraNavegacao";
import FormularioCadastroCliente from "./formularioCadastroCliente";
import ListaCliente from "./listaCliente";
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';

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
    
    componentDidMount() {
        window.addEventListener('resize', this.handleResize);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.handleResize);
    }

    handleResize = () => {
        const windowWidth = window.innerWidth;
        this.setState({
            windowWidth,
            collapsed: windowWidth < 640
        });
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
                <div className="m-auto" style={{ display: 'flex', height: '100vh', overflow: 'hidden', margin:'auto' }}>
                    <Sidebar className=" h-full my-auto " collapsed={this.state.collapsed} collapsedWidth="5rem">
                    
                            
                        
                        <Menu className="w-full h-full text-center bg-[#ee6e73] overflow-hidden" menuItemStyles={{
                            button: {
                                color: 'white',
                                [`&:hover`]: {
                                    backgroundColor: '#9E5F61',
                                    color: 'white',
                                },
                            }
                        }}>
                            <div className="w-full bg-[#9E5F61] p-[4px]" onClick={() => this.setState({collapsed: !this.state.collapsed})}>
                            <a   className=" min-w-full   text-center text-white cursor-pointer h-full font-sans text-4xl align-middle">
                                WB
                            </a>
                            </div>
                            <MenuItem className="m-0">{this.state.collapsed ? <img className="m-auto" src="img/customer.png" /> : 'Clientes'}</MenuItem>
                            <MenuItem>{this.state.collapsed ? <img className="m-auto" src="img/box.png" /> : 'Produtos'}</MenuItem>
                            <MenuItem>{this.state.collapsed ? <img className="m-auto" src="img/report.png" /> : 'Vendas'}</MenuItem>
                        </Menu>
                    </Sidebar>
                    <main style={{ padding: 10, flex: 1, overflow: 'hidden' }}>
                        <div style={{ height: '100%', overflow: 'hidden' }}>
                            {/* Conteúdo principal */}
                        </div>
                    </main>
                </div>
            )
        } else {
            return (
                <>
                    {/* Outra tela */}
                </>
            )
        }
    }
}