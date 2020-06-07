import React from 'react'
import Country from './Country'
import CountriesList from './CountriesList'
import styled from 'styled-components'

const Warning = styled.p`
    color: #bb0631;
`

const ShowCountries = ({countries, filter, showCountyButtonHandler}) => {

    let countriesToDisplay = countries
    
	if ( filter ) {
		countriesToDisplay = countries.filter( country => country.name.toLowerCase().includes(filter.toLowerCase()) )
    }
    
    if (countriesToDisplay.length ===1 ) {
        return (<Country country = {countriesToDisplay[0]} />)
    }
   
    if (countriesToDisplay.length < 1 || !filter) {
        return null;
    } 

    if (countriesToDisplay.length > 10) {
        return ( <Warning>To much options!</Warning> )
    }
        
    return (
        <>
        <div>
            <CountriesList countries = {countriesToDisplay} showCountyButtonHandler = {showCountyButtonHandler}/>
        </div>
        </>
    )
    
}  

export default ShowCountries