export const LoadingScreen = () => {


    return <div className="fixed inset-0 z-50 bg-none text-amber-400 flex flex-col items-center justify-center">

        <div className="mb-4 text-4xl font-mono font-bold">
            Loading Screen <span className="animate-blink ml-1"> | </span>
        </div>
        <div className="w-[200px] h-[2px] bg-gray-800 rounded-2xl relative overflow-hidden">
            <div className="w-[40%] h-full bg-blue-500 shadow-[0_0_15px]"></div>
        </div>
    </div>
}
