import AdminDashboardTasks from './AdminDashboardTasks'
import DashboardHeader from './DashboardHeader'
const AdminDashboard = () => {
    return (
        <div className='h-screen w-full p-10'>
            <DashboardHeader />

            <div className='overflow-x-auto flex-wrap flex justify-between bg-[#1C1C1C] w-full mt-5 rounded-md px-8 py-3 '>
                <div>
                    <h3 className='text-lg pr-96 mb-1'>Task Title</h3>
                    <input className=' mb-4 outline-none border-gray-300 border-2 rounded-md bg-transparent placeholder:text-gray-400 placeholder:text-base px-3 py-2 w-full' type="text" placeholder='Make The Ui Design' />
                    <h3 className='text-lg mb-1'>Date</h3>
                    <input className=' mb-4 outline-none border-gray-300 border-2 rounded-md bg-transparent placeholder:text-gray-400 placeholder:text-base px-3 py-2 w-full' type="date" placeholder='Make The Ui Design' />
                    <h3 className='text-lg mb-1'>Assign To</h3>
                    <input className=' mb-4 outline-none border-gray-300 border-2 rounded-md bg-transparent placeholder:text-gray-400 placeholder:text-base px-3 py-2 w-full' type="text" placeholder='Employee Name' />
                    <h3 className='text-lg mb-1'>Category</h3>
                    <input className=' mb-4 outline-none border-gray-300 border-2 rounded-md bg-transparent placeholder:text-gray-400 placeholder:text-base px-3 py-2 w-full' type="text" placeholder='Design , Dev , Etc' />
                </div>
                <div className= 'w-[40%] flex justify-evenly flex-col'>
                    <div>
                        <h3 className='text-lg mb-1'>Description</h3>
                        <textarea className=' mb-4 outline-none border-gray-300 border-2 rounded-md bg-transparent placeholder:text-gray-400 placeholder:text-base px-3 py-2 w-full'  name="Description" id="" cols='40' rows='8'></textarea>
                    </div>
                    <button className='bg-emerald-400 mb-4 rounded-md px-3 py-3 w-full text-xl'>Create Task</button>
                </div>
            </div>

            <AdminDashboardTasks/>
        </div>
    )
}

export default AdminDashboard