import React from 'react'
import './styles.css'

function Button({ children, ...restProps }) {
  return (
    <button {...restProps}>
      {children}
    </button>
  )
}

export default Button
