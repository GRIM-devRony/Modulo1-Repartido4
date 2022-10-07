import React from "react"
import { BrowserRouter } from "react-router-dom"
import "./app.css"
import AppRouter from "./router/AppRouter"
const App = () => {
	return (
		<BrowserRouter>
			<div id="app">
				<AppRouter />
			</div>
		</BrowserRouter>
	)
}

export default App
