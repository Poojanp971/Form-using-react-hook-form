import React from "react";
import bgImg from '../assets/img1.jpeg';
import { useForm } from "react-hook-form";

export default function Form() {

const {register, handleSubmit, watch, formState:{errors}} = useForm();
const onSubmit = data => console.log(data);

console.log(watch('password'));
  return (
    <section>
      <div className="register">
        <div className="col-1">
          <h2>Sign In</h2>
          <span>Register and Enjoy</span>
          <form id="form" className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
            <input type="text" {...register("username")} placeholder="username" />
            <input type="password" {...register("password")} placeholder="password" />
            <input type="password" {...register("confirm-password")} placeholder="Confirm password" />
            <input type="" {...register("mobile", {required: true, maxLength:10, minLength:10})} placeholder="Mobile Number" />
            {errors.mobile?.type === "required" && "Mobile Number is Required"}
            {errors.mobile?.type === "minLength" && "Mobile Number Should be atleast 10 digits long!"}
            <button className="btn"> Sign In </button>
          </form>
        </div>
        <div className="col-2">
            <img src={bgImg} alt="bgimage" />
        </div>
      </div>
    </section>
  );
}
