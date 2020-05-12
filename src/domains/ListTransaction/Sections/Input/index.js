import React, { useState } from 'react'
import SearchBar from 'components/Molecules/SearchBar'
import { useStore } from 'routes'

const data = [
  {
    id: '1',
    name: 'Nama A-Z'
  },
  {
    id: '2',
    name: 'Nama Z-A'
  },
  {
    id: '3',
    name: 'Tanggal Terbaru'
  },
  {
    id: '4',
    name: 'Tanggal Terlama'
  }
]

function getTypeOfSort(id) {
  switch (id) {
    case '1':
      return { sort: 'name', order: 'asc' }
    case '2':
      return { sort: 'name', order: 'desc' }
    case '3':
      return { sort: 'createdAt', order: 'asc' }
    case '4':
      return { sort: 'createdAt', order: 'desc' }
    default:
      break
  }
}

function getPlaceholder(sort, order) {
  if (sort === 'name') {
    if (order === 'asc') return 'Nama A-Z'
    return 'Nama Z-A'
  } else if (sort === 'createdAt') {
    if (order === 'asc') return 'Tanggal Terbaru'
    return 'Tanggal Terlama'
  }
  return 'Urutkan'
}

function InputSection() {
  const { filter, setFilter } = useStore()
  const placeholder = getPlaceholder(filter.sort, filter.order)
  const [value, setValue] = useState(filter.search)

  function onInputChange({ target: { value: v } }) {
    setValue(v)
    setFilter(prev => ({ ...prev, search: v }))
  }

  function onSelectChange({ id }) {
    setFilter(prev => ({
      ...prev,
      sort: getTypeOfSort(id).sort,
      order: getTypeOfSort(id).order
    }))
  }

  return (
    <SearchBar
      inputValue={value}
      onInputChange={onInputChange}
      selectPlaceholder={placeholder}
      selectData={data}
      onSelectChange={onSelectChange}
    />
  )
}

export default InputSection
