import { useState , useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getStarships } from '../../services/sw-api';

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
          {/* <Link to='starship' state={{starship}}> {starship.name}</Link> */}
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