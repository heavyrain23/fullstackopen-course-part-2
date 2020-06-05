import React, { useState, useEffect } from 'react'
import axios from 'axios'
import ShowCountries from './components/ShowCountries'
import styled from 'styled-components'

const MainWrapper = styled.section`
    display: flex;
    max-width: 700px;
    margin: 0 auto;
    flex-direction: column;
    justify-content: center;
    padding: 30px;
    border: 1px solid black;
    border-radius: 10px;

`;

const Title = styled.h1`
	font-size: 20px;
	margin: 0 auto;
	

`

const Button = styled.button`
  color: palevioletred;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;


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
		<MainWrapper>
		<Title>Countries searching</Title>
		<div>Enter any country</div>
		<form onSubmit = {countries}>
			<input		 
				 onChange = {handleFilterChange}/>
			<Button type='submit'>Search</Button>
				
			
		</form>
		<ShowCountries countries = {countries} 
					   filter = {filter} 
					   showCountyButtonHandler = {showCountyButtonHandler}/>
	   </MainWrapper>
	</div>
	)
}

export default App