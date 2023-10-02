import './App.css'
import LeftBox from './components/leftBox/leftBox'
import RightBox from './components/rightBox/rightBox'
import SideBar from './components/sideBar/sideBar'

function App() {
  return (
    <div className="app-container">
      <div className="sidebar">
        <SideBar />
      </div>
      <div className="content">
        <span>London Internship Program</span>
        <span>London</span>
      </div>
      <LeftBox />
      <RightBox />
    </div>
  )
}

export default App
