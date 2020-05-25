import React from 'react'

const CountriesList = ({countries,showCountyButtonHandler}) => {

    const showCountries = () => countries.map(country => 
    <li key = {country.name}>{country.name}<button onClick = {showCountyButtonHandler} country={country.name}>show</button></li>
    )

    return (
        <div>
        {showCountries()}
        </div>
    )

}

export default CountriesList