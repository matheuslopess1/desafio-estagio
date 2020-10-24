import { createContext, useState } from 'react'

export const PEOPLE_PER_PAGE = 10

export const PeopleContext = createContext({})

export const PeopleProvider = ({ children }) => {
  const [people, setPeople] = useState([])
  const [actualPage, setActualPage] = useState(1)

  const value = { people, setPeople, pagination: { actualPage, setActualPage } }

  return (
    <PeopleContext.Provider value={value}>
      {children}
    </PeopleContext.Provider>
  )
}
