import { useState } from "react"

function Light(){
    const [color,setColor]=useState("")

    //function HandleOn
    const HandleOn =()=>{
        setColor("red")
    };

    //function HandleOff
    const HandleOff =()=>{
        setColor("white")
    };
    return(
        <div className="ml-[550px] mt-[100px]">
            <div style={{backgroundColor:color}} className="w-[200px] h-[200px] border-2 border-black rounded-full"></div>
            <div>
                <button onClick={HandleOn} className="bg-orange-500 py-2 px-8 m-2 rounded-md ">On</button>
                <button onClick={HandleOff} className="bg-orange-500 py-2 px-8 m-2 rounded-md ">Off</button>
            </div>

        </div>
    )
}
export default Light