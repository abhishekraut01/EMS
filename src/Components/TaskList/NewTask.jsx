const NewTask = ({ data }) => {
    return (

        <div className={`flex-shrink-0 h-full p-5 w-[350px] ${data.bgColor} rounded-2xl`}>
           
            <div className="flex justify-between items-center">
                <h3 className="bg-red-500 px-3 py-1 rounded text-sm">{data.category}</h3>
                <h4 className="font-semibold text-sm">{data.taskDate}</h4>
            </div>
            <h4 className=" mt-8 text-2xl font-semibold">{data.taskTitle}</h4>
            <p className="mt-3">{data.taskDescription}</p>
            <div className="flex justify-between mt-10">
                <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                    Accept Task
                </button>

            </div>
        </div>
    )
}

export default NewTask