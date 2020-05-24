import React, { useState } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: "040-1234567", show: true },
    { name: 'Ada Lovelace', number: '39-44-5323523', show: true },
    { name: 'Dan Abramov', number: '12-43-234345', show: true },
    { name: 'Mary Poppendieck', number: '39-23-6423122', show: true }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filterString, setFilterString] = useState('')
  const [showAll, setShowAll] = useState(true)

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
      <Filter value={filterString} handleChange={handleFilterInputChange} />

      <h2>Add a new</h2>
      <PersonForm
        name={newName}
        number={newNumber}
        handleNameChange={handleNameInputChange}
        handleNumberChange={handleNumberInputChange}
        handleClick={addPerson}
      />

      <h2>Numbers</h2>
      <Persons persons={personsToShow} />
    </div>
  )
}

export default App
