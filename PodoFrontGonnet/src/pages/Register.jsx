import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import ContextoAdministrador from "../context/ContextLoginRegister";
import useTitle from "./../hooks/useTitle";
import "../pages/css/registro.css";

const Register = () => {
  useTitle({ title: "Registro" });

  const { SubmitRegistro, AuthuTokenYUsiario, usuarioLogeado } = useContext(
    ContextoAdministrador
  );

  const [form, setform] = useState({
    userName: "",
    name: "",
    email: "",
    password: "",
    repeatePassword: "",
  });

  const handleChange = (e) => {
    setform({
      ...form,
      [e.target.name]: e.target.value,
    });
    console.log(form);
  };

  return (
    <main className="d-flex justify-content-center align items-center mt-5">
      <form className="form-register">
        <div className="form-border-inset">
          <p className="form-vertical-advice">Ingrese sus datos</p>
          <div className="register-input">
            <input
              type="text"
              placeholder="Nombre de usuario"
              id="registerUserName"
              name="userName"
              onChange={handleChange}
            />
            <input
              type="text"
              placeholder="Nombre"
              id="registerName"
              name="name"
              onChange={handleChange}
            />
            <input
              type="text"
              placeholder="Email"
              id="registerEmail"
              name="email"
              onChange={handleChange}
            />
            <input
              type="text"
              placeholder="Contraseña"
              id="registerPassword"
              name="password"
              onChange={handleChange}
            />
            <input
              type="text"
              placeholder="repetir contraseña"
              id="registerPassword"
              name="repeatePassword"
              onChange={handleChange}
            />
            <div className="register-buttons">
              <button
                type="submit"
                className="registrobutton"
                onClick={(e) => {
                  SubmitRegistro(e, form);
                }}
              >
                Registrarse
              </button>
              <button type="submit" className="registrobutton">
                <Link to={"/"} className="Linkclass">
                  Ir a Inicio
                </Link>
              </button>
            </div>
          </div>
        </div>
      </form>
    </main>
  );
};

export default Register;
