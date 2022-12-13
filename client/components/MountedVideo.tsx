import {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import { ImdbTrailer } from '../../ts-utils/types'
import { youtubeTrailer } from '../apis/imdb'

function MountedVideo() {
  const { imdb_id } = useParams()
  const [trailerData, setTrailerData] = useState<ImdbTrailer | []>([])
  const [showTrailer, setShowTrailer] = useState(false)
  const formattedTrailer = 'https://www.youtube.com/embed/nOFhHEepF4s'

  useEffect(() => {
    console.log('API calls currently disabled')
    // imdb_id && youtubeTrailer(imdb_id)
    // .then((trailerDataArray) => {
    //   setTrailerData(trailerDataArray)
    //   setShowTrailer(true)
    // })
    // .catch((err) => console.log(err.mesage))
  }, [imdb_id])

  return (
    <div>
      <p>
        mounted video component
      </p>
      <p>
          {trailerData.title}
      </p>
      {showTrailer? 
      <div>
        <iframe width="420" height="315" title={trailerData.title} src={formattedTrailer} />
      </div> : null
      
    }
    </div>
  );
}

export default MountedVideo;



{/* <iframe width="420" height="315"
src="https://www.youtube.com/embed/tgbNymZ7vqY">
src="https://www.youtube.com/embed/nOFhHEepF4s"
src="https://www.youtube.com/watch?v=nOFhHEepF4s"
</iframe> */}