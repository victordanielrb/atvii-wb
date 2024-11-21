import React from 'react';
import { Component } from "react";
import ListaProduto from "./listarProduto";
import Sidebari from "./sidebar";
type props = {
    func: Function
}
const  MainPage : React.FC<props> = ({func,children})=> {
    
        return (
            <div className="m-auto" style={{ display: 'flex', height: '100vh', overflow: 'hidden', margin: 'auto' }}>
                <Sidebari func={func} />
                <main className="border-4 " style={{ padding: 0, flex: 1, overflow: 'hidden' }}>
                    <div className="" style={{ height: '100%', overflow: 'hidden' }}>
                    {children}
                    </div>
                </main>
            </div>
        )
    }

export default MainPage;