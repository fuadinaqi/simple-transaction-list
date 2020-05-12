const formatCurrency = (num = 0) => {
  const price = num
    .toString()
    .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')

  return `Rp${price}`
}

export default formatCurrency