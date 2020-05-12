import React from 'react'
import ListTransactionView from 'domains/ListTransaction'

function ListTransaction({ ...props }) {
  return (
    <ListTransactionView {...props} />
  )
}

export default ListTransaction
