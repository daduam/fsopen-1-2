import React from 'react'


const Person = ({ person }) => (
  <li>{person.name} {person.number}</li>
)

const Persons = ({ persons }) => (
  <ul>
    {persons.map(person =>
      <Person person={person} key={person.name} />
    )}
  </ul>
)

export default Persons
