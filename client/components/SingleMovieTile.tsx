import { useEffect, useState } from 'react'
import { Divider, Card, Image, Button, Icon, Modal } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

import {Movie} from '../../ts-utils/types'
import {useAppDispatch} from '../../ts-utils/hooks'
import { deleteMovieThunk, updateMovieThunk } from '../actions'


function SingleMovieTile({movie}: {movie: Movie}) {
  const [open, setOpen] = useState(false)
  const [seenStatus, setSeenStatus] = useState(movie.watched)
  const [message, setMessage] = useState('')
  const dispatch = useAppDispatch()
  
  const seenMessage = 'You have seen this movie'
  const unseenMessage = 'Did you watch this movie'

  const handleDelete = (id: number) => {
    dispatch(deleteMovieThunk(id))
    setOpen(false)
  }

  const handleWatched = (id: number, watched: boolean) => {
    setSeenStatus(!seenStatus)
    dispatch(updateMovieThunk(id, !watched))
  }

  const handleInfo = () => {
    // alert('handleInfo button triggered') // will access a secondary api call to the title to get all the informations. Inc. embedding a video
  }

  useEffect(() => {
    if (seenStatus) {
      setSeenStatus(true)
      setMessage(seenMessage)
    } else {
      setSeenStatus(false)
      setMessage(unseenMessage)
    }
  }, [seenStatus])


  return (
    <div>
      <div key={movie.id} className='movie-tile'>
        <Card.Group>
          <Card>
            <Image src={movie.img} wrapped ui={false} />
            <Card.Content>
              <Card.Header>{movie.title}</Card.Header>
              <Card.Meta>
                <span className='watched'>{message}</span>
              </Card.Meta>
            </Card.Content>
            <Card.Content extra>
            <div>
                <Button.Group widths='2'>
                  <Button animated='fade' fluid basic color='green' onClick={() => handleWatched(movie.id, seenStatus)}>
                    <Button.Content visible> Watched </Button.Content>
                    <Button.Content hidden>
                      <Icon name='eye slash outline' />
                    </Button.Content>
                  </Button>
                  <Button animated='fade' fluid basic color='black' onClick={handleInfo}>
                    <Link to={`/movie-info/${movie.imdb_id}`}>
                      <Button.Content visible> Info </Button.Content>
                      <Button.Content hidden>
                        <Icon name='film' />
                      </Button.Content>
                    </Link>
                  </Button>
                </Button.Group>
              <Divider />

                <Modal
                closeIcon
                onClose={() => setOpen(false)}
                onOpen={() => setOpen(true)}
                open={open}
                trigger={
                  <Button animated='fade' fluid basic color='red'>
                    <Button.Content visible> Delete </Button.Content>
                    <Button.Content hidden>
                      <Icon name='trash alternate' />
                    </Button.Content>
                  </Button>
                }
                >
                  <Modal.Header>Delete Movie</Modal.Header>
                  <Modal.Content image>
                    <Image size='medium' src={movie.img} wrapped />
                    <Modal.Description>
                      <p>Are you sure you want to delete {movie.title} from your list?</p>
                    </Modal.Description>
                  </Modal.Content>
                  <Modal.Actions>
                    <Button onClick={() => setOpen(false)}>Cancel</Button>
      
                    <Button onClick={() => handleDelete(movie.id)} color='red'>
                      <Icon name='trash' /> Delete
                    </Button>

                  </Modal.Actions>
                </Modal>
            </div>
            </Card.Content>
          </Card>
        </Card.Group>
      </div>
    </div>
  )
}

export default SingleMovieTile;



