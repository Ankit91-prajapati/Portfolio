import React from "react";
import { Card } from "./canvas";
import CSS from "../assets/tech/css.png"
import HTML from "../assets/tech/html.png"
import javascripts from "../assets/tech/javascript.png"
import react from "../assets/tech/reactjs.png"
import tailwind from "../assets/tech/tailwind.png"
import node from "../assets/tech/nodejs.png"
import typescript from "../assets/tech/typescript.png"
import Django from "../assets/tech/djangos.png"
import Nest from "../assets/tech/Nest.png"
import CPP from "../assets/tech/CPP.png"
import python from "../assets/tech/image.png"




const Tech = () => {
  return (
    <div className=" flex flex-col">
      <h1 className="text-center m-10 text-4xl text-orange-200">Skills</h1>
       <div className='flex flex-row flex-wrap justify-center gap-10'>
     
     <Card image ={CSS}  title = "CSS" />
     <Card image={HTML} title = "HTML"/>
     <Card image={javascripts} title= 'javacsripts'/>
     <Card image={react} title= 'ReactJs'/>
     <Card image={tailwind} title= 'Tailwind'/>
     <Card image={node} title= "Nodejs"/>
     <Card image={typescript} title= "Typescript"/>
     <Card image={Django} title= "Django"/>
     <Card image={Nest} title= "NestJs"/>
     <Card image={CPP} title= "DSA in C++"/>
     <Card image={python} title= "python "/>
   
    </div>

    </div>

   
  );
};

export default Tech;