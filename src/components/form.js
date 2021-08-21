import React, { useState } from "react";
import { Datos } from "./datos";
import { Image } from "./graficos";
import { Metrics } from "./metrics";
import { Spinner } from "./spinner";

const API = process.env.REACT_APP_BACKEND


export const Formulario = () => {

    const [query, setQuery] = useState('')
    const [eps, setEps] = useState('')
    const [min_samples, setSamples] = useState('')
    const [dataRes, setDataRes] = useState([])
    let [isload, setload] = useState('true')
    const [metricas, setMetricas] = useState('')
    const [metricas_detalles, setMetricasDetalles] = useState([])
    const [image_dbscan, setImageDbscan] = useState('')
    const [image_codo, setImageCodo] = useState('')
    const [numColumn, setNumColumn] = useState([])

    const [loading, setLoading] =useState(null);


    const handleSubmit = async (e) => {
        e.preventDefault()
        setLoading(true);
        // console.log({ query, eps, min_samples });
        const res = await fetch(`${API}/dbscan_model`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                query,
                eps,
                min_samples
            })
        })
        const data = await res.json()
        setDataRes(data.data)
        console.log(dataRes)
        setImageDbscan(data.graphic_dbscan)
        setImageCodo(data.graphic_method_codo)
        setMetricas(data.metricas)
        setMetricasDetalles(data.metricas_detalles)

        //ORDENAMOS LA LISTA METRICAS DETALLES
        listaOrdenada(data.metricas_detalles)

        setNumColumn(data.numColumn)

        console.log(numColumn)

        setload(false)

        setLoading(false);
    }


    const listaOrdenada=(metricas_detalles)=>{
        const listOrdenada = [...metricas_detalles].sort((a, b) => (a.porcentaje > b.porcentaje ? -1 : a.porcentaje < b.porcentaje ? 1 : 0))
        // actualizo el estado con la nueva lista ya ordenada
        setMetricasDetalles(listOrdenada)
    }


    return (
        <div className="row p-4 d-flex justify-content-center">
            <form className="col-8 bg-gray mb-3" onSubmit={handleSubmit}>
                <div className="form-outline mb-4">
                    <textarea
                        className="form-control"
                        rows="4"
                        type="text"
                        onChange={e => setQuery(e.target.value)}
                        value={query}
                        id="query"
                        autoFocus>
                    </textarea>
                    <label className="form-label" for="query">Query</label>
                </div>

                <div className="form-outline mb-4">
                    <input
                        id="eps"
                        className="form-control"
                        type="number"
                        onChange={e => setEps(e.target.value)}
                        value={eps}
                    />
                    <label className="form-label" for="eps">Epsilon</label>
                </div>

                <div className="form-outline mb-4">
                    <input
                        id="samples"
                        className="form-control"
                        type="number"
                        onChange={e => setSamples(e.target.value)}
                        value={min_samples}
                    />
                    <label className="form-label" for="samples">Minimos ejemplos</label>
                </div>
                <button type="submit" className="btn btn-primary btn-block mb-4">Enviar</button>
            </form>


            {
                loading?<Spinner></Spinner>:null
                
            }

            {/* NAV TAB */}

            <ul className="nav nav-tabs nav-justified mb-3" id="ex1" role="tablist">
                <li className="nav-item" role="presentation">
                    <a
                        className="nav-link active"
                        id="ex3-tab-1"
                        data-mdb-toggle="tab"
                        href="#ex3-tabs-1"
                        role="tab"
                        aria-controls="ex3-tabs-1"
                        aria-selected="true"
                    >Gráficos</a>
                </li>
                <li className="nav-item" role="presentation">
                    <a
                        className="nav-link"
                        id="ex3-tab-2"
                        data-mdb-toggle="tab"
                        href="#ex3-tabs-2"
                        role="tab"
                        aria-controls="ex3-tabs-2"
                        aria-selected="false"
                    >Métricas</a>
                </li>
                <li className="nav-item" role="presentation">
                    <a
                        className="nav-link"
                        id="ex3-tab-3"
                        data-mdb-toggle="tab"
                        href="#ex3-tabs-3"
                        role="tab"
                        aria-controls="ex3-tabs-3"
                        aria-selected="false"
                    >Instancias</a>
                </li>
            </ul>
            

            <div className="tab-content" id="ex2-content">
                <div
                    className="tab-pane fade show active"
                    id="ex3-tabs-1"
                    role="tabpanel"
                    aria-labelledby="ex3-tab-1"
                >
                    <Image hidden={isload} dbscan={image_dbscan} codomethod={image_codo}></Image>
                </div>
                <div
                    className="tab-pane fade"
                    id="ex3-tabs-2"
                    role="tabpanel"
                    aria-labelledby="ex3-tab-2"
                >
                    <div hidden={isload} className="d-flex justify-content-center w-100" >
                        <Metrics metricas={metricas} metricas_detalles={metricas_detalles}></Metrics>
                    </div>
                </div>
                <div
                    className="tab-pane fade"
                    id="ex3-tabs-3"
                    role="tabpanel"
                    aria-labelledby="ex3-tab-3"
                >
                    <div hidden={isload} className="col-md-12 md-3 d-flex justify-content-center" >
                        <Datos data={dataRes} numColumn={numColumn}></Datos>
                    </div>
                </div>
            </div>
            {/* FIN - NAVTAB */}
        </div>

    )
}