import { useEffect } from 'react'
import { useParams } from 'react-router-dom'

import { useAppDispatch, useAppSelector } from '../../ts-utils/hooks'
import { getImdbData } from '../actions'

import { ImdbData, Params, Similar } from '../../ts-utils/types'

import MountedVideo from './MountedVideo'


function MovieInfo() {
  const dispatch = useAppDispatch()
  const { imdb_id } = useParams<keyof Params>() as Params
  const imdbData: ImdbData = useAppSelector(state => state.imdbData)
  console.log(imdbData)

  useEffect(() => {
    dispatch(getImdbData(imdb_id))
  }, [dispatch, imdb_id])

  
  const similars: Similar[] = imdbData.similars
  console.log(similars)

  return (
    <div>
      <h2>{imdbData.title}</h2>
      <p>{imdbData.plot}</p>
      <MountedVideo />
      <p>You may like these movies:</p>
      {similars && similars.map((simMovie) => (
        <p key={simMovie.id}>{simMovie.title}</p>
      ))}
    </div>
  );
}

export default MovieInfo;