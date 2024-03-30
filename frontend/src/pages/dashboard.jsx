import { useEffect, useState } from "react";
import { AppBar } from "../components/appbar";
import { Balance } from "../components/balance";
import { Users } from "../components/users";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const Dashboard = () => {
  const [balance, setBalance] = useState("loading...");
  const [username, setUsername] = useState(""); 
  const firstLetter = username && username.length > 0 ? username[0].toUpperCase() : '';


  useEffect(() => {
    fetchUserBalance();
  }, []);

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("token") ;
    const storedUsername = localStorage.getItem("firstName")
    console.log("Stored username:", storedUsername); // Log stored username 
    if (isLoggedIn) {
       console.log("Currently Logged In");
       toast.success("Currently Logged In",{});
    }
    if (storedUsername) {
      setUsername(storedUsername);
    }

  }, []);

  const fetchUserBalance = async () => {
    try {
        const response = await axios.get('http://localhost:3000/api/v1/account/balance', {
            headers: {
                    Authorization: "Bearer " + localStorage.getItem("token"),
                  },
        });
        const data = response.data;
        setBalance(data.balance.toFixed(2));
    } catch (error) {
        console.error('Error fetching user balance:', error);
        setBalance("Error");
    }
  };
  return (
    <>
      <AppBar username={username} firstLetter={firstLetter}/>
      <div className="m-8">
        <Balance value={balance} />
        <Users />
      </div>
      <ToastContainer/>
    </>
  );
};
