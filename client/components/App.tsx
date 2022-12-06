import { Route, Routes } from 'react-router-dom'
import {useEffect} from 'react'
import { useAppDispatch } from '../../ts-utils/hooks'

import MovieList from './MovieList'

import { getMovies } from '../actions'

function App() {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(getMovies())
  }, [dispatch])

  return (
    <>
      <header className="header">
        <h1>Moo-vies</h1>
      </header>
      <section className="main">
        <Routes>
          <Route path='/' element={<MovieList />} />
        </Routes>
      </section>
    </>
  )
}

export default App
