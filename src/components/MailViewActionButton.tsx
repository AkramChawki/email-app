import React from 'react'

interface MailViewActionButtonProps {
    icon: JSX.Element;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
}
function MailViewActionButton({icon, onClick}: MailViewActionButtonProps) {
    return (
      <button onClick={onClick} className="w-[60px] h-[60px] grid place-items-center text-gray-400 hover:bg-gray-50 transition-all cursor-pointer">
          {icon}
      </button>
    )
}
export default MailViewActionButton;