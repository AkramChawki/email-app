import React from 'react'

interface EmailsListProps {
    children: React.ReactNode
}

function EmailsList({ children }: EmailsListProps) {
    return (
        <div className='email-list-height overflow-hidden'>
            {children}
        </div>
    )
}

export default EmailsList;