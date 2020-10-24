export default function Container ({ children }) {
    return (
      <div className="section">
        <div className="container">
          {children}
        </div>
      </div>
    )
}
