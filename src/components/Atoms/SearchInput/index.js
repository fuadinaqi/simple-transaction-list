import React from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import './style.css'

function SearchInput({ width, height, style, ...restProps }) {
  const s = {
    ...style,
    width,
    height
  }
  return (
    <div className="inputWithIcon" style={s}>
      <input type="search" placeholder="Cari nama atau bank" {...restProps} />
      <FontAwesomeIcon icon={faSearch} />
    </div>
  )
}

SearchInput.defaultProps = {
  width: 'unset',
  height: 'unset',
  style: {}
}

SearchInput.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  style: PropTypes.objectOf(PropTypes.any)
}

export default SearchInput
