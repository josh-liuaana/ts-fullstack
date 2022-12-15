import {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import { Modal, Header, Button, Icon } from 'semantic-ui-react'

import { ImdbTrailer } from '../../ts-utils/types'
import { youtubeTrailer } from '../apis/imdb'


function MountedVideo() {

  const stub = {
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
  const [trailerData, setTrailerData] = useState<ImdbTrailer>(stub)
  const [showTrailer, setShowTrailer] = useState(false)
  const youTubeUrl = "https://www.youtube.com/embed/"

  useEffect(() => {
    // console.log('API calls currently disabled')
    imdb_id && youtubeTrailer(imdb_id)
    .then((trailerDataArray) => {
      setTrailerData(trailerDataArray)
    })
    .catch((err) => console.log(err.mesage))
  }, [imdb_id])

  return (
    <div>
      <Modal
        basic
        onClose={() => setShowTrailer(false)}
        onOpen={() => setShowTrailer(true)}
        open={showTrailer}
        size='small'
        trigger={<Button>Watch Trailer</Button>}
        >
        <Header>
          {trailerData.title}
        </Header>
        <Modal.Content>
          <div>
            <iframe allow="fullscreen" className="video" title={trailerData.title} src={youTubeUrl + trailerData.videoId} />
          </div>
        </Modal.Content>
        <Modal.Actions>
          <Button basic color='red' inverted onClick={() => setShowTrailer(false)}>
            <Icon name='remove' /> Close
          </Button>
        </Modal.Actions>
      </Modal>

    </div>
  );
}

export default MountedVideo;