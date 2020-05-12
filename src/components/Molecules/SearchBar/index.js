import React from 'react'
import PropTypes from 'prop-types'
import SearchInput from 'components/Atoms/SearchInput'
import SelectOption from 'components/Atoms/SelectOption'
import styles from './SearchBar.module.css'

function SearchBar({
  inputValue,
  onInputChange,

  selectPlaceholder,
  selectData,
  onSelectChange
}) {
  return (
    <div className={styles.container}>
      <SearchInput
        width="100%"
        value={inputValue}
        onChange={onInputChange}
      />
      <SelectOption
        placeholder={selectPlaceholder}
        data={selectData}
        onChange={onSelectChange}
      />
    </div>
  )
}

SearchBar.defaultProps = {
  inputValue: '',
  onInputChange: () => null,

  selectPlaceholder: '',
  selectData: [],
  onSelectChange: () => null
}

SearchBar.propTypes = {
  inputValue: PropTypes.string,
  onInputChange: PropTypes.func,

  selectPlaceholder: PropTypes.string,
  selectData: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
  })),
  onSelectChange: PropTypes.func
}

export default SearchBar
