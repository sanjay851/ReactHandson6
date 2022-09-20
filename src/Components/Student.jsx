import {React, useContext}  from 'react'
import Navbar from './Navbar'
import {Link,useNavigate} from 'react-router-dom'
import {store} from './StudentDetail'

const Student = () =>{
  const [data] = useContext(store);
  let history = useNavigate();

  const handleDelete = (id) =>{
    var index = data.map(function(e){
      return e.id
    }).indexOf(id);
    data.splice(index,1);

    history('/student');
  }

  const handleEdit = (id, name, age, batch, course) =>{
    localStorage.setItem('Id',id);
    localStorage.setItem('Name',name);
    localStorage.setItem('Age',age);
    localStorage.setItem('Batch',batch);
    localStorage.setItem('Course',course);
  }
  return (
    <div>
       <Navbar/>
       <h2 className='stud'>Student Details</h2>
       <Link to="/add">
       <button className='btnans'>Add New Student</button>
       </Link>
       <table class="table table-dark table-sm">
  <thead>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">Age</th>
      <th scope="col">Course</th>
      <th scope="col">Batch</th>
      <button className='btn btn-primary'>Change</button>
      <button type="button" class="btn btn-danger">Danger</button>
    </tr>
  </thead>
  <tbody>
  {data.map((student) =>  (
    <tr>
     <td>{student.Name}</td>
      <td>{student.Age}</td>
      <td>{student.Course}</td>
      <td>{student.Batch}</td>
      <td><Link to="/edit">
      <button onClick={()=> handleEdit(student.id, student.Name, student.Age,student.Batch,student.Course)} className='btn btn-primary'>Edit</button>
      </Link></td>
      <td>
      <button onClick={()=>handleDelete(student.id)} className='btn btn-primary'>Delete</button>
    </td>
    </tr>
     ))}
  </tbody>
</table>
    </div>
  )
}
export default Student;