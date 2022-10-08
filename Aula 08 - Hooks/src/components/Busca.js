import React, { useEffect, useState } from "react";
import axios from "axios";
import { InputText } from "primereact/inputtext";
import striptags from 'striptags'
import { Button } from "primereact/button"

const Busca = () => {
    const [termoDeBusca, setTermoDeBusca] = useState('React')
    const [resultados, setResultados] = useState([])
    console.log(resultados)
    useEffect (() => {
        // define a função
        const fazBusca = async () => {
            const {data} = await axios.get(
                'https://en.wikipedia.org/w/api.php', {
                    params: {
                        action: 'query',
                        list: 'search',
                        format: 'json',
                        // instruindo o navegador a permitir
                        // conteúdo de qualque origem
                        origin: '*',
                        srsearch: termoDeBusca
                    }
                }
            )
            setResultados(data.query.search)
        }
        if (termoDeBusca && !resultados.length){
            fazBusca()
        }
        else {
            const timeoutID = setTimeout(() => {
                // execução condicional de novo
                if (termoDeBusca)
                    fazBusca()
            }, 1000)
            return () => {
                clearTimeout(timeoutID)
            }
        }
    }, [termoDeBusca])
    return (
        <div>
            <span className="p-input-icon-left">
                <i className="pi pi-search"></i>
                <InputText 
                    onChange={(e) => setTermoDeBusca(e.target.value)}
                />
            </span>
            {
                resultados.map((resultado) => (
                    <div
                        key = {resultado.pageid}
                        // margem e borda
                        className = "my-2 border border-1 border-400">
                        <div
                        // borda, padding e ajuste textual
                            className="border-bottom border border-1 border-400 p-2 text-center font-bold">
                            {resultado.title}
                            <span>
                                <Button 
                                    icon = "pi pi-send"
                                    className = "ml-2 p-button-rounded p-button-secondary"
                                    onClick = {() => window.open(`https://en.wikipedia.org?curid=${resultado.pageid}`)}
                                />
                            </span>
                        </div>
                        {/* padding */}
                        <div className="p-2">
                            {striptags(resultado.snippet)}
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default Busca