import './index.css'
import lobbyImg from './assets/lobby.jpeg'
import ToolBar from './components/ToolBar.tsx'
import { useState } from 'react'
import Video from './components/Video.tsx'


function App() {

  const [playVideo, setPlayVideo] = useState(false)

  return (
    <div>
      {/** Background Image todo: make into component to allow multiple start locations */}
      {playVideo ? <Video setPlayVideo={setPlayVideo} /> :
        <>
          <img src={lobbyImg} className='select-none drag-none w-full h-full absolute top-0'></img>
          {/** ToolBar component is the controls in the upper-left hand side of the screen  */}
          <ToolBar setPlayVideo={setPlayVideo} />
        </>
      }
    </div>
  )
}

export default App
