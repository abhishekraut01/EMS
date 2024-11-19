const DashboardHeader = () => {
  return (
    <div className='flex justify-between item-end'>
        <h1 className='text-2xl font-medium'>Hello <br /> <span className='font-semibold text-3xl'>Abhishek👋</span></h1>
        <button className=' bg-red-500 rounded-lg px-6'>Log Out</button>
    </div>
  )
}

export default DashboardHeader