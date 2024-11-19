import TaskList from "../TaskList/TaskList"
import DashboardHeader from "./DashboardHeader"
import DashboardAssignedTask from "./DashboardAssignedTask"

const EmployeeDashboard = () => {
  return (
    <div className="p-10 bg-[#1c1c1c] h-screen">
        <DashboardHeader />
        <DashboardAssignedTask/>
        <TaskList/>
    </div>
  )
}

export default EmployeeDashboard