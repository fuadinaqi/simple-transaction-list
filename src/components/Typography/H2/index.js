import React from 'react'
import PropTypes from 'prop-types'
import styles from '../Typography.module.css'

function H2({
  children,
  color,
  weight,
  align,
  transform,
  className,
  ...restProps
}) {
  const cn = `${styles[color]} ${styles[weight]} ${styles[align]} ${styles[transform]} ${className}`
  return (
    <h2 className={cn} {...restProps}>
      {children}
    </h2>
  )
}

H2.defaultProps = {
  color: 'primary',
  weight: 'regular',
  align: 'unset',
  transform: 'transform-unset',
  className: ''
}

H2.propTypes = {
  color: PropTypes.oneOf(['primary', 'secondary', 'tertiary']),
  weight: PropTypes.oneOf(['light', 'regular', 'bold']),
  align: PropTypes.oneOf(['unset', 'left', 'center', 'right', 'justify']),
  transform: PropTypes.oneOf(['transform-unset', 'capitalize', 'lowercase', 'uppercase']),
  className: PropTypes.string
}

export default H2
