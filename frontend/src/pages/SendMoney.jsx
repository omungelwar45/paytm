import { useNavigate, useSearchParams } from "react-router-dom"
import axios from 'axios'
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 

export const SendMoney=()=>{
    const [searchParams] = useSearchParams();
    const id = searchParams.get("id");
    const name = searchParams.get("name")
    const [amount,setAmount] = useState(0)
    const navigate = useNavigate();


    const handleTransfer=()=>{
        if (!amount) {
            toast.error("Please enter the amount",{})   
         return;
        }
        
        axios.post("http://localhost:3000/api/v1/account/transfer",{
            to:id,
            amount
        },{
            headers:{
                Authorization:"Bearer " + localStorage.getItem("token")
            }
        }).then((response)=>{
            if (response.status === 200) {  
                toast.success("Transaction Successfull",{})
            } setTimeout(()=>{
                return navigator("/dashboard")
            },3000)
        }).catch(()=>{
            toast.error("Insufficient Balance",{autoClose: 2000,})
        })
        console.log("money sent");
    }

    return(
        <div className=' bg-green-50 h-screen flex justify-center'>
          <div className=" h-full flex flex-col justify-center">
            <div className=" border h-min text-card-foreground max-w-md p-4 bg-white space-y-8 w-96 shadow-lg rounded-lg"> 
            <div className=" flex flex-col space-y-1.5">
                <h2 className=" text-3xl font-bold text-center">Send Money</h2>
            </div>
            <div className="p-6">
                <div className="flex items-center space-x-4">
                    <div className=" w-12 h-12 rounded-full bg-green-400 flex flex-col justify-center text-center">
                        <div className=" text-2xl font-semibold text-white ">{name[0].toUpperCase()}</div>
                    </div>
                    <h3 className=" font-semibold text-2xl">{name}</h3>
                </div>
                <div className="space-y-4 ">
                    <div className="space-y-3">
                        <label className=" text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" htmlFor="amount">Amount (in Rs)</label>
                        <input onChange={(e)=>{
                            setAmount(e.target.value);
                        }} type="text" id="amount" placeholder="Enter Amount" className=" flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"/>
                    </div>
                    <button onClick={handleTransfer} className="justify-center rounded-md text-sm font-medium ring-offset-background transition-colors h-10 px-4 py-2 w-full bg-green-500 text-white">
                        Initiate Transfer
                    </button><div className="flex justify-center">
                    <button onClick={()=>navigate('/dashboard')}  type="button" className ="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">
                                Back
                        </button>
                    </div>
                    <ToastContainer/>
                </div>
            </div>
            </div>
            </div>      
        </div>)
}