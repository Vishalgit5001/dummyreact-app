import './App.css';
import React,{useEffect,useState} from 'react';
function App(){
  const[data,setData]=useState([])
  useEffect(()=>{
    fetch("https://reqres.in/api/unknown").then((result)=>{
      result.json().then((resp)=>{
        //console.warn("result",resp)
        setData(resp.data)
      })
    })
  },[])
 console.warn("Api Data",data)
  return(
    <div className="App">
      <h1> GET API CALL </h1>
      <table border="5" >
        <tr>
          <td>Id</td>
          <td>name</td>
          <td>year</td>
          <td>color</td>
          <td>pantone_Value</td>
        </tr>
       {
         data.map((item)=>
         <tr>
         <td>{item.id}</td>
         <td>{item.name}</td>
         <td>{item.year}</td>
         <td>{item.color}</td>
         <td>{item.pantone_value}</td>
       </tr>
         )
       }
       
      </table>
    </div>
  );
}
export default App;