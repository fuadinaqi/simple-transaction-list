import React from 'react'
import Layout from 'components/Layout'
import { H1 } from 'components/Typography'
import Button from 'components/Atoms/Button'
import styles from './DetailTransaction.module.css'
import HeaderSection from './Sections/Header'
import DetailSection from './Sections/Detail'

function DetailTransactionView({ history, match: { params: { id } } }) {
  return (
    <Layout>
      <div className={styles.container}>
        <H1 color="primary" weight="light" align="center">Detail Transaksi</H1>
        <HeaderSection id={id} />
        <DetailSection id={id} />
        <Button className={styles.mt} onClick={() => history.goBack()}>Kembali</Button>
      </div>
    </Layout>
  )
}

export default DetailTransactionView
