import { Routes, Route } from "react-router-dom"
import StudentHomepage from "./page/StudentHomepage"
import Login from "./page/Login"
import Upload from "./page/Upload"
import SPSOHomepage from "./page/SPSOHomepage"
import PrinterManage from "./page/PrinterManage"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="StudentHomepage" element={<StudentHomepage />} />
        <Route path="SPSOHomepage" element={<SPSOHomepage />} />
        <Route path="Upload" element={<Upload />} />
        <Route path="PrinterManage" element={<PrinterManage />} />
      </Routes>
    </div>
  )
}

export default App