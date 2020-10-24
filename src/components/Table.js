import { useContext } from "react"
import { PeopleContext } from "../contexts"

export default function Table () {
  const { people } = useContext(PeopleContext)

  return (
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
        {people.map((person, index) => (
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
  )
}