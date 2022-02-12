import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MailFeed from './partials/MailFeed'
import MailView from './partials/MailView'
import NoEmailsView from './partials/NoEmailsView'
import Sidbar from './partials/Sidbar'

function App() {
  return (
    <BrowserRouter>
      <div className='font-inter w-full h-screen bg-white grid grid-cols-12'>
        <div className='col-span-2 shadow-xl'>
          <Sidbar />
        </div>
        <div className='col-span-3'>
          <MailFeed />
        </div>
        <div className='col-span-7 border-l border-l-gray-200'>
          <Routes>
            <Route path="/">
              <Route index element={<NoEmailsView />}/>
              <Route path='/email' element={<NoEmailsView />}/>
              <Route path='/email/:id' element={<MailView />}/>
            </Route>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App