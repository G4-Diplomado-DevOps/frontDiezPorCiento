import { useForm } from '../hooks/useForm'
import { DiezPorCiento } from './DiezPorCiento'

export const App = () => {


  const [formValues, handleInputChange] = useForm({
      sueldo: '',
      ahorro: ''
  })

  const { sueldo, ahorro } = formValues

  const handleSubmit = (e) => {
    
    e.preventDefault();

  }

  return (
    <div className="container">

      <div className="row">
        <div className="col-md-4">

          <form onSubmit={handleSubmit}>
            <div className="card animate__animated animate__fadeIn">
              <div className="card-header">
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
                <button className="btn btn-primary">Calcular</button>
              </div>

            </div>
          </form>
          
        </div>
        <div className="col">
          <DiezPorCiento valores={ {sueldo, ahorro} }/>
        </div>
      </div>
    </div>
  )

}