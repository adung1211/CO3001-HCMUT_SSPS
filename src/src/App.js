import { Routes, Route } from "react-router-dom"
import StudentHomepage from "./StudentHomepage"
import Login from "./Login"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="StudentHomepage" element={<StudentHomepage />} />
      </Routes>
    </div>
  )
}

export default App