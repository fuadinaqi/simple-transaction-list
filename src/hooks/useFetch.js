import { useState, useEffect } from 'react'
import doCORSRequest from 'helpers/doCORSRequest'

export default ({
  url,
  method
}) => {
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)
  const [data, setData] = useState(null)

  useEffect(() => {
    setIsLoading(true)
    doCORSRequest({
      url,
      method
    })
      .then((response) => {
        setIsLoading(false)
        setData(response)
      })
      .catch((e) => {
        setIsLoading(false)
        setIsError(true)
      })
  }, [url, method])

  return { isLoading, isError, data }
}
