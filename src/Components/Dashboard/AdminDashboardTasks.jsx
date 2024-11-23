import { useContext } from "react";
import { AuthContext } from "../../Context/AuthContext";

const AdminDashboardTasks = () => {
    const authData = useContext(AuthContext)
    console.log(authData.userData.employee)
    return (
        <div
            id="AdminDashboardTasksdiv"
            className=" rounded-lg mt-4 bg-[#000] p-3"
        >
            <div className="mb-2 w-full bg-red-400 flex items-center justify-between p-3 rounded-md">
                <h2 className="w-1/6 text-xl text-white">Employee Name</h2>
                <h2 className="w-1/6 text-xl text-white">New Task</h2>
                <h2 className="w-1/6 text-xl text-white">Active Task</h2>
                <h2 className="w-1/6 text-xl text-white">Completed</h2>
                <h2 className="w-1/6 text-xl text-white">Failed</h2>
            </div >
            <div className="w-full overflow-y-auto">
                {
                    authData.userData.employee.map((elem, idx) => {
                        return <div key={idx} className="mb-2 w-full border-2 border-emerald-400 flex items-center justify-between p-3 rounded-md">
                            <h2 className="w-1/6 text-xl text-white">{elem.firstName}</h2>
                            <h2 className="w-1/6 text-xl text-blue-400">{elem.TaskCount.newTask}</h2>
                            <h2 className="w-1/6 text-xl text-yellow-300">{elem.TaskCount.active} </h2>
                            <h2 className="w-1/6 text-xl text-emerald-500">{elem.TaskCount.completed}</h2>
                            <h2 className="w-1/6 text-xl text-red-400">{elem.TaskCount.failed}</h2>
                        </div>
                    })
                }
            </div>


        </div>
    );
};

export default AdminDashboardTasks;
