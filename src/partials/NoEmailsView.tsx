import React from 'react'
import { MailIcon } from '../components/icons'

function NoEmailsView() {
  return (
    <div className='w-full h-full grid place-items-center'>
        <div className='text-gray-300 text-center'>
            <MailIcon />
            <p className='text-xl mt-6 font-bold'>No Email opened or Not exesting</p>
        </div>
    </div>
  )
}

export default NoEmailsView