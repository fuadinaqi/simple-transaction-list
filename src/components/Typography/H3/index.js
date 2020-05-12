import React from 'react'
import PropTypes from 'prop-types'
import styles from '../Typography.module.css'

function H3({
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
    <h3 className={cn} {...restProps}>
      {children}
    </h3>
  )
}

H3.defaultProps = {
  color: 'primary',
  weight: 'regular',
  align: 'unset',
  transform: 'transform-unset',
  className: ''
}

H3.propTypes = {
  color: PropTypes.oneOf(['primary', 'secondary', 'tertiary']),
  weight: PropTypes.oneOf(['light', 'regular', 'bold']),
  align: PropTypes.oneOf(['unset', 'left', 'center', 'right', 'justify']),
  transform: PropTypes.oneOf(['transform-unset', 'capitalize', 'lowercase', 'uppercase']),
  className: PropTypes.string
}

export default H3
