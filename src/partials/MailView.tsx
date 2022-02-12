import React from 'react'
import { Scrollbars } from 'react-custom-scrollbars'
import { Link, useParams } from 'react-router-dom'
import { useGetEmail } from '../AppContext'
import { HDotsIcon, InfoIcon, LeftArrowIcon, ReplyIcon, RightArrowIcon, TrashIcon } from '../components/icons'
import MailBody from '../components/MailBody'
import MailContent from '../components/MailContent'
import MailHeader from '../components/MailHeader'
import MailTitle from '../components/MailTitle'
import MailViewAction from '../components/MailViewAction'
import MailViewActionButton from '../components/MailViewActionButton'
import UserAvatar from '../components/UserAvatar'
import NoEmailsView from './NoEmailsView'
import { motion } from 'framer-motion'
import { __URL__ } from '../Constants'


function MailView() {
  const { id } = useParams();
  const email = useGetEmail(Number(id));

  const HandleClick = () => {
    console.log("click");
  }
  return email ? (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ easings: 'easeIn', duration: 0.4 }}
      key={email.title}
    >
      <MailViewAction>
        <MailViewActionButton icon={<ReplyIcon />} onClick={HandleClick} />
        <MailViewActionButton icon={<TrashIcon />} onClick={HandleClick} />
        <MailViewActionButton icon={<InfoIcon />} onClick={HandleClick} />
        {email.id > 1 && (
          <Link to={__URL__ + "/email/" + (email.id - 1)}>
            <MailViewActionButton icon={<LeftArrowIcon />} onClick={HandleClick} />
          </Link>
        )}
        {email.id < 20 && (
          <Link to={__URL__ + "/email/" + (email.id + 1)}>
            <MailViewActionButton icon={<RightArrowIcon />} onClick={HandleClick} />
          </Link>
        )}
        <MailViewActionButton icon={<HDotsIcon />} onClick={HandleClick} />
        <UserAvatar image="https://i.pravatar.cc/150?img=3" onClick={HandleClick} />
      </MailViewAction>
      <Scrollbars style={{ height: "calc(100vh - 60px)" }} autoHide>
        <MailContent>
          <MailHeader
            image={'https://i.pravatar.cc/150?img=' + email.id}
            fullName={`${email.first_name} ${email.last_name}`}
            date={email.date} />
          <MailTitle title={email.title} />
          <MailBody content={email.content} />
        </MailContent>

      </Scrollbars>

    </motion.div>
  ) : <NoEmailsView />
}

export default MailView