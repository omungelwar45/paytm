import { Heading } from "../components/Heading";
import { SubHeading } from "../components/Sub-Heading";
import { Button } from "../components/button";
import { BottomWarming } from "../components/Bottom-warming";
import { InputBox } from "../components/inputBox";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const Signin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignIn = async ()=>{
      try {
          const response = await axios.post(
              "http://localhost:3000/api/v1/user/signin",
              {
                username,
                password,
              }
            );
            console.log(response.data);
            localStorage.setItem("token", response.data.token);
            localStorage.setItem("firstName", response.data.firstName);
            navigate("/dashboard");
      } catch (error) {
          console.error("Signin Failed",error)
          toast.alert("Please check your Credentials!",{})
      }
  }
  return (
    <div className=" bg-slate-300 h-screen flex justify-center">
      <div className=" flex flex-col justify-center">
        <div className=" rounded-lg bg-white w-80 text-center h-max p-2 px-4">
          <Heading label={"Sign In"} />
          <SubHeading label={"Enter your credential to access your account"} />
          <InputBox
            onChange={(e) => {
              setUsername(e.target.value);
            }}
            label={"username"}
            placeholder={"Email"}
          />
          <InputBox
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            label={"Password"}
            placeholder={"Password"}
          />
          <Button
            label={"Sign In"}
            onClick={handleSignIn}
          />
          <ToastContainer/> 
          <BottomWarming
            label={"Dont have a account"}
            buttonText={"Sign Up"}
            to={"/signup"}
          />
        </div>
      </div>
    </div>
  );
};
