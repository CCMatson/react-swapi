import { useState, useEffect } from "react"
import { getDetails } from '../../services/sw-api'
import { useLocation , Link } from "react-router-dom"


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
    <div className="details">
      <h3>- Starship Details -</h3>
      <h3>Name: {starshipPage.name}</h3>
      <h3>Model: {starshipPage.model}</h3>
      <h3>Manufacturer: {starshipPage.manufacturer}</h3>
      <Link to='/' className="links">Return to the Starships Main Page</Link>
    </div>
    </>
  )
}

export default StarshipPage;