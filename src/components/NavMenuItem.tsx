interface NavItemProps {
    children: React.ReactNode
    active?: boolean
    count?: number
}

function NavMenuItem({ children, active, count }: NavItemProps) {
    const style = "w-full text-gray-500 tracking-wide px-4 py-2 cursor-pointer hover:bg-gray-100 transition-all flex items-center justify-between"
    const activeStyle = active &&"font-bold"
    return (
        <div className={`${style} ${activeStyle}`}>
            { children }
            { count && (
                <span className='font-normal text-xs text-white bg-secondary px-2 py-1 rounded-3xl'>{count}</span>
            ) }
        </div>
    )
}

export default NavMenuItem;