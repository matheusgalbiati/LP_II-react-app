import React from "react";
import PessoaDetalhe from "./PessoaDetalhe";
import PessoaLista from "./PessoaLista";

const App = () => {
    return (
        <div className="grid border border-1 border-400 m-2">
            <div className="col-6">
                <PessoaLista />
            </div>
            <div className="col-6">
                <PessoaDetalhe />
            </div>
        </div>
    )
}

export default App