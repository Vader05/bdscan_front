import React, { useEffect, useState } from "react";

export const Metrics = (props) => {

    const tablescroll = {
        position: 'relative',
        height: '300px',
        overflow: 'auto',
        fontSize: '12px'
    }
    const theadfix = {
        position: 'sticky',
        top: '0',
        left: '0',
    }


    return (

        
        <div className="row">
            <div className="col-8 table-responsive">
                <table className="table table-striped table-bordered table-sm" style={tablescroll}>
                    <thead style={theadfix} className="table-dark">
                        <tr>
                            <td>CLUSTER</td>
                            <td>CANTIDAD</td>
                            <td>PORCENTAJE</td>
                        </tr>
                    </thead>
                    <tbody>
                        {props.metricas_detalles.map((element) => (
                            <tr>
                                <td>{element.clusters}</td>
                                <td>{element.cantidad}</td>
                                <td>{parseFloat(element.porcentaje *100)} %</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className="card col" style={{ width: "100%" }}>
                <div className="card-header ">
                    Métricas
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">{`Coeficiente: ${props.metricas.Coefficient}`}</li>
                    <li className="list-group-item">{`Clusters: ${props.metricas.n_clusters}`}</li>
                    <li className="list-group-item">{`Outliers: ${props.metricas.n_noise}`}</li>
                </ul>
            </div>
        </div>


    )
}