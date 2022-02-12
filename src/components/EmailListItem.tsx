import React from "react";
import { Link } from "react-router-dom";
import { EmailType } from "../types";

interface EmailListeItemProps {
  email: EmailType
}
function EmailsListItem ({email}: EmailListeItemProps, ref: React.Ref<HTMLAnchorElement>) {
    return (
      <Link ref={ref} to={"/email/" + email.id} className='py-8 px-6 flex border-b border-b-gray-200 cursor-pointer hover:bg-gray-50 transition-all'>
        <img className='w-12 h-12 rounded-full mr-4' src={"https://i.pravatar.cc/150?img=" + email.id} alt="" />
        <div className='flex-1'>
          <div className="flex justify-between tracking-wide mb-3">
            <div>
              <h4 className='font-bold text-sm'>{email.first_name} {email.last_name}</h4>
              <p className='text-gray-400 line-clamp-1'>{email.title}</p>
            </div>
            <p className='text-xs text-gray-400'>{email.houre}</p>
          </div>
          <p className='line-clamp-3 text-xs text-gray-500 leading-5'>{email.content}</p>
        </div>
      </Link>
    )
  }

  export default React.forwardRef(EmailsListItem);