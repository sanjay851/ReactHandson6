import React from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './Components/Home';
import Student from './Components/Student';
import Contact from './Components/Contact';
import Navbar from './Components/Navbar';
import Add from './Components/Add';
import Edit from './Components/Edit';
import StudentDetail from './Components/StudentDetail';
 class App extends React.Component {
  render() {
    return (
      <div>
        <StudentDetail>
        <BrowserRouter>
         <Routes>
         <Route path="/" element={<Navbar/>}/>
         <Route path="/home" element={<Home/>}/>
         <Route path="/student" element={<Student/>}/>
         <Route path="/contact" element={<Contact/>}/>
         <Route path="/add" element={<Add/>}/>
         <Route path="/edit" element={<Edit/>}/>
         </Routes>
        </BrowserRouter>
        </StudentDetail>
      </div>
    )
  }
}
export default App;