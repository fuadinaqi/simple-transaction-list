import React from 'react'
import PropTypes from 'prop-types'
import styles from './Label.module.css'

function Label({ type, name, className, ...restProps }) {
  const cn = `${styles.container} ${styles[type]} ${className}`
  return (
    <div className={cn} {...restProps}>
      {name}
    </div>
  )
}

Label.defaultProps = {
  type: 'success',
  className: ''
}

Label.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['success', 'pending']),
  className: PropTypes.string
}

export default Label
