"use client"
import React, { useState } from "react";
const page = () =>{
   const [title, settitle] = useState("")
   const [desc, setdesc] = useState("")
   const [mainTask, setmainTask] = useState([])
   const submitHandler = (e)=>{
    e.preventDefault()
    setmainTask([...mainTask, {title, desc}]);
    settitle("");
    setdesc("");
    console.log(mainTask);
   }
   const deleteHandler = (i)=>{
        let copyTask = [...mainTask]
        copyTask.splice(i,1)
        setmainTask(copyTask)
   }
   var empty = <h2>No task Available</h2>
   if(mainTask.length>0){
    empty = mainTask.map((t,i)=>{
        return (
           <div key={i} className="flex items-center justify-between mb-5 w-2/">
                <h5 className="text-2xl font-semibold">{t.title}</h5>
                <h5 className="text-2xl font-semibold">{t.desc}</h5>
            <button onClick={()=>{deleteHandler(i)}} 
            className="bg-red-400 text-white px-4 py-2 rounded font-bold">Delete</button>
            </div>
        )
       })
   }
    return(
        <>
           <h1 className="bg-black text-white p-5 text-5xl font-bold text-center">Your's ToDo List </h1>
            <form onSubmit={submitHandler}>
                <input type="text" className="text-2xl border-zinc-800 border-4 m-5 px-4 py-2" placeholder="Enter title" value={title} onChange={(e)=>{
                    settitle(e.target.value)
                }}/>
                <input type="text" className="text-2xl border-zinc-800 border-4 m-5 px-4 py-2" placeholder="Enter Descriptipn here" value={desc} onChange={(e)=>{
                    setdesc(e.target.value)
                }}/>
                <button className="bg-black text-white px-4 py-2 text-2xl font-bold rounded m-5">
                    Add Task 
                </button>
            </form>
            <hr />
            <div className="p-8 bg-slate-200" >
                {empty}
            </div>
        </>
    ) 
}
export default page
