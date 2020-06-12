import React from 'react'


const Country = ({ country }) => {
  return (
    <div>
      <h1>{country.name}</h1>
      <div>
        <div>capital {country.capital}</div>
        <div>population {country.population}</div>
      </div>
      <div>
        <h2>languages</h2>
        <ul>
          {country.languages.map((language) =>
            <li key={language.name}>{language.name}</li>
          )}
        </ul>
      </div>
      <div>
        <img alt={`flag of ${country.name}`} src={country.flag} width="100px" />
      </div>
    </div>
  )
}

export default Country
