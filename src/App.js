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
  fetch("	http://dummy.restapiexample.com/api/v1/employees").then((result)=>{
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
    <h1> GET API CALL </h1>
   <input type='text' placeholder='search' value={serchText} onClick={onSearchTextChange}></input>
    <br/>
    <br/>
    <table border="5" >
       {
         data.map((item)=>
         <tr>
         <td>{item.id}</td>
         <td>{item.employee_name}</td>
         <td>{item.employee_salary}</td>
         <td>{item.employee_age}</td>
         <td>{item.profile_image}</td>
       </tr>
         )
       }
       
      </table>
    </div>
  );
}
export default App;