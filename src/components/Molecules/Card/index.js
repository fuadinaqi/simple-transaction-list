import React, { useMemo } from 'react'
import PropTypes from 'prop-types'
import Paper from 'components/Atoms/Paper'
import { Text } from 'components/Typography'
import Label from 'components/Atoms/Label'
import styles from './Card.module.css'

function Card({ type, texts, labelName, labelType, clickable, className, ...restProps }) {
  const click = clickable ? 'click' : 'prevent-click'
  const cn = useMemo(() => `${styles.container} ${styles[type]} ${styles[click]} ${className}`, [type, click, className])
  return (
    <Paper className={cn} {...restProps}>
      <div>
        {texts.map(({ id, name, ...restData }) => typeof name === 'string' ? (
          <div key={id}>
            <Text {...restData}>
              {name}
            </Text>
          </div>
        ) : (
          <div key={id}>{name}</div>
        ))}
      </div>
      <Label name={labelName} type={labelType} />
    </Paper>
  )
}

Card.defaultProps = {
  clickable: false,
  type: 'none',
  className: '',
  labelType: 'success',
  texts: []
}

Card.propTypes = {
  clickable: PropTypes.bool,
  type: PropTypes.oneOf(['none', 'success', 'pending']),
  texts: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.oneOfType([
      PropTypes.node,
      PropTypes.string
    ]),
    size: PropTypes.string,
    weight: PropTypes.string,
    transform: PropTypes.string
  })),
  className: PropTypes.string,
  labelName: PropTypes.string.isRequired,
  labelType: PropTypes.oneOf(['success', 'pending'])
}

export default Card
