import React from 'react'

function Working(props) {

  const falseFilteringHandler = props.todo.filter((e) => { return e.isdone === false })
  const tureFilteringHandler = props.todo.filter((e) => { return e.isdone === true })
  return (
    <>
      <h1>Working.. 🔥</h1>
      <div className='working'>
        {
          falseFilteringHandler.map((item) => {
            return (
              <div className='workingBox'>
                <div className='workingBoxItem'>
                  <h2>{item.title}</h2>
                  <p>{item.body}</p>
                  <div className='workingButton'>
                    <button className='remove' onClick={() => props.clickTodoRemoveHandler(item.id)}>삭제하기</button>
                    <button onClick={() => props.clickcompleteHandler(item.id)}>완료</button>
                  </div>
                </div>
              </div>
            )
          })
        }
      </div>
      <h1>Done..! 🎉</h1>
      <div className='done'>
        {
          tureFilteringHandler.map((item) => {
            return (
              <div className='doneBox'>
                <div className='doneBoxItem'>
                  <h2>{item.title}</h2>
                  <p>{item.body}</p>
                  <div className='doneButton'>
                    <button className='remove' onClick={() => props.clickTodoRemoveHandler(item.id)}>삭제하기</button>
                    <button onClick={() => props.clickCancelHandler(item.id)}>취소</button>
                  </div>
                </div>
              </div>
            )
          })
        }
      </div>
    </>
  )
}

export default Working