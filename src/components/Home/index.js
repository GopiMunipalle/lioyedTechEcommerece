import {useState, useEffect} from 'react'

import './index.css'

function Home() {
  const [data, setData] = useState([])

  const fetchCartApi = async () => {
    const url = 'https://run.mocky.io/v3/12531624-c691-4a5b-9625-4490a7cff00d'
    const response = await fetch(url)
    const fetchedData = await response.json()
    setData(fetchedData)
  }

  useEffect(() => {
    fetchCartApi()
  })

  return (
    <div className="home-bg-container">
      <h1>Home</h1>
    </div>
  )
}

export default Home
