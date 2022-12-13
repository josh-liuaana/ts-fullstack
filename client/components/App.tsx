import { Route, Routes } from 'react-router-dom'
import {useEffect, useState} from 'react'
import { useAppDispatch } from '../../ts-utils/hooks'
import { Button, Grid, Icon, Menu, Segment, Sidebar} from 'semantic-ui-react'


import AddMovie from './AddMovie'
import MovieInfo from './MovieInfo'
import MovieList from './MovieList'

import { getMovies } from '../actions'

function App() {
  const [visible, setVisible] = useState(false)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(getMovies())
  }, [dispatch])

  return (
    <>
      <Grid columns={1}>
        <Grid.Column>
          <Button.Group labeled icon>

          <Button
            onClick={() => setVisible(!visible)}
            icon='bars'
            content='MENU'
            >
          </Button>
              </Button.Group>
        </Grid.Column>
        <Grid.Column>
          <Sidebar.Pushable as={Segment}>
            <Sidebar
              as={Menu}
              animation='slide out'
              icon='labeled'
              inverted
              vertical
              visible={visible}
              width='thin'
              >
              <Menu.Item as='a'>
                <Icon name='home' />
                Home
              </Menu.Item>
              <Menu.Item as='a'>
                <Icon name='add' />
                Add Movie
              </Menu.Item>
            </Sidebar>
            <Sidebar.Pusher>
              <Segment basic>
                <Routes>
                  <Route path='/' element={<MovieList />} />
                  <Route path='/add' element={<AddMovie />} />
                  <Route path='/movie-info/:imdb_id' element={<MovieInfo />} />
                </Routes>
              </Segment>
            </Sidebar.Pusher>
          </Sidebar.Pushable>
        </Grid.Column>
      </Grid>
    </>
  )
}

export default App
