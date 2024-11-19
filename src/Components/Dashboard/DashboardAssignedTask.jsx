const DashboardAssignedTaskData = [
    {
      TaskStatus: "Incomplete",
      bgColor: "bg-red-400",
    },
    {
      TaskStatus: "In Progress",
      bgColor: "bg-blue-400",
    },
    {
      TaskStatus: "Completed",
      bgColor: "bg-green-400",
    },
    {
      TaskStatus: "Pending",
      bgColor: "bg-yellow-400",
    },
  ];
  
  const DashboardAssignedTask = () => {
    return (
      <div id="DashboardAssignedTaskbg" className="overflow-x-auto overflow-y-hidden screen gap-5 h-32 flex justify-between mt-10">
        {
          DashboardAssignedTaskData.map((task, index) => (
            <div key={index} className={`rounded-xl w-[45%] py-6 px-9 ${task.bgColor}`}>
              <h2 className="text-3xl font-semibold">0</h2>
              <h3 className="text-2xl font-medium">{task.TaskStatus}</h3>
            </div>
          ))
        }
      </div>
    );
  }
  
  export default DashboardAssignedTask;
  