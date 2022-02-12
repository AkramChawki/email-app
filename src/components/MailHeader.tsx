import React from 'react'

interface MailHeaderProps {
    image: string
    fullName: string
    date: string
}
function MailHeader({image,date,fullName}: MailHeaderProps) {
    return (
      <div className='flex items-center space-x-4'>
        <img className='w-12 h-12 rounded-full' src={image} alt="" />
        <h4 className='text-xl text-gray-500'>{fullName}</h4>
        <div className="flex-1"></div>
        <p className='text-sm text-gray-400'>{date}</p>
      </div>
    )
}
export default MailHeader;  