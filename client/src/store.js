import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import moodReducer from './reducers/moodReducer';
import playlistsReducer from './reducers/playlistsReducer'
import currentUser from './reducers/currentUser'
import thunk from 'redux-thunk';

const reducer = combineReducers({
  mood: moodReducer,
  playlists: playlistsReducer,
  currentUser: currentUser
})

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, composeEnhancer(applyMiddleware(thunk)))

export default store;
