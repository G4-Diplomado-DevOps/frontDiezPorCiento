import React from 'react'
import { useFetch } from '../hooks/useFetch'

export const DiezPorCiento = ( valores ) => {

    const {data} = useFetch('https://mindicador.cl/api/uf')

    const { version,autor,codigo } = !!data && data

    return (
        <div>
            <div className="card">
                <div className="card-header">
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
                            value={version}
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
                            value={autor}
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
                            value={codigo}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}