import React, { useMemo } from 'react'
import Card from 'components/Molecules/Card'
import styles from './Header.module.css'
import { useStore } from 'routes'

function Header({ id }) {
  const { transactions } = useStore()

  const transaction = useMemo(() => transactions.find(t => t.id === id), [id, transactions])

  if (!transaction) return null
  return (
    <div className={styles.wrapper}>
      <Card
        width="100%"
        texts={[
          {
            id: '1',
            name: `ID TRANSAKSI:#${id}`,
            weight: 'bold'
          }
        ]}
        labelType={transaction.status.toLowerCase()}
        labelName={transaction.status === 'SUCCESS' ? 'Berhasil' : 'Pengecekan'}
      />
    </div>
  )
}

export default Header
