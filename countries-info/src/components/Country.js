import React from 'react'

const Country = ({country}) => {

    const languages = () => 
        country.languages.map(language =>
            <li key = {language.iso639_1}>{language.name} </li>)
    
    
   return (
       <>
       <div>
           <h2>{country.name}</h2>
           <p>
                Region: {country.region} <br/>
			    Capital city: {country.capital} <br />
			    Populatin: {country.population}
           </p>
           <h3>Languages</h3>
           {languages()}
       </div>
       <br />
       <img src={country.flag} alt={country.name} width="100px" />
       </>
   )

}


export default Country