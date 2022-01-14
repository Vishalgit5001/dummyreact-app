import './App.css';
import React,{useEffect,useState} from 'react';
//import axios from 'axios';

function App(){
  const[data,setData]=useState([]);
  const[serchText,setSearchText]=useState('');
  //const newdata=onSearchTextChange;
  useEffect(()=>{
     },[])

     function onSearchTextChange(data){
    //if(onSearchTextChange=1){
       setSearchText(data.target.value)
      fetch("https://reqres.in/api/users?page=2").then((result)=>{
        result.json().then((resp)=>{
         setData(resp.data)
        })
      })
// } else{<>"assignment call"</>}
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
    <h1> GET DUMMY API FETCHING </h1>
   <input type='text' placeholder='search' value={serchText} onChange={onSearchTextChange}></input><br/><br/>
    <table border="5">
        {
         data.map((item)=>
         <tr>
         <td>{item.id}</td>
         <td>{item.email}</td>
         <td>{item.first_name}</td>
         <td>{item.last_name}</td>
         <td>{item.avatar}</td>
       </tr>
         )
       }
       
      </table>
    </div>
  );
}
export default App;