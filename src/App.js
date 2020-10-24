import { useEffect, useContext } from 'react'
import { getPeopleFromAPI } from './services'
import { PeopleContext } from './contexts'
import Container from './components/Container'
import Header from './components/Header'
import Table from './components/Table'
import Form from './components/Form'

export default function App() {
  const { setPeople } = useContext(PeopleContext)
  
  useEffect(() => {
    getPeopleFromAPI().then(setPeople)
  }, [setPeople])

  return (
      <Container>
        <Header />
        <Form />
        <Table />
      </Container>
  )
}
