import React from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import styled from 'styled-components';


const Container = styled.div`
  width: 500px;
  height: 400px;
  border: 1px solid #ccc;
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`
const Navbar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
`
const Prev = styled(Link)`
  display: block;
  border: 3px solid red;
  text-decoration: none;
  color: black;
  font-size: 18px;
  font-weight: 900;
  padding: 5px;
`
const Content = styled.div`
  padding: 20px;
  margin-top: 30px;
`
const Title = styled.h2`
  font-size: 32px;
  font-weight: 900;
  margin-bottom: 40px;
`

function Detail() {

  const inputTitleValue = useSelector((state) => {
    return state.myTodo.todo
  })


  const params = useParams()
  const foundData = inputTitleValue.find((item) => {
    console.log(`itemID : ${item.id}`)
    console.log(`paramsID : ${params.id}`)
    return item.id === params.id
  })

  return (
    <Container>
      <Navbar>
        <p>ID : {foundData.id}</p>
        <Prev to={`/`}>이전으로</Prev>
      </Navbar>

      <Content>
        <Title>{foundData.title}</Title>
        <p>{foundData.body}</p>
      </Content>

    </Container>
  )
}

export default Detail