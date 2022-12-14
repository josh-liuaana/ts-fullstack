import { Route, Routes, Link } from 'react-router-dom'
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
          
      <Grid columns={1} className='grid-cont'>
        <Grid.Column>
          <Button.Group labeled icon>
          </Button.Group><Sidebar.Pushable as={Segment}>
            <Sidebar
              as={Menu}
              animation='slide out'
              icon='labeled'
              inverted
              vertical
              visible={visible}
              width='thin'
              >
                <Link to='/'>
                  <Menu.Item onClick={() => setVisible(false)}>
                    <Icon name='home' />
                    Home
                  </Menu.Item>
                </Link>
                <Link to='/add'>
                  <Menu.Item onClick={() => setVisible(false)}>
                    <Icon name='add' />
                    Add Movie
                  </Menu.Item>
                </Link>
            </Sidebar>
            <Sidebar.Pusher>
              <Segment basic>

              <div className='button-cont'>
                <Button
                  className='menu-button'
                  onClick={() => setVisible(!visible)}
                  icon='bars'
                  content='MENU'
                  >
                </Button>            
                <div className='title'>
                  <h1>MOO-VIES</h1>
                </div>
              </div>
            
                {/* ROUTES ARE NESTED WITHIN THE SIDEBAR SO THAT EACH ROUTE PUSHES WITH THE SIDEBAR */}
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
