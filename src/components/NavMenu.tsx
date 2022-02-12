interface NavMenuProps {
    children: React.ReactNode
}


function NavMenu({ children }: NavMenuProps) {
    return (
        <div className='py-7 '>
            { children }
        </div>
    )
}
export default NavMenu;