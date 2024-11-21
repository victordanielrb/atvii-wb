import { Component } from "react";

import FormularioCadastroCliente from "./formularioCadastroCliente";
import ListaCliente from "./listaCliente";
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';

type state = {
    tela: string,
    collapsed: boolean,
    windowWidth: number,
    toggled: boolean
}
type props = {
    func: Function
}


export default class Sidebari extends Component<props,state> {
    constructor(props: {func: Function}) {
        super(props)
        this.state = {
            tela: 'Clientes',
            collapsed: window.innerWidth < 640,
            windowWidth: window.innerWidth,
            toggled: false
        }
        

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

    render() {
        console.log(this.state.windowWidth);
            if (this.state.windowWidth > 400) {
            return (
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
                            <div className="w-full bg-[#9E5F61] p-[0px]" onClick={() => this.setState({collapsed: !this.state.collapsed})}>
                            <a   className=" min-w-full   text-center text-white cursor-pointer h-full font-sans text-3xl align-middle">
                                WB
                            </a>
                            </div>
                            <MenuItem onClick={(e) => {this.props.func('Clientes', e)}} className="m-0">{this.state.collapsed ? <img className="m-auto" src="img/customer.png" /> : 'Clientes'}</MenuItem>
                            <MenuItem onClick={(e) => {this.props.func('Produtos', e)}}>{this.state.collapsed ? <img className="m-auto" src="img/box.png" /> : 'Produtos'}</MenuItem>
                            <MenuItem onClick={(e) => {this.props.func('Vendas', e)}}>{this.state.collapsed ? <img className="m-auto" src="img/report.png" /> : 'Vendas'}</MenuItem>
                            <MenuItem onClick={(e) => {this.props.func('Listagem', e)}}>{this.state.collapsed ? <img className="m-auto" src="img/report.png" /> : 'Listagens'}</MenuItem>

                        </Menu>
                    </Sidebar>

                 
            )}
        else {return(
    <div style={{ display: 'flex', height: '100%', minHeight: '400px' }}>
      <Sidebar className="bg-white" onBackdropClick={() => this.setState({toggled:false})} toggled={this.state.toggled} breakPoint="always">
        <Menu className="h-full">
          <MenuItem onClick={(e) => {this.props.func('Clientes', e)}} className="text-black text-xl bold"> Clientes</MenuItem>
          <MenuItem onClick={(e) => {this.props.func('Produtos', e)}} className="text-black text-xl bold"> Produtos</MenuItem>
          <MenuItem onClick={(e) => {this.props.func('Vendas', e)}} className="text-black text-xl bold"> Vendas</MenuItem>
          <MenuItem onClick={(e) => {this.props.func('Listagem', e)}} className="text-black text-xl bold"> Listagens</MenuItem>
        </Menu>
      </Sidebar>
      
        
          <button className="sb-button absolute z-10 bg-pink-300 m-1 p-2 rounded-md" onClick={() => this.setState({toggled:!this.state.toggled})}>
            <img src="img/menu.png"></img>
          </button>
     
    </div>
     )   }
      
    }
}