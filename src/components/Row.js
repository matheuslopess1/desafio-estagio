import { useContext } from "react"
import { ImageModalContext } from "../contexts/ImageModalContext"

export default function Row ({ person }) {
    const { setImageURLToShow } = useContext(ImageModalContext)
  
    const handleToggleModal = () => setImageURLToShow(person.largePhotoURL)
  
    return (
      <tr>
        <td>
          <img src={person.photoURL} alt="" onClick={handleToggleModal} style={{ cursor: 'pointer' }} />
        </td>
        <td>{person.firstName}</td>
        <td>{person.lastName}</td>
        <td>{person.age}</td>
        <td>{person.city}</td>
      </tr>
    )
  }