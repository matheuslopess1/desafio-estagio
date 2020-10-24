import { useEffect, useContext } from 'react'
import { getPeopleFromAPI } from './services'
import { PeopleContext } from './contexts'
import Container from './components/Container'
import Header from './components/Header'
import Table from './components/Table'
import UpdateForm from './components/UpdateForm'

export default function App() {
  const { setPeople } = useContext(PeopleContext)
  
  useEffect(() => {
    getPeopleFromAPI().then(setPeople)
  }, [setPeople])

  return (
      <Container>
        <Header />
        <UpdateForm />
        <Table />
      </Container>
  )
}
