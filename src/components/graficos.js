import React from "react";

export const Image = (props) => {

    return (
        <div className="container">
            <h2 className="text-center mt-3">Visualización de datos</h2>
            <div className="row">
                <div className="col md-4 mt-3" >
                    <img className="img-thumbnail img-rounded" src={`data:image/png;base64,${props.dbscan}`} alt="Gráfica DBSCAN"></img>
                </div>
                <div className="col md-4 mt-3" >
                    <img className="img-thumbnail img-rounded" src={`data:image/png;base64,${props.codomethod}`} alt="Gráfica Método Codo"></img>
                </div>
            </div>
        </div>
    )
}