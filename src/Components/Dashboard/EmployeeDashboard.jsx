import TaskList from "../TaskList/TaskList"
import DashboardHeader from "./DashboardHeader"
import DashboardAssignedTask from "./DashboardAssignedTask"

const EmployeeDashboard = ({data , handleLogout}) => {
  console.log(data)
  return (
    <div className="p-10 bg-[#1c1c1c] h-screen">
        <DashboardHeader data={data} handleLogout ={handleLogout} />
        <DashboardAssignedTask data={data}/>
        <TaskList data={data}/>
    </div>
  )
}

export default EmployeeDashboard