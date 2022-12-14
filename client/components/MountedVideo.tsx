import {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import { ImdbTrailer } from '../../ts-utils/types'
import { youtubeTrailer } from '../apis/imdb'


function MountedVideo() {

  const trailerTemplate = {
    errorMessage: "",
    fullTitle: "The Lord of the Rings: The Fellowship of the Ring (2001)",
    imDbId: "tt0120737",
    title: "The Lord of the Rings: The Fellowship of the Ring",
    type: "Movie",
    videoId: "V75dMMIW2B4",
    videoUrl: "https://www.youtube.com/watch?v=V75dMMIW2B4",
    year: "2001"
  }

  const { imdb_id } = useParams()
  const [trailerData, setTrailerData] = useState<ImdbTrailer | []>([])
  const [showTrailer, setShowTrailer] = useState(true)
  const formattedTrailer = 'https://www.youtube.com/embed/nOFhHEepF4s'
  const youTubeUrl = "https://www.youtube.com/embed/"

  useEffect(() => {
    console.log('API calls currently disabled')
    // imdb_id && youtubeTrailer(imdb_id)
    // .then((trailerDataArray) => {
    //   setTrailerData(trailerDataArray)
    //   setShowTrailer(true)
    //   console.log(trailerDataArray)
    // })
    // .catch((err) => console.log(err.mesage))
  }, [imdb_id])

  console.log('trailer stub data: ', trailerTemplate)

  return (
    <div>
      <p>
        mounted video component
      </p>
      <p>
          {trailerTemplate.title}
      </p>
      {showTrailer? 
      <div>
        <iframe width="420" height="315" title={trailerTemplate.title} src={youTubeUrl + trailerTemplate.videoId} />
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