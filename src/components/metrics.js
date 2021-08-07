import React from "react";

export const Metrics = (props) => {

    return (

        <div className="col-md-3 card" style={{ width: "18rem" }}>
            <div class="card-header">
                Métricas
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">{`Coeficiente: ${props.metricas.Coefficient}`}</li>
                <li class="list-group-item">{`Clusters: ${props.metricas.n_clusters}`}</li>
                <li class="list-group-item">{`Outliers: ${props.metricas.n_noise}`}</li>
            </ul>
        </div>


    )
}