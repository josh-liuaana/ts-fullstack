import { Action, ImdbData } from "../../ts-utils/types";
import { IMDB_DATA } from "../actions";

const initialState: ImdbData = {
  similars: [],
  title: '',
  plot: ''  
}

function imdbReducer(state = initialState, action: Action) {
  const {type, payload} = action
  switch(type) {

    case IMDB_DATA:
      return payload

    default:
      return state
  }
}

export default imdbReducer