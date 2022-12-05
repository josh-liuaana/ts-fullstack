import { Route, Routes } from 'react-router-dom'
import MovieList from './MovieList'

function App() {
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
