import React from 'react'
import SimpleBar from 'simplebar-react';
import SearchInput from '../components/SearchInput'
import EmailsList from '../components/EmailList'
import EmailsListItem from '../components/EmailListItem'
import { useStore } from '../AppContext'
import {motion} from "framer-motion"

const AnimatedEmailsListItem = motion(EmailsListItem);


function MailFeed() {
  const { filtredEmails } = useStore();
  return (
    <div className='h-full '>
      <SearchInput />
      <EmailsList>
        <SimpleBar style={{ height: "calc(100vh - 60px)" }}>
        { filtredEmails && filtredEmails.map((email, i) => (
        <AnimatedEmailsListItem
         initial={{y: -50, opacity: 0}}
         animate={{y:0, opacity: 1}}
         transition={{ delay: 0.1 * i, easings: 'linear', duration: 0.1}}
         email={email}
         key={email.id}/>
        ))}
        </SimpleBar>
      </EmailsList>
    </div>
  )
}

export default MailFeed