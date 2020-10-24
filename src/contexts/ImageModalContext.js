import { createContext, useMemo, useState } from 'react'

export const ImageModalContext = createContext({})

export const ImageModalProvider = ({ children }) => {
  const [imageURLToShow, setImageURLToShow] = useState('')

  const isActive = useMemo(() => imageURLToShow !== '', [imageURLToShow])

  const handleCloseModal = () => setImageURLToShow('')

  return (
    <ImageModalContext.Provider value={{ setImageURLToShow }}>
      {children}
      <div className={`modal is-clipped${isActive ? ' is-active' : ''}`}>
        <div class="modal-background"></div>
        <div class="modal-content">
          <figure class="image is-square">
            <img src={imageURLToShow} alt="" />
          </figure>
        </div>
        <button class="modal-close is-large" onClick={handleCloseModal}></button>
      </div>
    </ImageModalContext.Provider>
  )
}
