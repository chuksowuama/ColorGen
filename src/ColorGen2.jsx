import React,{useState} from "react";

function ColorGen2(){
 
    const[colorType,setColotType]=useState("hex")
    const[color,setColor]=useState("black")
    
    function randomnumber(lenght){
      return Math.floor(Math.random()*lenght)
    }
    
    function handlehexcolor(){
     let hex=[0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"]
     let hexColor="#"
     for(let i=0;i<6;i++){
        hexColor+=hex[randomnumber(hex.length)]
     }
     setColor(hexColor)
    }
    
    function handleRGBcolor(){
    const r=randomnumber(260)
    const g=randomnumber(260)
    const b=randomnumber(260)
    
    setColor("rgb("+r+","+g+","+b+")")
    }
    
        return(
            <>
             <div style={{
                    width: "100vw",
                    height:"100vh",
                    textAlign:"center",
                    background: color,
            }}>
                <button onClick={()=>setColotType("hex")}>Create hexColor</button>
                <button onClick={()=>setColotType("RGB")}>Create RGBcolor</button>
                <button onClick={colorType==="hex"?handlehexcolor:handleRGBcolor}>Create randomColor</button>
                <div>
                    <h1>{color}</h1>
                    <h1>{colorType}</h1>
                </div>
            </div>
           </>

  )
}
export default ColorGen2