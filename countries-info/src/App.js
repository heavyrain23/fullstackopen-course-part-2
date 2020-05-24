import React, { useState, useEffect } from 'react'
import axios from 'axios'

const App = () => {
	const [countries, setCountries] = useState([])
	const [filter, setFilter] = useState('')


useEffect(() => {
	axios.get('https://restcountries.eu/rest/v2/all')
	.then(response => {
		setCountries(response.data)
	})
}, [])


const handleFilterChange = (event) => {
	setFilter(event.target.value)
}





return (
	<div>
		<h1>Countries searching</h1>
		<div>Enter any country</div>
		<form onSubmit = {setFilter}>
			<input
				 value = {filter}
				 onChange = {handleFilterChange}/>
			<div>
				<button type='submit'>Search</button>
			</div>
		</form>
	</div>
	)
}

export default App