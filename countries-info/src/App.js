import React, { useState, useEffect } from 'react'
import axios from 'axios'
import CountriesList from './components/CountriesList'

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

const showCountyButtonHandler = (event) => {
	setFilter(event.target.attributes.country.value)
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
	<CountriesList countries={countries}
				   filter={filter} 
				   showCountyButtonHandler = {showCountyButtonHandler} />
	</div>
	)
}

export default App