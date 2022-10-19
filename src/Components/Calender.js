import React, { useEffect, useState } from "react";
import CalenderPackage from "./CalenderPackge";
 
export default function Calender() { 

  // Usestates
    const [data, setData] = useState("")
    const [teacherId, setTeacherId] = useState("")

    // Fetch Function  
    const handlefetch =  async () => {
        let apiData = await fetch(`https://newapi.brightchamps.com/academy/get_slot_info?teacher_id=${teacherId}`)
        let apiJson = await apiData.json() 
        setData(apiJson)  
     }  

     const inputValue = (value) => {
        setTeacherId(value)
      }
      
      const hadnlechange = () => {
        if(teacherId){
          handlefetch()
        }  
      }

    return (
        <>
        <div className="teacherheading">Teacher Calender</div>
        <input placeholder="Enter Teacher Id" type="text" onChange={(e) => inputValue(e.target.value)}/>
        <button onClick={hadnlechange}>Click to Get Info</button>
        {Object.keys(data).length > 0 && <CalenderPackage data={data}/>}
        </>
    )
}
