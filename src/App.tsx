import React from 'react'
import './styles/styles.sass'
import './App.css'
import Sidebar from './components/sidebar/Sidebar'
import TimeLine from './components/timeline/Timeline'
import Widget from './components/widget/Widget'

function App() {
    return (
        <div className="app flex w-full flex-shrink-0">
            <Sidebar/>
            <main className="main flex flex-col flex-grow flex-shrink items-start">
                <div className="main-wrapper flex flex-shrink flex-grow">
                    <div className="flex w-full flex-grow">
                        <div className="main-container flex flex-grow justify-between w-full">
                            <TimeLine/>
                            <Widget/>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default App
