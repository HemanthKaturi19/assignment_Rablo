import React,{useState,useEffect} from 'react'
import Cards from './Cards'
import {giveData} from "../data/data"
const Home = () => {
    const [inputVal,setInputVal]=useState("");
    const [emData,setEmData]=useState([]);
    const [searched,setSearched]=useState(false);
    const [filteredData,setFilteredData]=useState([]);
    useEffect(()=>{
      const fetchData=()=>{
          const result=giveData();
          setEmData(result);
      };
      fetchData();
    },[]);
      const handleInput=(event)=>{
        setInputVal(event.target.value);
        if(event.target.value===""){
            setSearched(false);
            setFilteredData([]);
        }
    }
    const handleChange=()=>{
       const filtereddata=emData.filter(emp=>emp.id.toString()===inputVal || emp.employee_name.toLowerCase()===inputVal.toLowerCase());
       setFilteredData(filtereddata);
       setSearched(val=>!val); 
    }
    const handleBack=()=>{
        setInputVal("");
        setSearched(false);
        setFilteredData([]);
    }
  return (
    <div>
        <div className="h-44 bg-indigo-500 ">
        <h1 className="relative text-5xl text-white font-semibold ml-24 top-4">Employee Details</h1>
        <div className="relative flex justify-center mt-14">
            <input type="text" placeholder='Employee ID or Name' className="h-10 w-96 px-12 rounded-l-3xl outline-none" value={inputVal} onChange={handleInput}/>
            <button onClick={()=>{
                if(!searched){
                    handleChange();
                }
            }} className="bg-gray-400 hover:bg-gray-600 text-white w-36 rounded-r-3xl flex justify-center items-center text-lg font-semibold ">search</button>
        </div>
      </div>
       {(!searched || (inputVal=="")) && <Cards emData={emData} setEmData={setEmData} handleBack={handleBack}/>}
       {searched && <Cards emData={filteredData} setEmData={setEmData} handleBack={handleBack}/>}
    </div>
  )
}

export default Home
