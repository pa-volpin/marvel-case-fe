import { applyMiddleware, createStore, Store, compose } from 'redux'
import { IApplicationState, rootReducer, rootSaga } from './ducks/index'
import sagaMiddleware from './middlewares/sagas'

export default function configureStore (
	initialState: IApplicationState
): Store<IApplicationState> {
  const composeEnhancers = process.env.NODE_ENV === 'development' ? (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : null || compose
  const middlewares = applyMiddleware(sagaMiddleware) // Create Store

	const store = createStore(rootReducer, initialState, composeEnhancers(
    middlewares
  ))

	sagaMiddleware.run(rootSaga)

	return store
}
