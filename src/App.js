
import axios from 'axios';
import React, { useEffect, useRef } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';


function App() {

  const [employee, setEmployee] = useState([])
  const [update,setUpdate]=useState(false)
  const [updater,setUpdater]=useState({name:"",designation:"",id:""})
const [msg,setMsg]=useState("")
const params=useParams()

  useEffect(() => {

    axios.get('http://localhost:4000/employees/')
      .then(response => { setEmployee(response.data) })

     console.log(params)

  }, [])


const updateFn=(e)=>{


 const empdata= employee.find(x=>{
  if(x.id == e.target.value)
  {
    return x
  }
})
setUpdater(empdata)
 

}
const handleSubmit=(e)=>{
e.preventDefault()



let obj={name:e.target.name.value,
  id:e.target.id.value,
  designation:e.target.designation.value
}


axios.put(`http://localhost:4000/employees/${obj.id}`,obj).then(res=>{
  let index=employee.findIndex(x=>x.id==res.data.id)



let temp = [...employee];
temp[index] = res.data

setEmployee(temp)})
setMsg("updated")
}

const deleteEmp=(id)=>{

  axios.delete(`http://localhost:4000/employees/${id}`).then(res=>{
    let index=employee.findIndex(x=>x.id==id)
  employee.pop(index)
  setEmployee(employee)
  setMsg("delete")

  })
}

  return (<>

    <table border={1}>
      <thead><tr>
        <th>EmployeeId</th><th>Name</th><th>Designation</th><th>delete</th>
       </tr>
    </thead>
    <tbody>
        {employee.map(x => {

          return (
            <tr key={x.id}>
              <td>{x.id}</td>
              <td>{x.name}</td>
              <td>{x.designation}</td>
              <td onClick={()=>deleteEmp(x.id)}>delete</td>
            </tr>
          )
        })}
      </tbody>
    </table>
    <button onClick={()=>setUpdate(true)}>update</button>

    {update?
    <div>
      <label>name</label>
   <select onChange={(event)=>updateFn(event)}>


  {employee.map(x=><option key={x.id} value={x.id}>{x.id}</option>)}
 
 </select>
 </div>
 


    :""}


{updater?<div>
  <form onSubmit={(event)=>handleSubmit(event)}>
  <input type='text' name="id" onChange={(e)=>{ setUpdater({...updater,id:e.target.value})}} value={updater.id}/> 
  <input  type='text' name="name" onChange={(e)=>{ setUpdater({...updater,name:e.target.value})}}   value={updater.name}/>
   <input  type='text' name="designation" onChange={(e)=>{ setUpdater({...updater,designation:e.target.value})}}  value={updater.designation}/>
<input type='submit' value={"Submit"}/>   
   </form>
</div>:""}
{msg}
  </>)

}
export default App;
