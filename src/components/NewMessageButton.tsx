import React from 'react'
import { EditIcon } from "./icons";

function NewMessageButton() {
    return (
        <button className='text-white bg-primary h-[60px] flex items-center justify-center space-x-3'>
            <EditIcon />
           <span> New Message</span>
        </button>
    )
}

export default NewMessageButton;