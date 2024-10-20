import React,{useState,useEffect} from 'react'
import pic from "../assets/no-profile-picture.webp"
import { FaArrowLeftLong } from "react-icons/fa6";
import { Link } from 'react-router-dom';
const Cards = ({emData,setEmData,handleBack}) => {
  const handleClick=(id)=>{
    if(emData.length==1){
      alert("can not delete when there is one field,please go back");
    }
    if(emData.length>1){
      const confirmDelete=window.confirm("Do you want to delete this record");
    if(confirmDelete){
      const filtered=emData.filter(emp=>emp.id.toString()!==id.toString());
      setEmData(filtered);
    }
    }
  }
  return (
    <div>
      <div className={`py-6 ${emData.length<=1?"bg-white":"bg-zinc-100"}`}>
        {emData.length>1 && <h2 className=" relative text-4xl text-gray-600 font-semibold ml-64">Employees</h2>}
        {emData.length==0 && <h1 className="text-xl text-gray-400 font-normal text-center">
          <button onClick={handleBack} className="h-fit w-fit bg-zinc-200 rounded-full p-4 mr-4"><FaArrowLeftLong /></button>
          No Employee with this Id or Name</h1>}
        <div className="ml-96">
         {emData.map((emp)=>(
            <React.Fragment key={emp.id}>
              {emData.length==1 && <button onClick={handleBack} className="h-fit w-fit bg-zinc-200 rounded-full p-4"><FaArrowLeftLong /></button>}
              <div className="justify-between items-center mt-14 bg-white border-2 border-gray-400 p-4 rounded-lg w-7/12 z-5 hover:border-gray-600 transform hover:scale-105 transition duration-200 ease-out">
                 <Link to={`/SingleEmpDetails/${emp.id}` } className="flex justify-between items-center">
                 <div >
              <p className="mt-2 font-semibold">Employee ID: {emp.id}</p>
              <p className="mt-2 font-semibold">Employee Name: {emp.employee_name}</p>
              <p className="mt-2 font-semibold">Employee Salary: {emp.employee_salary}</p>
              </div>
             <img src={pic} alt="Logo" className="h-32 w-32" />
             </Link>
                <div className="flex justify-between items-center mt-8">
                <button className="bg-green-600 flex justify-center items-center text-white ml-8 h-10 w-36 p-4 text-lg rounded-lg transform hover:scale-105 transition duration-200 ease-out">Edit</button>
                <button onClick={()=>handleClick(emp.id)} className=" bg-red-600 flex justify-center items-center text-white mr-8 h-10 w-36 p-4 text-lg rounded-lg transform hover:scale-105 transition duration-200 ease-out">Delete</button>
            </div>
              </div>
            </React.Fragment>
        ))}
        </div>
      </div>
    </div>
  )
}

export default Cards
