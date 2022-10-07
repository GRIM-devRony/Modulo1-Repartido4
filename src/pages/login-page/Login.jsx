import React, { useState } from "react"
import "./Login.css"
import { useNavigate } from "react-router-dom"
const Login = () => {
	const navigate = useNavigate()
	const [Usuario, setUsuario] = useState("")
	const [Pass, setPass] = useState("")

	const handleChange = (e, callback) => {
		const value = e.target.value
		callback(value)
	}

	const handleSubmit = (e) => {
		e.preventDefault()
		if (Pass === "1234" && Usuario === "matea") {
			localStorage.setItem("user", true)
			return navigate("/Tareas")
		} else {
			alert("Porfavor ingrese, nombre de usuario y contraseña correctos.")
		}
	}
	console.log(Pass, Usuario)
	return (
		<div className="formulario__login">
			<form id="formulario" onSubmit={handleSubmit}>
				<h2>LOGIN</h2>
				<input
					value={Usuario}
					onChange={(e) => {
						handleChange(e, setUsuario)
					}}
					type="text"
					id="usuario"
					name="usuario"
					className="input"
					placeholder="Usuario"
				/>

				<input
					onChange={(e) => {
						handleChange(e, setPass)
					}}
					value={Pass}
					type="password"
					id="pass"
					name="password"
					className="input"
					placeholder="Contraseña"
				/>
				<div id="check">
					<input type="checkbox" /> &nbsp; <small>Recordar contraseña</small>
				</div>

				<button id="boton" className="login-button">
					LOG IN
				</button>
			</form>
		</div>
	)
}

export default Login
