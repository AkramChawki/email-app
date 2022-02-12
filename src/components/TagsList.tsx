interface TagsListProps {
    children: React.ReactNode
}

  
function TagsList({children}: TagsListProps) {
    return (
      <div className='py-7'>
        {children}
      </div>
    )
}

export default TagsList;