import React from 'react'

const Footer = () => {
const { state } = "useAppContext"();
const { theme } = state;

  return (
    <footer className={`footer ${theme}-theme`}>
    <p>© 2024 SaludApp. Todos los derechos reservados.</p>
    <img src="./img/DH.png" alt='DH-logo' />
    </footer>
  )
}

export default Footer
