const DashboardAssignedTask = ({ data }) => {
  return (

    <div id="DashboardAssignedTaskbg" className="overflow-x-auto overflow-y-hidden screen gap-5 h-32 flex justify-between mt-10">
      <div className="rounded-xl w-[45%] py-6 px-9 bg-blue-400">
        <h2 className="text-3xl font-semibold">{data.TaskCount.newTask}</h2>
        <h3 className="text-2xl font-medium">New Task</h3>
      </div>

      <div className="rounded-xl w-[45%] py-6 px-9 bg-green-400">
        <h2 className="text-3xl font-semibold">{data.TaskCount.completed}</h2>
        <h3 className="text-2xl font-medium">Completed Task</h3>
      </div>

      <div className="rounded-xl w-[45%] py-6 px-9 bg-yellow-400">
        <h2 className="text-3xl font-semibold">{data.TaskCount.active}</h2>
        <h3 className="text-2xl font-medium">Active</h3>
      </div>

      <div className="rounded-xl w-[45%] py-6 px-9 bg-red-400">
        <h2 className="text-3xl font-semibold">{data.TaskCount.failed}</h2>
        <h3 className="text-2xl font-medium">Failed</h3>
      </div>

    </div>
  );
}

export default DashboardAssignedTask;
