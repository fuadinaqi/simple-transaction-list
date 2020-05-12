import React from 'react'
import PropTypes from 'prop-types'
import styles from './Paper.module.css'

function Paper({ children, width, height, className, ...restProps }) {
  const cn = `${styles.paper} ${className}`
  return (
    <div className={cn} style={{ width, height }} {...restProps}>
      {children}
    </div>
  )
}

Paper.defaultProps = {
  width: 'auto',
  height: 'auto',
  className: ''
}

Paper.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  className: PropTypes.string
}

export default Paper
