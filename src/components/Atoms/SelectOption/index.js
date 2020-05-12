import React, { useState, useEffect, useRef, useMemo } from 'react'
import PropTypes from 'prop-types'
import { Text } from 'components/Typography'
import sortDown from './media/sort-down.svg'
import styles from './SelectOption.module.css'

function SelectOption({ placeholder, data, onChange }) {
  const [visibility, setVisibility] = useState('hidden')
  const [title, setTitle] = useState(placeholder)
  const contentClassName = useMemo(() => `${styles.content} ${styles[visibility]}`, [visibility])

  const wrapperRef = useRef(null)

  useEffect(() => {
    function handleClickOutside(event) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        if (visibility === 'active') {
          setVisibility('hidden')
        }
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [visibility])

  function onClick() {
    setVisibility(prev => prev === 'hidden' ? 'active' : 'hidden')
  }

  function onContentClick({ id, name }) {
    return function() {
      setVisibility('hidden')
      setTitle(name)
      onChange({ id, name })
    }
  }

  return (
    <div className={styles.container} ref={wrapperRef}>
      <div className={styles.title} role="presentation" onClick={onClick}>
        <Text
          transform="uppercase"
          weight="bold"
          className={styles.pa}
          size="1rem"
          title={title}
        >
          {title}
        </Text>
        <img width="12px" src={sortDown} alt="sort-down" className={styles.pr} />
      </div>
      <div className={contentClassName}>
        {data.map(d => (
          <div
            key={d.id}
            role="presentation"
            onClick={onContentClick(d)}
            className={`${styles.item} ${styles.pa}`}
          >
            <Text size="1rem">{d.name}</Text>
          </div>
        ))}
      </div>
    </div>
  )
}

SelectOption.defaultProps = {
  onChange: () => null,
  placeholder: '',
  data: []
}

SelectOption.propTypes = {
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  data: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
  }))
}

export default SelectOption
