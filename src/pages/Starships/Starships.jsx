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
    {starships.length ?
    <>
      {starships.map(starship =>
        <div key={starship.url}>
          {starship.name}
          <Link to='/starship' state={{starship}} key={starship.name}> {starship.name}</Link>
        </div>
        )}
        </>
        :
        <>
        <div>Loading starships....</div>
        </>
    }
    </>
  )
}

export default Starships;