import { useContext, useMemo } from "react"
import { PeopleContext, PEOPLE_PER_PAGE } from "../contexts"

export default function Table () {
  const { people, pagination: { actualPage } } = useContext(PeopleContext)

  const peoplePaginated = useMemo(() => {
    const indexOfLastPerson = actualPage * PEOPLE_PER_PAGE
    const indexOfFirstPerson = indexOfLastPerson - PEOPLE_PER_PAGE
    return people.slice(indexOfFirstPerson, indexOfLastPerson)
  }, [people, actualPage])
  return (
    <div className="table-container">
      <table className="table is-fullwidth">
        <thead>
            <tr>
                <th>Foto</th>
                <th>Nome</th>
                <th>Sobrenome</th>
                <th>Idade</th>
                <th>Cidade</th>
            </tr>
        </thead>
        <tbody>
          {peoplePaginated.map((person, index) => (
            <tr key={`person-${index}`}>
              <td><img src={person.photoURL} alt="" /></td>
              <td>{person.firstName}</td>
              <td>{person.lastName}</td>
              <td>{person.age}</td>
              <td>{person.city}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}