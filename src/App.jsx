import { useState } from "react"

function App() {
  const [color, setColor] = useState("pink")
  const green=()=>{
    setColor("green");
  }
  const red=()=>{
    setColor("red");
  }
  const blue=()=>{
    setColor("blue");
  }
  const gray=()=>{
    setColor("gray");
  }
  const orange=()=>{
    setColor("orange");
  }
  const yellow=()=>{
    setColor("yellow");
  }
  const olive=()=>{
    setColor("olive");
  }
  const lime=()=>{
    setColor("lime");
  }
  const teal=()=>{
    setColor("teal");
  }
  const cyan=()=>{
    setColor("cyan");
  }
  return (
    <>
     <div className="w-full h-screen" style={{backgroundColor: color}}>
      <div className="fixed flex flex-wrap bottom-12 justify-center inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
        <button onClick={green} className=" px-3 py-2 rounded-full" style={{backgroundColor:"green"}}>green</button>
        <button onClick={red} className=" px-3 py-2 rounded-full" style={{backgroundColor:"red"}}>red</button>
        <button onClick={blue} className=" px-3 py-2 rounded-full" style={{backgroundColor:"blue"}}>blue</button>
        <button onClick={gray} className=" px-3 py-2 rounded-full" style={{backgroundColor:"gray"}}>gray</button>
        <button onClick={orange} className=" px-3 py-2 rounded-full" style={{backgroundColor:"orange"}}>orange</button>
        <button onClick={yellow} className=" px-3 py-2 rounded-full" style={{backgroundColor:"yellow"}}>yellow</button>
        <button onClick={olive} className=" px-3 py-2 rounded-full" style={{backgroundColor:"olive"}}>olive</button>
        <button onClick={lime} className=" px-3 py-2 rounded-full" style={{backgroundColor:"lime"}}>lime</button>
        <button onClick={teal} className=" px-3 py-2 rounded-full" style={{backgroundColor:"teal"}}>teal</button>
        <button onClick={cyan} className=" px-3 py-2 rounded-full" style={{backgroundColor:"cyan"}}>cyan</button>
        </div>
      </div>
     </div>
    </>
  )
}

export default App
