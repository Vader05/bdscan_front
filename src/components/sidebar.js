import React from 'react'
import { Link } from 'react-router-dom'
import '../style/sidebar.css'
import { Formulario } from './form'
import { Route } from 'react-router'
export const Sidebar = () => {

    return (
        <div>
            <div className="d-flex mt-3" id="wrapper">
            {/* <!-- Sidebar--> */}
            <div className="border-end bg-white" id="sidebar-wrapper">
                <div className="list-group list-group-flush">
                        <a className="list-group-item list-group-item-action list-group-item-light p-3">
                            <Link to="/"> DBSCAN </Link>
                       </a>
                        <a className="list-group-item list-group-item-action list-group-item-light p-3">
                            <Link to="/kmeans"> Kmeans</Link>
                        </a>
                    
                        <a className="list-group-item list-group-item-action list-group-item-light p-3">
                            <Link to="/jerarquico"> Jerárquico</Link>
                        </a>
                    
                </div>
            </div>
            {/* <!-- Page content wrapper--> */}
            <div id="page-content-wrapper">
                {/* <!-- Page content--> */}
                <div className="container-fluid">
                    <Route path="/" exact={true} component={Formulario}></Route>
                </div>
            </div>
        </div>
        </div>
    );
}
