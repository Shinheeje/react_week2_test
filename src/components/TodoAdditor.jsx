import React, { useRef } from 'react'
import { useState } from 'react';
import TodoSection from './TodoSection'
import { useDispatch, useSelector } from 'react-redux';
import { INPUT_VALUE } from '../redux/modules/myTodo';
import styled from 'styled-components';
import { dataSave } from '../redux/modules/myTodo';

const Container = styled.div`
  margin: 0 auto;
  max-width: 1200px;
  min-width: 800px;
`
const Top = styled.header`
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px 0 20px;
`

const InputBoxWrap = styled.div`
  height: 80px;
  background-color: #eee;
  padding: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const InputBox = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`

const InputBoxSpan = styled.span`
  font-size: 18px;
`
const MainInput = styled.input`
  width: 300px;
  padding: 20px;
  box-sizing: border-box;
  margin-right: 20px;
  border: none;
  border-radius: 14px;
`

const InputBoxWrapButton = styled.button`
  width: 150px;
  padding: 20px;
  border: none;
  border-radius: 14px;
  background-color: rgb(165, 165, 208);
  color: #fff;
  font-weight: 900;
  box-sizing: border-box;
  cursor: pointer;
`

function TodoAdditor() {

  const dispatch = useDispatch()

  const [state, setState] = useState({
    title: '',
    body: ''
  })

  const inputState = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.value
    })
  }

  const titleInput = useRef()
  const bodyInput = useRef()

  const clickAddHandler = () => {
    if (state.title.length < 1) {
      titleInput.current.focus()
      return
    }
    if (state.body.length < 1) {
      bodyInput.current.focus()
      return
    }
    dispatch(dataSave({
      title: state.title,
      body: state.body
    }))
    setState({
      title: '',
      body: ''
    })
  }

  return (
    <>
      <Container>
        <Top>
          <p>My Todo List</p>
          <p>React</p>
        </Top>
        <InputBoxWrap>
          <InputBox>
            <InputBoxSpan>제목</InputBoxSpan>
            <MainInput id='title' ref={titleInput} name='title' value={state.title} onChange={inputState} />
            <InputBoxSpan>내용</InputBoxSpan>
            <MainInput id='body' ref={bodyInput} name='body' value={state.body} onChange={inputState} />
          </InputBox>
          <InputBoxWrapButton onClick={clickAddHandler}>추가하기</InputBoxWrapButton>
        </InputBoxWrap>
        <TodoSection
        />
      </Container>
    </>
  )
}

export default TodoAdditor