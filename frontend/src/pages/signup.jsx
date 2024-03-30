import { Heading } from "../components/Heading";
import { SubHeading } from "../components/Sub-Heading";
import { Button } from "../components/button";
import { BottomWarming } from "../components/Bottom-warming";
import { InputBox } from "../components/inputBox";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const Signup = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignUp = async()=>{
    try {
      const response = await axios.post(
        "http://localhost:3000/api/v1/user/signup",
        {
          username,
          firstName,
          lastName,
          password,
        } 
      );
      console.log(response.data);
      localStorage.setItem("token", response.data.token);
      navigate("/dashboard");
    } catch (error) {
      console.error("Signup Failed",error)
      toast.alert("Please correct info",{})
    }
      
  }


  return (
    <div className=" bg-slate-300 h-screen flex justify-center ">
      <div className=" flex flex-col justify-center ">
        <div className=" rounded-lg bg-white w-80 text-center h-max p-2 px-4 border-3 border-black">
          <Heading label={"Sign Up"} />
          <SubHeading label={"Enter your information to create your account"} />
          <InputBox
            onChange={(e) => {
              setFirstName(e.target.value);
            }}
            label={"FirstName"}
            placeholder={"FirstName"}
          />
          <InputBox
            onChange={(e) => {
              setLastName(e.target.value);
            }}
            label={"LastName"}
            placeholder={"LastName"}
          />
          <InputBox
            onChange={(e) => {
              setUsername(e.target.value);
            }}
            label={"Username"}
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
            onClick={handleSignUp}
            label={"Sign Up"}
          />
          <BottomWarming
            label={"Dont have a account"}
            buttonText={"Sign In"}
            to={"/"}
          />
        </div>
      </div>
    </div>
  );
};
