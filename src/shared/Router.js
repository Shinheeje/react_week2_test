import { BrowserRouter, Route, Routes } from "react-router-dom";
import TodoAdditor from "../components/TodoAdditor";
import Detail from "../components/Detail";


const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TodoAdditor />}/>
        <Route path="/:id" element={<Detail />}/>
      </Routes>
    </BrowserRouter>
  )
}


export default Router