import React, { useEffect, useState } from 'react'
import { useUserForm } from '../../hooks/custom'

export const UserForm = () => {

    const {form, setForm, handleChanges} = useUserForm();

    //Saber si la contraseña tiene igualdad
    const [areEqueals, setAreEqueals] = useState(true)
    //Atrpar la clave de comfirmación
    const [passwordConfirmation, setPasswordConfirmation] = useState();

    const handlePasswordConfirmation = (e) =>{
        setPasswordConfirmation(e.target.value);
    }

    //Analizar cambios
    useEffect(() => {
      const {password} = form;
        setAreEqueals(password === passwordConfirmation);
    }, [passwordConfirmation])
    

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(form);

    }

  return (
  <div className="w-25 mx-auto mt-5"> 
        <h4 className="mb-4">Humano registrate! antes de morir</h4>
        <form className="needs-validation" noValidate>
            <div className="row g-3">

                <div className="col-12">
                  <label htmlFor="email" className="form-label" >
                    Email
                  </label>
                  <input 
                  type="email"
                  className="form-control"
                  placeholder="noah@gmail.com"
                  name="email"
                  onChange={handleChanges}
                  />
                </div>

                <div className="col-12">
                  <label htmlFor="address" className="form-label" >
                    Clave
                  </label>
                  <input 
                  type="text"
                  className="form-control"
                  placeholder="Clave"
                  name="password"
                  onChange={handleChanges}
                  />
                </div>

                <div className="col-12">
                  <label htmlFor="password2" className="form-label" >
                    Repetir clave
                  </label>
                  <input 
                  type="text"
                  className="form-control"
                  placeholder="Repetir clave"
                  onChange={handlePasswordConfirmation}
                  />
                </div>


                   {!areEqueals && (
                      <div className="form-text list-group-item-danger">
                        Las claves no son iguales
                      </div>
                   )}
                  <hr className="mt-4"/>

                  <button 
                  disabled={!areEqueals}
                  className="w-100 btn btn-primary btn-lg"
                  type="submit"
                  onClick={handleSubmit}
                  >
                      Registrarme
                  </button>
            </div>
        </form>
  </div>
  )
}
