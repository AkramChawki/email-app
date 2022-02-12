import React from 'react'

function MailBody({content}: {content: string}) {
    return (
      <div dangerouslySetInnerHTML={{__html: content}} className='pros pros-sm max-w-full'>
      </div>
    )
}

export default MailBody;