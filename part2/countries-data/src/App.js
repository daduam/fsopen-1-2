import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Filter from './components/Filter'
import CountryList from './components/CountryList'


const App = () => {
  const [countries, setCountries] = useState([])
  const [filterString, setFilterString] = useState('Switzerland')

  const hook = () => {
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => {
        // console.log(response.data)
        setCountries(response.data)
      })
  }

  useEffect(hook, [])

  const countriesToShow = countries.filter(
    (country) => country.name.toLowerCase().includes(filterString.toLowerCase())
  )

  const handleFilterInputChange = (event) => {
    // console.log(event.target.value)
    setFilterString(event.target.value)
  }

  return (
    <div>
      <Filter value={filterString} onChange={handleFilterInputChange} />
      <CountryList countries={countriesToShow} />
    </div>
  )
}

export default App
