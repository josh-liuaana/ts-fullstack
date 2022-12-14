import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import { movieData } from '../apis/imdb'
import MountedVideo from './MountedVideo'


function MovieInfo() {
  const { imdb_id } = useParams()
  const [data, setData] = useState([])


  useEffect(() => {
    // imdb_id && movieData(imdb_id)
      // .then((dataArray) => {
      //   setData(dataArray)
      //   console.log(dataArray)
      // })
      // .catch((err) => console.log(err.mesage))
    console.log('API calls currently disabled')
    }, [imdb_id])

  console.log(data);
  
  
  return (
    <div>
      <p>movie info component</p>
      <MountedVideo />
    </div>
  );
}

export default MovieInfo;