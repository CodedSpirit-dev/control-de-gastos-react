import React, { useState } from 'react'
import Mensaje from "./Mensaje"
useState

const NuevoPresupuesto = ({presupuesto, setPresupuesto, setIsValidPresupuesto}) => {

    const [mensaje, SetMensaje] = useState("")
    const handlePresupuesto = (e) => {
        e.preventDefault();
        if(!presupuesto || presupuesto < 0) {
            SetMensaje("No es un presupuesto valido")

            return
        }
        SetMensaje("")
        setIsValidPresupuesto(true)

    }
  return (
    <>
    <div className='contenedor-presupuesto contendedor sombra'>
        <form onSubmit={handlePresupuesto} className='formulario'>
            <div className='campo'>
                <label>Definir presupuesto</label>
                <input
                className='nuevo-presupuesto'
                type="number"
                placeholder='Añade tu presupuesto'
                value={presupuesto}
                onChange={ e => setPresupuesto(e.target.value)}
                />
            </div>
            <input type="submit" value="Añadir"/>

            {mensaje && <Mensaje tipo="error">{mensaje}</Mensaje>}
        </form>
    </div>

    </>
  )
}

    export default NuevoPresupuesto