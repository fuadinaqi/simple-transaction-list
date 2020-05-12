import React, { useMemo } from 'react'
import Paper from 'components/Atoms/Paper'
import { Text } from 'components/Typography'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInbox } from '@fortawesome/free-solid-svg-icons'
import theme from 'theme'
import { formatCurrency, formatDate } from 'helpers'
import { useStore } from 'routes'
import styles from './Detail.module.css'

function Detail({ id }) {
  const { transactions } = useStore()

  const transaction = useMemo(() => transactions.find(t => t.id === id), [id, transactions])
  if (!transaction) return null
  const {
    sender_bank,
    beneficiary_bank,
    account_number,
    beneficiary_name,
    amount,
    unique_code,
    remark,
    created_at
  } = transaction
  return (
    <div className={styles.wrapper}>
      <Paper width="100%">
        <div className={styles.container}>
          <FontAwesomeIcon icon={faInbox} color={theme.orange} size="3x" />
          <div className={styles.content}>
            <Text weight="bold" transform="uppercase" className={styles.title}>Pengirim</Text>
            <Text transform="uppercase">{sender_bank}</Text>
            <Text weight="bold" transform="uppercase" className={styles.title}>Penerima</Text>
            <Text transform="uppercase">{beneficiary_bank}</Text>
            <Text>{account_number}</Text>
            <Text>{beneficiary_name}</Text>
            <Text weight="bold" transform="uppercase" className={styles.title}>Nominal</Text>
            <Text>{formatCurrency(amount)}</Text>
            <Text><Text weight="bold">Kode unik:</Text> {unique_code}</Text>
            <Text weight="bold" transform="uppercase" className={styles.title}>Catatan</Text>
            <Text transform="capitalize">{remark}</Text>
            <Text weight="bold" transform="uppercase" className={styles.title}>Waktu dibuat</Text>
            <Text>{formatDate(created_at)}</Text>
          </div>
        </div>
      </Paper>
    </div>
  )
}

export default Detail
