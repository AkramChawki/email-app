import React from 'react'
import NavMenu from '../components/NavMenu'
import NavMenuItem from '../components/NavMenuItem'
import NewMessageButton from '../components/NewMessageButton'
import TagsList from '../components/TagsList'
import TagsListItem from '../components/TagsListItem'
import {motion} from "framer-motion"




function Sidbar() {
  return (
    <motion.div
    initial={{ x: -300, opacity: 0}}
    animate={{ x: 0, opacity: 1}}
    transition={{ easings: 'easeIn', duration: 0.4}}
     className='flex flex-col h-full'>
        <NewMessageButton />
        <NavMenu>
            <NavMenuItem active count={5}>Inbox</NavMenuItem>
            <NavMenuItem>Starred</NavMenuItem>
            <NavMenuItem>Important</NavMenuItem>
            <NavMenuItem>Sent</NavMenuItem>
            <NavMenuItem>Draft</NavMenuItem>
            <NavMenuItem>Trash</NavMenuItem>
            <NavMenuItem>MailBox</NavMenuItem>
        </NavMenu>
        <TagsList>
          <TagsListItem color="bg-blue-500">Personal</TagsListItem>
          <TagsListItem color="bg-red-500">Work</TagsListItem>
          <TagsListItem color="bg-yellow-500">Friends</TagsListItem>
          <TagsListItem color="bg-green-500">Categories</TagsListItem>
        </TagsList>
    </motion.div> 
  )
}

export default Sidbar