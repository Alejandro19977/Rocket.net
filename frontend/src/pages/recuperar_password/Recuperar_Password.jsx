import React from "react";
import { Link } from "react-router-dom";
import "./Recuperar_Password.css";
import { FaMagnifyingGlass } from "react-icons/fa6";

function Recuperar_Password() {
  return (
    <div className="contenedor-recuperar">
      <form className="formulario-recuperar">
        <div className="titulo-recuperar">
          <h1>¿Has olvidado tu contraseña?</h1>
          <p>Ingresa la información correspondiente en los campos de abajo</p>
        </div>

        <div className="campos">
          <div className="campo">
            <label className="label" htmlFor="usuario">
              Ingresa tu usuario
            </label>

            <div className="field">
              <input
                name="usuario"
                id="usuario"
                type="text"
                className="input withIcon"
              />
              <FaMagnifyingGlass className="busqueda-icon" />
            </div>
          </div>

          <div className="campo">
            <label className="label" id="pregunta" htmlFor="respuesta">
              Pregunta de seguridad
            </label>

            <div className="field">
              <input
                name="respuesta"
                id="respuesta"
                type="text"
                className="input"
              />
            </div>
          </div>
        </div>

        <div className="titulo-recuperar">
          <h1>Nueva contraseña</h1>
          <p>
            <b>Recordatorio</b> escribe dígitos en mayúscula, tipo alfanuméricos y carácteres
            especiales para mayor seguridad en la contraseña
          </p>
        </div>

        <div className="campos">
          <div className="campo">
            <label className="label" htmlFor="password">
              nueva contraseña
            </label>
            <div className="field">
              <input
                name="password"
                id="password"
                type="password"
                className="input"
              />
            </div>
          </div>

          <div className="campo">
            <label className="label" htmlFor="confirmpassword">
              repite la contraseña
            </label>
            <div className="field">
              <input
                name="confirmpassword"
                id="confirmpassword"
                type="password"
                className="input"
              />
            </div>
          </div>
        </div>

        <button className="btn">Guardar cambios</button>
      </form>

      <Link to="/Login" className="link">
        Volver al inicio de sesion
      </Link>
    </div>
  );
}

export default Recuperar_Password;
