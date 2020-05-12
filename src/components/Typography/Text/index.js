import React from 'react'
import PropTypes from 'prop-types'
import styles from '../Typography.module.css'

function Text({
  children,
  color,
  weight,
  align,
  transform,
  size,
  className,
  style,
  ...restProps }) {
  const cn = `${styles[color]} ${styles[weight]} ${styles[align]} ${styles[transform]} ${className}`
  const s = {
    ...style,
    fontSize: size
  }
  return (
    <span className={cn} style={s} {...restProps}>
      {children}
    </span>
  )
}

Text.defaultProps = {
  color: 'primary',
  weight: 'regular',
  align: 'unset',
  transform: 'transform-unset',
  className: '',
  size: '1.15rem',
  style: {}
}

Text.propTypes = {
  color: PropTypes.oneOf(['primary', 'secondary', 'tertiary']),
  weight: PropTypes.oneOf(['light', 'regular', 'bold']),
  align: PropTypes.oneOf(['unset', 'left', 'center', 'right', 'justify']),
  transform: PropTypes.oneOf(['transform-unset', 'capitalize', 'lowercase', 'uppercase']),
  size: PropTypes.string,
  className: PropTypes.string,
  style: PropTypes.objectOf(PropTypes.any),
}

export default Text
