import { useState } from 'react'
import { useForm } from '../hooks/useForm'
import { DiezPorCiento } from './DiezPorCiento'
import { Footer } from './Footer'

export const App = () => {

  const [formularioValido, setFormularioValido] = useState(false)

  const [formValues, handleInputChange] = useForm({
      sueldo: '',
      ahorro: ''
  })

  const { sueldo, ahorro } = formValues

  const handleSubmit = (e) => {
    
    e.preventDefault();

    setFormularioValido(true)

  }

  return (
    <div className="container">

      <h1>Calculadora 10 por ciento</h1>
      <hr/>

      <div className="row">
        <div className="col-md-4">

          <form onSubmit={handleSubmit}>
            <div className="card animate__animated animate__fadeIn">
              <div className="card-header bg-primary text-light">
                <strong>Datos del trabajador</strong>
              </div>

              <div className="card-body">
                <div className="form-floating mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="sueldo"
                    name="sueldo"
                    placeholder="Ej: 850000"
                    value={sueldo}
                    onChange={handleInputChange}
                    autoComplete="off"
                  />
                  <label htmlFor="inputSueldo">Ingrese su sueldo</label>
                </div>

                <div className="form-floating mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="ahorro"
                    name="ahorro"
                    placeholder="Ej: 4500000"
                    value={ahorro}
                    onChange={handleInputChange}
                    autoComplete="off"
                  />
                  <label htmlFor="inputAhorro">Ingrese monto ahorrado</label>
                </div>
              </div>

              <div className="card-footer text-end">
                <button className="btn btn-outline-primary" onClick={handleSubmit}>Calcular</button>
              </div>

            </div>
          </form>
          
        </div>
        <div className="col">

          { formularioValido && <DiezPorCiento formValues={ formValues }/> }
          
        </div>
      </div>

      <Footer/>
    </div>
  )

}