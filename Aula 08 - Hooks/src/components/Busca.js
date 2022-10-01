import React, { useEffect, useState } from "react";
import axios from "axios";
import { InputText } from "primereact/inputtext";

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
        // chama a função
        fazBusca()
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
                        </div>
                        {/* padding */}
                        <div className="p-2">
                            {resultado.snippet}
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default Busca