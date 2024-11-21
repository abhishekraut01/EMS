const DashboardHeader = ({data}) => {
  return (
   
    <div className='flex justify-between item-end'>
      { console.log(data)}
        <h1 className='text-2xl font-medium'>Hello <br /> <span className='font-semibold text-3xl'>{data.firstName}👋</span></h1>
        <button className=' bg-red-500 rounded-lg px-6'>Log Out</button>
    </div>
  )
}

export default DashboardHeader