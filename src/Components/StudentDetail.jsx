import React , {createContext, useState} from 'react'
export const store = createContext()
const StudentDetail = (props) => {
    const [data,SetData] = useState([])
  return (
    <div>
    <store.Provider value={[data,SetData]}>
    {
    props.children
   }  
     </store.Provider>
    </div>
  )
}
export default StudentDetail;