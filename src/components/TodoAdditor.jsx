import React from 'react'
import { useState } from 'react';
import TodoSection from './TodoSection'

function TodoAdditor(props) {

  const [todo, setTodo] = useState([])

  const [title, setTitle] = useState('')
  const titleChangeHandler = (event) => {
    setTitle(event.target.value)
  }

  const [body, setBody] = useState('')
  const bodyChangeHandler = (event) => {
    setBody(event.target.value)
  }

  const clickTodoRemoveHandler = (id) => {
    const removeTodo = todo.filter((e) => {
      return e.id !== id
    })

    setTodo(removeTodo)
  }

  const clickAddHandler = () => {
    const newTodo = {
      id: todo.length + 1,
      title: title,
      body: body,
      isdone: false
    }

    setTodo([...todo, newTodo])
    setTitle('')
    setBody('')
  }


  const clickcompleteHandler = (id) => {
    const newTodo = todo.map(item => {
      if (item.id === id) {
        return { ...item, isdone: true };
      }
      return item;
    });
    setTodo(newTodo)
  }

  const clickCancelHandler = (id) => {
    const newTodo = todo.map(item => {
      if (item.id === id) {
        return { ...item, isdone: false };
      }
      return item;
    });
    setTodo(newTodo)
  }


  return (
    <>
      <div className='container'>
        <header>
          <p>My Todo List</p>
          <p>React</p>
        </header>
        <div className='inputBox_wrap'>
          <div className='inputBox'>
            <span>제목</span>
            <input value={title} onChange={titleChangeHandler} />
            <span>내용</span>
            <input value={body} onChange={bodyChangeHandler} />
          </div>
          <button onClick={clickAddHandler}>추가하기</button>
        </div>
      </div>

      <TodoSection
        clickTodoRemoveHandler={clickTodoRemoveHandler}
        clickcompleteHandler={clickcompleteHandler}
        clickCancelHandler={clickCancelHandler}
        todo={todo}
      />
    </>
  )
}

export default TodoAdditor