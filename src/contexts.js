import { createContext, useState } from 'react'

export const PeopleContext = createContext({})

export const PeopleProvider = ({ children }) => {
    const [people, setPeople] = useState([])

    return (
        <PeopleContext.Provider value={{ people, setPeople }}>
            {children}
        </PeopleContext.Provider>
    )
}
