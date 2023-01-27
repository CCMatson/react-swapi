import { useState , useEffect } from 'react';
import { getStarships } from '../../services/sw-api';
import { Link } from 'react-router-dom';

const Starships = () => {
  const [starships, setStarships] = useState([])

  useEffect(()=> {
    const fetchStarships = async () => {
      const starshipsData = await getStarships()
      setStarships(starshipsData.results)
    }
    fetchStarships()
  }, [])

  return (
    <>
    <h3>Starships are meant to fly</h3>
    <div className="card-container">
    {starships.length ?
    <>
      {starships.map(starship =>
        <div key={starship.url} className="card">
          <Link to='/starship' state={{starship}} key={starship.name} className="links"> {starship.name}</Link>
        </div>
        )}
        </>
        :
        <>
        <div>Loading starships....</div>
        </>
    }
    </div>
    </>






      
  )
}

export default Starships;