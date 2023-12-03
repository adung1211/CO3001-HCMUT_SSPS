import { Routes, Route } from "react-router-dom"
import StudentHomepage from "./StudentHomepage"
import Login from "./Login"
import Upload from "./Upload"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="StudentHomepage" element={<StudentHomepage />} />
        <Route path="Upload" element={<Upload />} />
      </Routes>
    </div>
  )
}

export default App