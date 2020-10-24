import { useContext, useMemo } from "react"
import { PeopleContext, PEOPLE_PER_PAGE } from "../contexts/PeopleContext"

export default function Pagination () {
    const { people, pagination } = useContext(PeopleContext)
    const { actualPage, setActualPage } = pagination
  
    const totalPages = useMemo(() => {
      let pages = Math.floor(people.length / PEOPLE_PER_PAGE)
      if (people.length % PEOPLE_PER_PAGE > 0) pages++
      return pages
    }, [people])
  
    const hasPreviousPage = useMemo(() => actualPage > 1, [actualPage])
    const hasNextPage = useMemo(() => actualPage < totalPages, [actualPage, totalPages])
  
    const handleNextPage = () => setActualPage(actualPage + 1)
    const handlePreviousPage  = () => setActualPage(actualPage - 1)
    
    return (
      <div className="level is-mobile">
        <div className="level-item">
          <button
            onClick={handlePreviousPage}
            disabled={!hasPreviousPage}
            className="button"
          >
            Anterior
          </button>
        </div>
        <div className="level-item">
          <span>Página {actualPage} de {totalPages}</span>
        </div>
        <div className="level-item">
          <button
            onClick={handleNextPage}
            disabled={!hasNextPage}
            className="button"
          >
            Próximo
          </button>
        </div>
      </div>
    )
  }