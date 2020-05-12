import React, { useEffect } from 'react'
import Layout from 'components/Layout'
import { H1 } from 'components/Typography'
import HeaderSection from './Sections/Header'
import InputSection from './Sections/Input'
import ListSection from './Sections/List'
import styles from './ListTransaction.module.css'

function ListTransactionView({ history }) {
  useEffect(() => {
    ;(async () => {
      // await fetch('https://nextar.flip.id/frontend-test')
    })()
  }, [])

  return (
    <Layout>
      <div className={styles.container}>
        <H1 color="primary" weight="light" align="center">Daftar Transaksi</H1>
        <HeaderSection />
        <InputSection />
        <ListSection history={history} />
      </div>
    </Layout>
  )
}

export default ListTransactionView
