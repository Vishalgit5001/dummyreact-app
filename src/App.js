import './App.css';
import React,{useEffect,useState} from 'react';
//import axios from 'axios';

function App(){
  const[data,setData]=useState([]);
  const[searchText,setSearchText]=useState('');
  const[error,setError]=useState([]);
  //const newdata=onSearchTextChange;
  useEffect(()=>{
     },[])

      function onSearchTextChange(data){
      setSearchText(data.target.value)
      if(searchText=='1'){
      console.log("HelloError",onSearchTextChange) 
      fetch("https://gorest.co.in/public/v1/posts").then((result)=>{
     
      result.json().then((resp)=>{
      setData(resp.data)
        })
      })
 }else{<>"Please press 1"</>}
}

 console.warn("Api Data",data)
  return(
    <div className="App">
    <h1> GET DUMMY API FETCHING </h1>
   <input type='text' placeholder='search' value={searchText} onChange={onSearchTextChange}></input><br/><br/>
   
    <table border="5">
        {
         data.map((item)=>
         <tr>
         <td>{item.id}</td>
         <td>{item.user_id}</td>
         <td>{item.title}</td>
         <td>{item.body}</td>
      
       </tr>
         )
       }
       
      </table>
    </div>
  );
}
export default App;