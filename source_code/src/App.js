import { Routes, Route } from "react-router-dom"
import StudentHomepage from "./page/StudentHomepage"
import Login from "./page/Login"
import Upload from "./page/Upload"
import Properties from "./page/Properties"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="StudentHomepage" element={<StudentHomepage />} />
        <Route path="Upload" element={<Upload />} />
        <Route path="Properties" element={<Properties />} />
      </Routes>
    </div>
  )
}

export default App