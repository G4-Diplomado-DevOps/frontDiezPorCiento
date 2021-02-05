import React from 'react'
import { useFetch } from '../hooks/useFetch'

export const DiezPorCiento = ( formValues ) => {

    // Linea donde se va a buscar la API y se guarda la informacion en data
    const { data, loading } = useFetch('https://mindicador.cl/api/uf')

    // Modificar los paramestros desestructurados en base a lo que regrese API
    const { version:impuesto, autor:dxc, nombre:saldo } = !!data && data

    const refreshPage = () => {
        window.location.reload();
    }

    return (
        <div>

            { loading && <div className="alert alert-info">Cargando...</div> }

            <div className="card animate__animated animate__fadeIn">
                <div className="card-header bg-primary text-light">
                    <strong>Información del retiro</strong>
                </div>

                <div className="card-body">
                    <label htmlFor="impuesto">Impuesto aplicado al retiro</label>
                    <div className="mb-3">
                        <input
                            type="text"
                            className="form-control"
                            id="impuesto"
                            name="impuesto"
                            readOnly="yes"
                            value={impuesto}
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="impuesto">Monto correspondiente al diez por ciento</label>
                        <input
                            type="text"
                            className="form-control"
                            id="dxc"
                            name="dxc"
                            readOnly="yes"
                            value={dxc}
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="impuesto">Saldo en cuenta AFP</label>
                        <input
                            type="text"
                            className="form-control"
                            id="saldo"
                            name="saldo"
                            readOnly="yes"
                            value={saldo}
                        />
                    </div>
                </div>

                <div className="card-footer text-end">
                    <button className="btn btn-outline-primary" onClick={ refreshPage }>Realizar otra simulación</button>
                </div>
            </div>
        </div>
    )
}