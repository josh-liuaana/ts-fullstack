  import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from '@redux-devtools/extension'
import type { ThunkAction as BaseThunkAction } from 'redux-thunk'
import type { AnyAction } from 'redux'

import reducers from './reducers'

export type RootState = ReturnType<typeof store.getState>
export type ThunkAction<T = void> = BaseThunkAction<
Promise<T>,
RootState,
void,
AnyAction
>

const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(thunkMiddleware))
)

export default store