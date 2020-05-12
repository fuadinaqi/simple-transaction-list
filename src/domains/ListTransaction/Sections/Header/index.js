import React from 'react'
import { H3, Text } from 'components/Typography'
import styles from './Header.module.css'

function HeaderSection() {
  const greetingClassName = `${styles.title} ${styles.greetings}`
  return (
    <>
      <H3 color="primary" weight="bold" className={greetingClassName}>Halo kak!</H3>
      <Text>
        Kamu telah melakukan transaksi sebesar
        <Text color="tertiary" weight="bold"> Rp5.000.000 </Text>
        sejak menggunakan Flip.
      </Text>
    </>
  )
}

export default HeaderSection
