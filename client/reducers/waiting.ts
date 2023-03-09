import { REQUEST_MOVIES, RECEIVE_MOVIES } from "../actions";
import { Action } from "../../ts-utils/types";

function waiting(state = false, action: Action): boolean {
  const { type } = action
  switch (type) {
    case REQUEST_MOVIES:
      return true
    case RECEIVE_MOVIES:
      return false
    default:
      return state
  }
}

export default waiting