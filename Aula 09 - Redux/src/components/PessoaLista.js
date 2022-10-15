import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Button } from 'primereact/button'
import { selecionarPessoa } from '../actions'

class PessoaLista extends Component {
    render() {
        console.log(this.props)
        return (
            this.props.pessoas.map((pessoa => (
                //filhos em linha, margem abaixo de cada um, borda, centralizado horizontalmente
                <div key={pessoa.nome} className='flex flex-row mb-2 w-6 border border-round border-1 border-400 justify-content-center'>
                    {/* padding, largura */}
                    <div className='p-2 w-6'>
                        <p className='text-center'>
                            {pessoa.nome}
                        </p>
                    </div>
                    {/* flex e centralizado nos dois eixos */}
                    <div className='flex flex-row justify-content-center align-items-center'>
                        <Button 
                            icon='pi pi-info-circle'
                            className='p-button-rounded'
                            onClick={() => this.props.selecionarPessoa(pessoa)}
                        />
                    </div>
                </div>
            )))
        )
    }
}

//esse nome é uma convenção apenas
const mapStateToProps = (state) => {
    console.log(state)
    return {pessoas: state.pessoas}
}

//A função connect é chamada
//Ela recebe mapStateToProps como parâmetro
//a expressão connect(mapStateToProps) resulta em uma função
//ela é chamada com PessoaLista como parâmetro
//O props de PessoaList passa a ter acesso ao estado

//export default connect(mapStateToProps)(PessoaLista) //linha que resume as próximas

//talvez mais didático
const resultadoDaConnect = connect(
    mapStateToProps,
    {selecionarPessoa}
)
//esta função tem acesso ao estado e ao componente
//assim, ela pode torná-lo disponível via props do componente
export default resultadoDaConnect(PessoaLista)