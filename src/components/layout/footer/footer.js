/* Vendor imports */
import React from 'react'
import { FaGithub } from 'react-icons/fa'
/* App imports */
import style from './footer.module.less'

const Footer = () => {
  function getDate() {
    return new Date().getFullYear()
  }
  return (
    <div className={style.container}>
      <p>Por fptbb, {getDate()} - <a href="https://github.com/Fptbb/Blog-Do-Fp" ><FaGithub size="16" /> Codigo Fonte</a></p>
    </div>
  )
}

export default Footer