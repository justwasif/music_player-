import './App.css'
import { useState,useEffect } from 'react';

export default function App() {
  let [local,setLocal]=useState()
  const handleUpload= (e)=>{
    // const file=e.target.files[0]
    const sun=new FileReader();
    //jab puri file load hojaye usske baad
    sun.onload=()=>{
      const convert=sun.result
      localStorage.setItem("music",convert);
      setLocal(convert);
      alert("sumbitted")


    };
    // sun.readAsDataURL(file);
    console.log("sumbit hogaya")
   
    
  };
  const handleDownload=()=>{
    let download=localStorage.getItem("music");
    console.log("dikhna to chiyea")
    const a=document.createElement("a");
    a.href=download;
    a.download="chaman";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };
  const handleplat=()=>{
    const play=localStorage.getItem("music");
    setLocal(play);
    
    console.log("chala??",play)
  };
  const clear=()=>{
    localStorage.removeItem("music");
    localStorage.clear()
    console.log("done")

  }
  
  
  return (
   <div>
    <h1>upload</h1>
    <input type='file' onChange={handleUpload} /> 
    <button onClick={handleDownload}>handleDownload</button>
    <br/>
    <button onClick={handleplat}>play</button>
    {local &&<audio src={local} controls autoPlay/>}
    <br/>
    <button onClick={clear}>clear</button>
   </div>
  );
}
