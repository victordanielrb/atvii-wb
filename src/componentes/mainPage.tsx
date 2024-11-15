import React from 'react';
import { Component } from "react";
import ListaProduto from "./listarProduto";
import Sidebari from "./sidebar";
type props = {
    func: Function
}
export default class MainPage extends Component<props> {
    constructor(props: props) {
        super(props)
    }
    render() {
        return (
            <div className="m-auto" style={{ display: 'flex', height: '100vh', overflow: 'hidden', margin: 'auto' }}>
                <Sidebari func={this.props.func} />
                <main className="border-4 " style={{ padding: 0, flex: 1, overflow: 'hidden' }}>
                    <div className="" style={{ height: '100%', overflow: 'hidden' }}>
                    {this.props.children}
                    </div>
                </main>
            </div>
        )
    }

}