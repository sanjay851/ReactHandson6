import React,{useState, useEffect, useContext} from 'react';
import './Allfiles.css';
import {Link, useNavigate } from 'react-router-dom';
import { store } from './StudentDetail';

const EditDetail = () => {
  const [data] = useContext(store);

  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [batch, setBatch] = useState("");
  const [course, setCourse] = useState("");

  let Entrynewdetail = useNavigate();

    var index = data.map(function(e){
      return e.id
    }).indexOf(id);
    const handleSubmit = (e) =>{
      e.preventDefault();
      let a = data[index];
      a.Name = name;
      a.Age = age;
      a.Batch = batch;
      a.Course = course;
      Entrynewdetail('/student');
     }
 useEffect(()=>{
  setId(localStorage.getItem('Id'))
  setName(localStorage.getItem('Name'))
  setAge(localStorage.getItem('Age'))
  setBatch(localStorage.getItem('Batch'))
  setCourse(localStorage.getItem('Course'))
 },[])

  return (
    <div>
    <form>
    <label>Name:<input type="text" value={name} required onChange={(e)=> setName(e.target.value)}/></label>
    <label>Age:<input type="number" value={age} required onChange={(e)=> setAge(e.target.value)}/></label>
    <label>Batch:<input type="text" value={batch} required onChange={(e)=> setBatch(e.target.value)}/></label>
    <label>Course:<input type="text" value={course} required onChange={(e)=> setCourse(e.target.value)}/></label>
    <button onClick={(e)=> handleSubmit(e)} className="update" type="submit">Update</button>
    <Link to="/student">
    <button className="Cancle">Cancle</button>
    </Link>
    </form>
    </div>
  )
}

export default EditDetail;