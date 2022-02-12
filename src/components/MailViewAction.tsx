interface MailViewActionProps {
    children: React.ReactNode;
}
function MailViewAction({children}: MailViewActionProps) {
    return (
      <div className='w-full h-[60px] border-b border-b-gray-200 flex items-center justify-around px-8'>
        {children}
      </div>
    )
}
export default MailViewAction;