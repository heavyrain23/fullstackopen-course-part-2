import React from 'react'
import styled from 'styled-components'

const CountyContainer = styled.div`
    margin: 0 auto;
    padding-top: 10px
    weight: 300px;
`;

const Title = styled.h1`
    font-size: 20px;
    text-transform: uppercase;   
   
`;

const MainText = styled.p`
    text-transform: uppercase;  
    font-weight: 10px;
     
`;







const Country = ({ country }) => {

    const languages = () =>
        country.languages.map(language =>
            <li key={language.iso639_1}>{language.name} </li>)


    return (
        <CountyContainer>
            
                <Title>{country.name}</Title>
                
                  Region: {country.region}  <br/>
                  Capital city: {country.capital} <br/>
                  Populatin: {country.population}

                    <h3>Languages</h3>
                    {languages()}
       
                <br />
                
                <img src={country.flag} alt={country.name} width="140px" />
                
        </CountyContainer>
    )

}


export default Country