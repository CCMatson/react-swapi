import { useState, useEffect } from "react"
import { getDetails } from '../../services/sw-api'
import { useLocation } from "react-router-dom"

const StarshipPage = () => {
  const [starshipPage, setStarshipPage] = useState({})
  const location = useLocation()


  useEffect(() => {
    const fetchDetails = async () => {
      const starshipsData = await getDetails(location.state.starship.url)
      setStarshipPage(starshipsData)
    }
    fetchDetails()
  }, [location.state.starship.url])
  return (
    <>
      <h3>Hey hey let's go the waves</h3>
      <h3>{starshipPage.model}</h3>
    </>
  )
}

export default StarshipPage;