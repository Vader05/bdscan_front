import  React ,{useState} from "react";
import { Datos } from "./datos";
import { Image } from "./graficos";
import { Metrics } from "./metrics";

const API= process.env.REACT_APP_BACKEND


export const Formulario = ()=>{

    const [query,setQuery ] = useState('')
    const [eps,setEps ] = useState('')
    const [min_samples,setSamples ] = useState('')
    const [dataRes, setDataRes] = useState([])
    let [isload, setload] = useState('true')
    const [metricas, setMetricas] = useState('')
    const [image_dbscan, setImageDbscan] = useState('')
    const [image_codo, setImageCodo] = useState('')
    

    const handleSubmit = async (e)=>{
        e.preventDefault()
        console.log({query, eps, min_samples});
        const res = await fetch(`${API}/dbscan_model`,{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify({
                query,
                eps,
                min_samples
            })
        })
        const data = await res.json()
        setDataRes(data.data)
        setImageDbscan(data.graphic_dbscan)
        setImageCodo(data.graphic_method_codo)
        setMetricas(data.metricas)
        setload(false)
    }

    return(
        <div className="row p-4">
            <div className="col-md-4 md-3">
                <form className="form-control border" onSubmit={handleSubmit}>
                    <div className="form-group">
                        
                        <textarea type= "text" 
                                onChange={e=> setQuery(e.target.value)}
                                value={query}
                                className="form-control m-1"
                                placeholder="Ingrese la query"
                                autoFocus
                        />
                    </div>
                    <div className="form-group">
                        <input type= "number" 
                                onChange={e=> setEps(e.target.value)}
                                value={eps}
                                className="form-control m-1"
                                placeholder="Ingrese el eps"
                        />
                    </div>
                    <div className="form-group">
                        <input type= "number" 
                                onChange={e=> setSamples(e.target.value)}
                                value={min_samples}
                                className="form-control m-1"
                                placeholder="Ingrese min samples"
                        />
                    </div>
                    <button className="btn btn-primary mt-3">Enviar</button>
                </form>
            </div>
            <div hidden={isload} className="col-md-5 md-3" >
                <Datos  data = {dataRes}></Datos>
            </div>
            <div hidden={isload} className="col-md-3 md-3" >
                <Metrics  metricas = {metricas}></Metrics>
            </div>
            <Image hidden={isload} dbscan={image_dbscan} codomethod={image_codo}></Image>
            
        </div>

    )
}