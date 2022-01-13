import './App.css';
import React,{useEffect,useState} from 'react';
//import axios from 'axios';

function App(){
  const[data,setData]=useState([]);
  const[serchText,setSearchText]=useState('');

  useEffect(()=>{
     
  },[])

  function onSearchTextChange(data){
  setSearchText(data.target.value)
  fetch("	https://reqres.in/api/unknown'").then((result)=>{
    result.json().then((resp)=>{
      setData(resp.data)
    })
  })
  }

 /* this.handleSubmit = event => {
    event.preventDefault();

      axios.get('https://reqres.in/api/unknown', {
          responseType: 'json'
      }).then(resp => {
          setData( resp.data );
      });
  } */

 console.warn("Api Data",data)
  return(
    <div className="App">
    <h1> GET API FETCHING </h1>
   <input type='text' placeholder='search' value={serchText} onClick={onSearchTextChange}></input>
    <br/>
    <br/>
    <table border="5" >
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