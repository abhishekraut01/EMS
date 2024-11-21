const FaildTask = ({data}) => {
  return (
    <div className={`flex-shrink-0 h-full p-5 w-[350px] ${data.tasks[2].bgColor} rounded-2xl`}>
    <div className="flex justify-between items-center">
        <h3 className="bg-red-500 px-3 py-1 rounded text-sm">{data.tasks[2].category}</h3>
        <h4 className="font-semibold text-sm">{data.tasks[2].taskDate}</h4>
    </div>
    <h4 className=" mt-8 text-2xl font-semibold">{data.tasks[2].taskTitle}</h4>
    <p className="mt-3">{data.tasks[2].taskDescription}</p>
    <div className="flex justify-between mt-10">
        <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
            Failed
        </button>

    </div>
</div>
  )
}

export default FaildTask