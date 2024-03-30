import React from 'react'
import {LogoutButton} from './LogoutButton'
import { useNavigate } from 'react-router-dom';
export const AppBar = ({username,firstLetter}) =>{
  const navigate = useNavigate()
  const removeToken = () => {
    localStorage.removeItem("token"); // Remove token from localStorage
    localStorage.removeItem("firstName"); // Remove token from localStorage
    navigate("/signup"); // Navigate to signup page
    console.log("token removed");
  };
  return (
    <div className="shadow flex justify-between h-14 ">
      <div className=" flex flex-col justify-center h-full ml-4 font-semibold">
        CashKaro  App
      </div>
      <div className="flex ">
        <div className=" flex flex-col justify-center h-full font-medium mr-3.5">{username}</div>
        <div className=" bg-slate-300 rounded-full h-12 w-12 flex justify-center mt-1 mr-3">
            <div className="flex flex-col justify-center h-full text-xl font-bold">{firstLetter}</div>
        </div>
        <div className=' flex justify-center items-center mt-2'>
      <LogoutButton onClick={removeToken}/>
      </div>
      </div>
    </div>
  );
}


