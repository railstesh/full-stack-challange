import axios from "axios"
import ApiHook from '../types/apiHook'
import Airport from '../types/airport'
import { useEffect, useState } from "react"

export const useApiData = <T>(path: string, defaultValue: any, defaultSearch: string): ApiHook => {
  const [ data, setData ] = useState<Airport[]>(defaultValue)
  const [searchKey, setSearchKey] = useState(defaultSearch);

  useEffect(() => {
    if (!searchKey) {
      setData(defaultValue);
    } else {
      axios.get<Airport[]>(`${path}?search_key=${searchKey}`).catch(err => err.response).then(response => {
        setData(response.data)
      })
    }
  }, [searchKey])

  return {
    airports: data,
    searchKey,
    setSearchKey,
  }
}

export default useApiData
