import React,{useState} from "react"
function ColorGen4(){
    const[TheColors, setTheColors]=useState("black")
    const[changeCol,setChangeCol]=useState("hex")
    const[HEXcolors,setHexColors]=useState("#0000")


     function randomonly(length){
        return Math.floor(Math.random()*length)
     }
      function HexColors(){
        let hex=["A","B","C","D","E","F",0,1,2,3,4,5,6,7,8,9,]
        let hexcolor="#"
        for(let i=0;i<6;i++){
         hexcolor+=hex[randomonly(hex.length)]
        }
        setTheColors(hexcolor)
      }
      function RGBcolors(){
       let r=randomonly(260)
       let g=randomonly(260)
       let b=randomonly(260)
        setTheColors("RGB("+r+","+g+","+b+")")
      }
    return (
        <>
        <div style={{
            border:"2px solid black",
            height:"100vh",
            width:"100vw",
            textAlign:"center",
            background:TheColors
        }}>
          
            <button onClick={()=>setChangeCol("hex")}>HEX COLORS</button>
            <button onClick={()=>setChangeCol("RGB")}>RGB COLORS</button>
            <button onClick={changeCol==="hex"?HexColors:RGBcolors}>CHANGE COLORS</button>
             
            <h1>{TheColors}</h1>
            <h2>{changeCol}</h2>
        </div>
        </>
    )
}
export default ColorGen4