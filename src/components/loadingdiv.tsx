import { useState } from "react";


function Loading() {
    
    const [enableload, setloader] = useState(false) //this the useState mode
//The use statemode carries the intial value
//the enableload is the current value
//while the setloader is the function that updates the current value 

const handleClick = () => {

    setloader(true);
  setTimeout(() => {
    setloader(false);
    console.log("it's ready!")
  }, 4000);

}

return (
<>

<div className="flex flex-col items-center justify-center h-screen space-y-4"></div>
<button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-800 transition" onClick={handleClick}>start loading</button>
{/* then we can use the conditional statement */}

{enableload && <div className=" flex items-center justify-center space-x-2 p-4 bg-grey-100 rounded-lg shadow-md">
    
    <div className="w-6 h-6 border-4 border-blue-500 border-t-transparent rounded-full animate-spin">
    </div>
 <span className="text-slate-500">Loading.....</span>
    </div>}
</>


)


}

export default Loading;