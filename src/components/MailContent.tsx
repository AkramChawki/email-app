import React from 'react'

interface MailViewContentProps {
    children: React.ReactNode
}

function MailContent({children}: MailViewContentProps) {
    return (
      <div className='email-view-content-height p-10'>
        {children}
      </div>
   )
}
export default MailContent;