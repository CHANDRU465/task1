import React from 'react'

const Footer = () => {
    const today = new Date();
  const year = today.getFullYear();
  return (
    <div>
      <footer className="footer">
        <h4>@Radome Technology {year}</h4>
      </footer>
    </div>
  )
}

export default Footer
