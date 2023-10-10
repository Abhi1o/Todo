import React from "react";
import todoImg from "../todo-img.png";
import deskImg from "../assets/desk-img.jpg";
import lapImg from "../assets/lap-img.png";
const Hero = () => {
  return (
    <>
      <div className='hero flex justify-center '>
          <img className=" hover:backdrop-invert-0 shadow-md hover:bg-[image:var(https://as1.ftcdn.net/v2/jpg/02/68/48/86/1000_F_268488616_wcoB2JnGbOD2u3bpn2GPmu0KJQ4Ah66T.jpg)] " src={lapImg} alt="" />
        </div> 
    </>
  );
};
export default Hero;
