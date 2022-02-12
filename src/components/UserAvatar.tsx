import React from 'react'

interface UserAvatarProps {
    image: string
    onClick?: React.MouseEventHandler<HTMLDivElement>
}
function UserAvatar({image, onClick}: UserAvatarProps) {
    return (
      <div onClick={onClick} className='w-[60px] h-[60px] grid place-items-center hover:bg-gray-50 transition-all cursor-pointer'>
        <img src={image} alt="" className='w-10 h-10 rounded-full'/>
      </div>
    )
}
export default UserAvatar;