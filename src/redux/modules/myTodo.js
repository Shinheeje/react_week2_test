import { v4 as uuidv4 } from 'uuid'
const INPUT_VALUE = 'myTodo/INPUT_VALUE'
const REMOVE_VALUE = 'myTodo/REMOVE_VALUE'
const COMPLETE_VALUE = 'myTodo/COMPLETE_VALUE'
const CANCEL_VALUE = 'myTodo/CANCEL_VALUE'


export const dataSave = (payload) => {
  return {
    type:INPUT_VALUE,
    payload
  }
}

export const removeContent = (payload) => {
  return {
    type: REMOVE_VALUE,
    payload
  }
}

export const complelteContent = (payload) => {
  return {
    type:COMPLETE_VALUE,
    payload
  }
}

export const cancelContent = (payload) => {
  return {
    type:CANCEL_VALUE,
    payload
  }
}


const initialState = {
  todo: [{}]
}


// input : state와 action
const myTodo = (state = initialState, action) => {
  switch (action.type) {
    case INPUT_VALUE:
      return {
        ...state,

        todo: [...state.todo, {
          id: uuidv4(),
          title: action.payload.title,
          body: action.payload.body,
          isdone: false
        }]
      }
    case REMOVE_VALUE:
      return {
        todo: state.todo.filter((e) => {
          return e.id !== action.payload
        })
      }

    case COMPLETE_VALUE:
      return {
        todo: state.todo.map(item => {
          if (item.id === action.payload) {
            return { ...item, isdone: true };
          }
          return item;
        })
      }


    case CANCEL_VALUE:
      return {
        todo: state.todo.map(item => {
            if (item.id === action.payload) {
              return { ...item, isdone: false };
            }
            return item;
          })
      }

    default:
      return state
  }
}

export default myTodo