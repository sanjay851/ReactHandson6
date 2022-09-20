import React, {useState,useContext} from 'react';
import './Allfiles.css';
import {Link,useNavigate } from 'react-router-dom';
import { store } from './StudentDetail';
const Add = () => {
    const [data] = useContext(store);
   const [name, setName] = useState("");
   const [age, setAge] = useState("");
   const [batch, setBatch] = useState("");
   const [course, setCourse] = useState("");
   let history = useNavigate();
   const handleSubmit = (e) =>{
    e.preventDefault();
    const ids = '';
    let uniqueId = ids.slice(0,8);
    let a = name, b = age, c = batch, d = course;
    data.push({id: uniqueId, Name : a, Age: b, Batch: c, Course: d});
    history('/student');
   }
   return ( 
    <div>
    <form>
    <label>Name:<input type="text" required onChange={(e)=> setName(e.target.value)}/></label>
    <label>Age:<input type="number" required onChange={(e)=> setAge(e.target.value)}/></label>
    <label>Batch:<input type="text" required onChange={(e)=> setBatch(e.target.value)}/></label>
    <label>Course:<input type="text" required onChange={(e)=> setCourse(e.target.value)}/></label>
    <button onClick={(e)=> handleSubmit(e)} className="save" type="submit">Submit</button>
    <Link to="/student">
    <button className="Cancle">Cancle</button>
    </Link>
    </form>
    </div>
  )
}
export default Add;