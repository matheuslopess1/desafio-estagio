import { useState, useContext } from 'react'
import { FaSync } from "react-icons/fa"
import { PeopleContext } from '../contexts'
import { getPeopleFromAPI } from '../services'

export default function Form() {
  const [amount, setAmount] = useState('')

  const handleChange = event => setAmount(event.target.value)
  const { setPeople } = useContext(PeopleContext)

  const handleSubmit = event => {
    event.preventDefault()
    console.log('handleSubmit?')
    getPeopleFromAPI(amount).then(setPeople)
  }

  return (
    <form onSubmit={handleSubmit} className="pb-5">
      <div className="field">
        <div className="field is-grouped">
          <div className="control">
            <div className="select">
              <select onChange={handleChange} value={amount}>
                <option value="">Nº de Pessoas</option>
                <option>10</option>
                <option>25</option>
                <option>50</option>
                <option>100</option>
              </select>
            </div>
          </div>
          <div className="control">
            <button className="button is-primary" type="submit">
              <span className="icon is-small">
                <FaSync />
              </span>
              <span>Atualizar</span>
            </button>
          </div>
        </div>
      </div>
    </form>
  )
}