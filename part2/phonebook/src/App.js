import React, { useState } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'

import axios from 'axios'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filterString, setFilterString] = useState('')
  const [showAll, setShowAll] = useState(true)

  const hook = () => {
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        setPersons(response.data)
      })
  }

  useState(hook, [])

  const handleNameInputChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberInputChange = (event) => {
    setNewNumber(event.target.value)
  }

  // event listener for submit button
  const addPerson = (event) => {
    event.preventDefault();

    if (persons.find(person => person.name === newName) === undefined) {
      const personObject = {
        name: newName,
        number: newNumber,
        show: true
      }

      setPersons(persons.concat(personObject))
      setNewName('')
      setNewNumber('')
    }
    else {
      alert(`${newName} is already added to the phonebook`)
    }
  }

  const handleFilterInputChange = (event) => {
    setFilterString(event.target.value)
    setShowAll(filterString.length === 0 ? true : false)
  }

  const personsToShow = showAll
    ? persons
    : persons.filter(
        person => person.name.toLowerCase().includes(filterString)
      )

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter value={filterString} onChange={handleFilterInputChange} />

      <h2>Add a new</h2>
      <PersonForm
        name={newName}
        number={newNumber}
        onNameChange={handleNameInputChange}
        onNumberChange={handleNumberInputChange}
        onClick={addPerson}
      />

      <h2>Numbers</h2>
      <Persons persons={personsToShow} />
    </div>
  )
}

export default App
