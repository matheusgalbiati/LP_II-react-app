import React from "react"
import { connect } from 'react-redux'
import { Card } from 'primereact/card'

const PessoaDetalhe = (props) => {
    return (
        <Card title="Detalhes">
            <p className="flex flex-row justify-content">Primeiro nome: {props.pessoa?.nome}</p>
            <p className="flex flex-row justify-content">Sobrenome: {props.pessoa?.sobrenome}</p>
            <p className="flex flex-row justify-content">Endereço: {props.pessoa?.endereco}</p>
        </Card>
    )
}

const mapStateToProps = (state) => {
    return {
        //o componente poderá acessar o objeto referenciado por pessoa
        //usando seu objeto props
        pessoa: state.pessoaSelecionada
    }
}

export default connect(mapStateToProps)(PessoaDetalhe)