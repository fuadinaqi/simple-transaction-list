import React from 'react'
import PropTypes from 'prop-types'
import Card from 'components/Molecules/Card'
import { Text } from 'components/Typography'
import Paper from 'components/Atoms/Paper'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { formatCurrency, formatDate } from 'helpers'
import { useStore } from 'routes'
import styles from './List.module.css'

function ListSection({ history }) {
  const { isLoading, transactions } = useStore()

  if (isLoading) return new Array(5).fill().map((_, i) => (
    <Paper key={i.toString()} height="52px" className={`${styles.card} shimmer`} />
  ))
  return transactions.map(({
    id,
    status,
    sender_bank,
    beneficiary_bank,
    beneficiary_name,
    amount,
    created_at
  }) => (
    <Card
      clickable
      className={styles.card}
      key={id}
      onClick={() => history.push(`/${id}`)}
      type={status.toLowerCase()}
      labelType={status.toLowerCase()}
      labelName={status === 'PENDING' ? 'Pengecekan' : 'Berhasil'}
      texts={[
        {
          id: '1',
          name: (
            <Text weight="bold" transform="uppercase">
              {sender_bank}
              &nbsp;
              <FontAwesomeIcon icon={faArrowRight} />
              &nbsp;
              {beneficiary_bank}
            </Text>
          )
        },
        {
          id: '2',
          name: beneficiary_name,
          transform: 'uppercase'
        },
        {
          id: '3',
          name: (
            <Text>
              {formatCurrency(amount)} &bull; {formatDate(created_at)}
            </Text>
          )
        }
      ]}
    />
  ))
}

ListSection.propTypes = {
  history: PropTypes.objectOf(PropTypes.any).isRequired
}

export default ListSection
