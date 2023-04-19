import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { removeContent, complelteContent, cancelContent } from '../redux/modules/myTodo';
import { COMPLETE_VALUE } from '../redux/modules/myTodo';
import { CANCEL_VALUE } from '../redux/modules/myTodo';
import { Link } from 'react-router-dom';
import styled from 'styled-components';


const MainTitle = styled.h1`
  margin-top: 20px;
  margin-left: 20px;
  font-size: 28px;
`
const Todo = styled.div`
  height: 300px;
  padding: 0 20px 0 20px;
  display: flex;  
  gap: 20px;
`
const TodoBox = styled.div`
  width: 300px;
  height: 200px;
  border: 4px solid rgb(237, 118, 182);
  border-radius: 14px;
  padding: 10px 20px 10px 20px;
  box-sizing: border-box;
  margin-top: 40px;
`

const TodoButton = styled.div`
  display: flex;
  gap: 10px;
`

const EachButton = styled.button`
  width: 50%;
  padding: 8px;
  margin-top: 20px;
  border: 3px solid blue;
  border-radius: 8px;
  background-color: #fff;
  cursor: pointer;
`
const RemoveButton = styled.button`
  width: 50%;
  padding: 8px;
  margin-top: 20px;
  border: 3px solid red;
  border-radius: 8px;
  background-color: #fff;
  cursor: pointer;
`

const SubTitle = styled.h2`
  font-size: 24px;
  margin-top: 20px;
`
const Content = styled.p`
  margin-top: 20px;
`
const Detail = styled(Link)`
  font-size: 20px;
  display: inline-block;
  margin-top: 10px;
  text-decoration: none;
  color: rgb(108, 61, 14);
  font-weight: bold;
  border-bottom: 1px solid black;
`
function Working() {
  const dispatch = useDispatch()

  const inputTitleValue = useSelector((state) => {
    return state.myTodo.todo
  })


  const falseFilteringHandler = inputTitleValue.filter((e) => { return e.isdone === false })
  const tureFilteringHandler = inputTitleValue.filter((e) => { return e.isdone === true })

  const clickTodoRemoveHandler = (id) => {
    dispatch(removeContent(id))
  }

  const clickcompleteHandler = (id) => {
    dispatch(complelteContent(id))
  }

  const clickCancelHandler = (id) => {
    dispatch(cancelContent(id))
  }

  return (
    <>
      <MainTitle>Working.. 🔥</MainTitle>
      <Todo>
        {
          falseFilteringHandler.map((item) => {
            return (
              <TodoBox key={item.id}>
                <div className='workingBoxItem'>
                  <Detail to={`/${item.id}`}>상세보기</Detail>
                  <SubTitle>{item.title}</SubTitle>
                  <Content>{item.body}</Content>
                  <TodoButton>
                    <RemoveButton onClick={() => clickTodoRemoveHandler(item.id)}>삭제하기</RemoveButton>
                    <EachButton onClick={() => clickcompleteHandler(item.id)}>완료</EachButton>
                  </TodoButton>
                </div>
              </TodoBox>
            )
          })
        }
      </Todo>
      <MainTitle>Done..! 🎉</MainTitle>
      <Todo>
        {
          tureFilteringHandler.map((item) => {
            return (
              <TodoBox key={item.id}>
                <div className='doneBoxItem'>
                  <Detail to={`/${item.id}`}>상세보기</Detail>
                  <SubTitle>{item.title}</SubTitle>
                  <Content>{item.body}</Content>
                  <TodoButton>
                    <RemoveButton onClick={() => clickTodoRemoveHandler(item.id)}>삭제하기</RemoveButton>
                    <EachButton onClick={() => clickCancelHandler(item.id)}>취소</EachButton>
                  </TodoButton>
                </div>
              </TodoBox>
            )
          })
        }
      </Todo>
    </>
  )
}

export default Working