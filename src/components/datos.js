import React, { Component } from "react";

export class Datos extends Component {

    render() {
        const tablescroll = {
            position: 'relative',
            height: '300px',
            overflow: 'auto',
            display: 'block',
            fontSize: '12px'
        }
        const theadfix = {
            position: 'sticky',
            top: '0',
            left: '0',
        }
        return (
            <div className="table-responsive">
                <table className="table table-striped table-bordered table-sm" style={tablescroll}>
                    <thead style={theadfix} className="table-dark">
                        <tr>
                            {this.props.numColumn.map((columna,i) => {
                                return  (  <th>Campo {i+1}</th>)      
                            })}
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.data.map((element) => (
                            <tr>
                                {Object.values(element).map((objeto)=>(
                                    <td>{objeto}</td> 
                                ))}  
                            </tr>
                        ))
                        }
                    </tbody>
                </table>

            </div>
        )

    }
}

//select distinct o.htitulo_cat, o.htitulo from webscraping w inner join oferta o on (w.id_webscraping=o.id_webscraping) where o.id_estado is null order by 1,2 limit 500;