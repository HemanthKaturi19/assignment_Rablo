import React,{useState,useEffect} from 'react'
import pic from "../assets/no-profile-picture.webp";
import { FaArrowLeftLong } from "react-icons/fa6";
import { Link,useParams,useNavigate } from 'react-router-dom';
import {giveData,deleteData} from "../data/data"
const SingleEmpDetails = () => {
    const [emData,setEmdata]=useState([]);
    const {id}=useParams();
    const [showNotification,setShowNotification]=useState(false);
    const navigate=useNavigate();
    useEffect(()=>{
        const fetchData=()=>{
            const result=giveData();
            console.log(result);
            setEmdata(result);
        };
        fetchData();
      },[]);
     const record=emData.filter(emp=>emp.id.toString()===id)[0];
     if(!record) {
        return <p>Loading employee details...</p>;  // Add a loading state or handle "not found"
      }    
      const handleClick=()=>{
        alert("Do you want to delete this record");
        deleteData(record.id);
        setShowNotification(true);
        setTimeout(()=>{
            navigate("/");
        },2000);
      }
  return (
    <div>
        { showNotification && <div className="bg-black flex justify-center items-center text-white opacity-60 h-16 w-96 rounded-2xl px-4 mt-[320px] ml-[600px]">
            <h1>Employee record has been deleted</h1>
        </div>}
     {!showNotification && <div className=" w-full h-screen flex justify-center items-center bg-zinc-100">
        <div className="w-5/12 h-fit bg-white border-2 border-gray-400 p-6 rounded-2xl  ml-12 ">
        <div className="flex ">
        <Link to="/" className="h-fit w-fit bg-zinc-100 rounded-full p-4 mt-0 mb-6"><FaArrowLeftLong /></Link>
        <h1 className=' ml-24 text-2xl text-gray-600 font-semibold mt-6'>Employee Information</h1>
        </div>
          <div className="flex justify-around">
          <div className="mr-8 mt-16 text-gray-700">
          <p className="mt-2 text-xl font-semibold">Employee ID: {record.id}</p>
          <p className="mt-2 text-xl font-semibold">Employee Name: {record.employee_name}</p>
          <p className="mt-2 text-xl font-semibold">Employee Salary: {record.employee_salary}</p>
          <p className="mt-2 text-xl font-semibold">Employee age:{record.employee_age}</p>
          </div>
          <img src={pic} alt="Logo" className="h-[280px] w-[250px] mt-12 "/>
          </div>
          <div className="flex justify-between items-center mt-12 ">
            <button className="bg-green-600 flex justify-center items-center text-white ml-6 h-10 w-36 p-4 text-lg rounded-lg transform hover:scale-105 transition duration-200 ease-out">Edit</button>
            <button onClick={handleClick} className=" bg-red-600 flex justify-center items-center text-white mr-6 h-10 w-36 p-4 text-lg rounded-lg transform hover:scale-105 transition duration-200 ease-out">Delete</button>
        </div>
        </div>
      </div>}
    </div>
  )
}

export default SingleEmpDetails
