import React,{useState,useEffect} from "react"

function ColorGen(){
    const[thecolor,setthecolor]=useState("green")
    const[typeofcolor,setThetypeofcolor]=useState("hex")

    function randomAsscolor(lengt){
        return Math.floor(Math.random()*lengt)
    }
    
    function handleHEX(){
     let hex=[1,2,3,4,5,6,7,8,9,0,"A","B","C","D","E","F"]
     let hexcolors="#";
     for(let i=0;i<6;i++){
      hexcolors += hex[randomAsscolor(hex.length)]
     }
     setthecolor(hexcolors)
    }

    function handleRGB(){
        let r=randomAsscolor(260)
        let g=randomAsscolor(260)
        let b=randomAsscolor(260)

        setthecolor("RGB("+r+","+g+","+b+")")
    }
 
 return(
    <>
    <div style={{
        height:"100vh",
        width:"100vw",
        background:thecolor
    }}>
        <button onClick={()=>setThetypeofcolor("Hex")}>HexColor</button>
         <button onClick={()=>setThetypeofcolor("RGB")}>RGBcolor</button>
         <button onClick={typeofcolor==="Hex"?handleHEX:handleRGB}>chnage color</button>
         <h1>{typeofcolor}</h1>
    </div>
    </>
 )
}
export default ColorGen