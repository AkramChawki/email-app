import React from 'react'

function MailTitle({title}: {title: string}) {
    return (
      <h2 className='text-3xl font-light my-9'>{title}</h2>
    )
}

export default MailTitle;