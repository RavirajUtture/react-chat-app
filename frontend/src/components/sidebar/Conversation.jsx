

const Conversation = () => {
  return (
    <div className="flex  items-center gap-2 rounded  hover:bg-sky-500 py-1 p-2 cursor-pointer">
        {/* avatar pic */}
        <div className="avatar online">
        <div className="w-12 rounded-full">
            <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
        </div>
        </div>

        <div className="flex flex-col flex-1 ">
            <div className="flex justify-between gap-3" >
                <p className="font-bold text-gray-600">John Doe</p>
                <span className="text-xl">❤️</span>
            </div>

            <div className="divider mx-0 my-0 h-1"></div>

        </div>




    </div>
  )
}

export default Conversation