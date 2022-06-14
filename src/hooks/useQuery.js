import { useEffect, useState } from "react"
import axios from 'axios'

const useQuery = searchLocation => {

    const [locations, setLocations] = useState()
    const [isLoading, setisLoading] = useState(true)

    useEffect(() => {

      let locationNumber
      if (searchLocation) {
        locationNumber = searchLocation
      }else{
        locationNumber = Math.ceil(Math.random() * 126)
      }

      
        const API_URL = `https://rickandmortyapi.com/api/location/${locationNumber}`

        axios.get(API_URL)
            .then(res => (
              setLocations(res.data),
              setisLoading(false)
              ))
            .catch(err => console.log(err))
    
    }, [searchLocation])
    
  return {locations, isLoading}

}

export default useQuery