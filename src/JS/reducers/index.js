import { combineReducers } from 'redux'
import todoReducer from './toDoReducer'


const rootReducer = combineReducers({ todoReducer })


export default rootReducer