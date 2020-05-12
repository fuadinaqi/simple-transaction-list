import React, { useState, useEffect, createContext, useContext } from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import ListTransaction from 'pages/ListTransaction'
import DetailTransaction from 'pages/DetailTransaction'
import useFetch from 'hooks/useFetch'

const INITIAL_FILTER = {
  search: '',
  sort: '',
  order: ''
}

const URL = 'https://nextar.flip.id/frontend-test'

const AppContext = createContext()

function Routes() {
  const [masterData, setMasterData] = useState([])
  const [transactions, setTransactions] = useState([])
  const [filter, setFilter] = useState(INITIAL_FILTER)

  const { isLoading, data: response } = useFetch({ url: URL, method: 'GET' })

  useEffect(() => {
    if (response) {
      const data = Object.values(response).map(value => value)
      setTransactions(data)
      setMasterData(data)
    }
  }, [response])

  /**
   * This effect is to change the transaction data state when filter state is changed
   */
  useEffect(() => {
    /** Filtering by input search */
    let newTransactions = masterData.filter(({
      beneficiary_name,
      beneficiary_bank,
      sender_bank
    }) => {
      return (
        beneficiary_name.toLowerCase().indexOf(filter.search) !== -1
        || beneficiary_bank.toLowerCase().indexOf(filter.search) !== -1
        || sender_bank.toLowerCase().indexOf(filter.search) !== -1
      )
    })

    /** Filtering by sort */
    if (filter.sort === 'name') { // Filter sort by beneficiary_name
      newTransactions = newTransactions.sort((a, b) => {
        if (a.beneficiary_name < b.beneficiary_name) {
          return filter.order === 'asc' ? -1 : 1
        }
        if (a.beneficiary_name > b.beneficiary_name) {
          return filter.order === 'asc' ? 1 : -1
        }
        return 0
      })
    } else if (filter.sort === 'createdAt') { // Filter sort by created_at
      newTransactions = newTransactions.sort((a, b) => {
        if (new Date(a.created_at).getTime() < new Date(b.created_at).getTime()) {
          return filter.order === 'asc' ? -1 : 1
        }
        if (new Date(a.created_at).getTime() > new Date(b.created_at).getTime()) {
          return filter.order === 'asc' ? 1 : -1
        }
        return 0
      })
    }
    setTransactions(newTransactions)
  }, [masterData, filter.search, filter.sort, filter.order])

  return (
    <AppContext.Provider
      value={{
        isLoading,
        transactions,
        setTransactions,
        masterData,
        filter,
        setFilter
      }}
    >
      <Router>
        <Switch>
          <Route path="/" exact component={ListTransaction} />
          <Route path="/:id" exact component={DetailTransaction} />
          <Redirect to="/" />
        </Switch>
      </Router>
    </AppContext.Provider>
  )
}

export function useStore() {
  const store = useContext(AppContext)
  if (!store) throw new Error('Cannot using this store')

  return store
}

export default Routes
