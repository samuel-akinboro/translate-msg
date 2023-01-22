import { useState, useEffect } from 'react'

function App() {
  const [isMobile, setIsMobile] = useState(false);
  const [showResult, setShowResult] = useState(false)

  // responsiveness
  const handleResize = () => {
    if (window.innerWidth < 720) {
        // setShowResult(false)
        setIsMobile(true)
    } else {
        setShowResult(true)
        setIsMobile(false)
    }
  }

  useEffect(() => {
    handleResize()
    window.addEventListener("resize", handleResize)
  })

  return (
    <div className="bg-blue-600 h-screen w-screen relative overflow-hidden">
     <textarea className='bg-gray-50 w-full h-full p-8 lg:p-24 z-10 lg:w-1/2' placeholder='Write a message...'></textarea>
     <p className={`bg-blue-600 w-full h-full p-8 lg:p-24 z-20 absolute top-0 bottom-0 text-white ${showResult ? 'right-0' : 'right-[-100vw]'} ${!isMobile && 'w-1/2 static'}`}>message output</p>
     <div className={`bg-gray-100 h-16 w-16 rounded-full flex items-center justify-center absolute top-1/2 transform -translate-y-1/2 z-30 right-4 cursor-pointer lg:right-[47.8%] shadow-xl text-2xl ${showResult ? 'rotate-0' : 'rotate-180'}`} onClick={() => isMobile && setShowResult(!showResult)}>&rarr;</div>
    </div>
  )
}

export default App
