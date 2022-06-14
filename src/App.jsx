import './App.css'
import Loading from './components/Loading'
import useQuery from './hooks/useQuery'
import Location from './components/Location'
import Input from './components/Input'
import ResidentInfo from './components/ResidentInfo'
import { useState } from 'react'

function App() {

  const [searchLocation, setSearchLocation] = useState()
  
  const {locations, isLoading} = useQuery(searchLocation)


  console.log(searchLocation)

  return (
    <div className="App">
      {
        isLoading ?
          <Loading />
        :
        <section className='App__Info'>
          <Input setSearchLocation={setSearchLocation} />
          <Location locations={locations} />
          <div className='App__targets'>
            {
              locations?.residents.map(resident => (
                <ResidentInfo resident={resident} key={resident} />
              ))
            }
          </div>
        </section>
      }

    </div>
  )
}

export default App
