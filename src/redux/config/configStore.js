import {createStore} from 'redux'
import {combineReducers} from 'redux'
import myTodo from '../modules/myTodo'


const rootReducer = combineReducers({
  myTodo
})

const store = createStore(rootReducer)

export default store