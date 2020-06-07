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
	font-family: Berlin Sans FB Demi;
`;

const Title = styled.p`
	font-size: 25px;
	margin: 0 auto;
	font-family: Berlin Sans FB Demi;
	color: #0e189f;
	
`;

const Subtitle = styled.p`
	color: #0e189f;
	margin: 0 auto;
	padding-top: 10px;
`;

const Form = styled.div`
	margin: 0 auto;
`

const Button = styled.button`

  color: #0e189f;
  font-size: 15px;
  margin: 15px;
  padding: 5px 10px;
  border: 1px solid #0e189f;
  border-radius: 15px;
  font-family: Berlin Sans FB Demi;
  
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
				<Subtitle>Enter the country</Subtitle>
				<Form>
					<form onSubmit={countries}>
						<input
							onChange={handleFilterChange} />
						<Button type='submit'>Search</Button>


					</form>
				</Form>
				<ShowCountries countries={countries}
					filter={filter}
					showCountyButtonHandler={showCountyButtonHandler} />
			</MainWrapper>
		</div>
	)
}

export default App