interface TagsListItemProps {
    children: React.ReactNode
    color: string
}

function TagsListItem({children, color}: TagsListItemProps) {
    return (
      <div className='w-full text-gray-500 tracking-wide px-4 py-2 cursor-pointer hover:bg-gray-100 transition-all flex items-center'>
        <div className={`w-2 h-2 rounded-full mr-4 ${color}`}></div>
        {children}
      </div>
    )
}

export default TagsListItem;