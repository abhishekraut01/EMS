import AdminCreateTask from './AdminCreateTask'
import AdminDashboardTasks from './AdminDashboardTasks'
import DashboardHeader from './DashboardHeader'
const AdminDashboard = ({data , handleLogout }) => {
    return (
        <div className='h-screen w-full p-10'>
            <DashboardHeader data={data} handleLogout ={handleLogout} />
            <AdminCreateTask/>
            <AdminDashboardTasks/>
        </div>
    )
}

export default AdminDashboard