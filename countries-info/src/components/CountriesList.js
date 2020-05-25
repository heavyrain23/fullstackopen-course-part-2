import React, { useState, useEffect } from 'react'

const CountriesList = ({countries,filter, showCountyButtonHandler}) => {

    const showCountries = () => countries.map(country => 
    <li key = {country.name}>{country.name}<button onClick = {showCountyButtonHandler}>show</button></li>
    )

    return (
        <div>
        {showCountries()}
        </div>
    )

}

export default CountriesList