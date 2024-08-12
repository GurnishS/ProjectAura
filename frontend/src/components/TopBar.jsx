
function TopBar(){
    return (<div className="h-12 w-full bg-gray-500 flex justify-center">
        <div className="flex items-center h-full">
            <button className="px-2 py-1 border-gray-900 border-2 rounded-lg">U</button>
            <button>R</button>
        </div>
        <div className="flex items-center h-full">
            <button>U</button>
            <button>R</button>
        </div>
        <div className="flex items-center h-full">
            <button>1</button>
            <button>2</button>
            <button>3</button>
        </div>
    </div>)
}

export default TopBar