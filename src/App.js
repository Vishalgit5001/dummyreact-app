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
 console.warn("ApiData",data)
  return(
    <div className="App">
      <h1>Get API CAll</h1>
      <table border="1" >
        <tr>
          <td>id</td>
          <td>name</td>
          <td>year</td>
          <td>Color</td>
          <td>pantone_value</td>
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