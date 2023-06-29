import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Login } from "./Pages/Login.jsx"
import {
	Route,
	Routes,
	BrowserRouter
} from 'react-router-dom'
import { Register } from './Pages/Register.jsx'
import "./index.css"

ReactDOM.createRoot(document.getElementById('root')).render(
	<BrowserRouter>
		<Routes>
			<Route path='/' element={<App />} />
			<Route path='login' element={<Login />} />
			<Route path='register' element={<Register />} />
		</Routes>
	</BrowserRouter>
)
