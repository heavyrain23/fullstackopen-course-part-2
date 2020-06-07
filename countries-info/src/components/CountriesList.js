import React from 'react'
import styled from 'styled-components'

const StyledList = styled.li`
    list-style: none;
    color: #black;
    margin: 10px;
    padding-right: 5px;
    font-size: 17px;
    font-family: Arial Rounded MT;    
`;

const Button = styled.button`
    color: #black;
    font-size: 15px;
    padding: 3px 10px;
    border: 1px solid #black;
    margin-left: 5px;
    border-radius: 15px;
    font-family: Arial Rounded MT; 
`;

const CountriesList = ({countries,showCountyButtonHandler}) => {

    const showCountries = () => countries.map(country => 
    <StyledList key = {country.name}>{country.name}<button onClick = {showCountyButtonHandler} country={country.name}>show</button></StyledList>
    )

    return (
        <div>
        {showCountries()}
        </div>
    )

}

export default CountriesList