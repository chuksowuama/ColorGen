import React, { useState } from "react";

function ColorGen3(){
    const[color,setColor]=useState("black")
    const[Colortype,setColorType]=useState("HEX")


    function AnyRandomnumber(length){
      return Math.floor(Math.random()*length)
    }

    function handleHex(){
      let hex=[0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F",]
      let hexcolor="#"
      for(let i=0;i<6;i++){
        hexcolor+=hex[AnyRandomnumber(hex.length)]
      }
      setColor(hexcolor)
    }

    function handleRgb(){
      let r=AnyRandomnumber(260)
      let g=AnyRandomnumber(260)
      let b=AnyRandomnumber(260)

     setColor("rgb("+r+","+g+","+b+")")
    }

    return (
        <>
        <div style={{
            height:"100vh",
            width:"100vw",
            background:color,
            textAlign:"center"
        }}>
            <button onClick={()=>setColorType("HEX")}>HEX</button>
            <button onClick={()=>setColorType("rgb")}>RGB</button>
            <button onClick={Colortype==="HEX"?handleHex:handleRgb}>ChangeColortype</button>

            <div>
               {color}
               {Colortype}
            </div>
        </div>
        </>
    )
} 
export default ColorGen3