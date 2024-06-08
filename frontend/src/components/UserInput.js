import React, { useContext } from 'react';
import Data from '../DataContext';

const UserInput = () => {
    const { student, setStudent, handleInsert, handleUpdate } = useContext(Data);
    
    const handleFormSubmit = (e) =>{
      e.preventDefault();
     if(!student?.std_id)
      handleInsert();
     else 
      handleUpdate();
    }

  return (
    <main>
      <form className='d-flex flex-column justify-content-around'>
        <div className='d-flex gap-5'>
          <div className='d-flex gap-2'>
              <label htmlFor='fname' className='form-label'> First Name: </label>
              <input type='text' id='fname' name='fname' value={student.first_name || ""} onChange={(e)=>{setStudent({...student, first_name : e.target.value})}} placeholder='First name' className='form-control-md' />
          </div>
          <div className='d-flex gap-2'>
              <label htmlFor='lname' className='form-label'> Last Name: </label>
              <input type='text' id='lname' name='lname' value={student.last_name || ""} onChange={(e)=>{setStudent({...student, last_name : e.target.value})}} placeholder='Last name' className='form-control-md' />
          </div>
        </div>
        <div className='row-cols-2'>
              <label htmlFor='location' className='form-label col-1'> Location: </label>
              <input type='text' id='location' name='location' value={student.location || ""} onChange={(e)=>{setStudent({...student, location : e.target.value})}} placeholder='Location' className='form-control col-1' />
          </div>
        <div className='row-cols-2'>
              <label htmlFor='email' className='form-label col-1'> Email: </label>
              <input type='email' id='email' name='email' value={student.email || ""} onChange={(e)=>{setStudent({...student, email : e.target.value})}} placeholder='Email' className='form-control col-1' />
          </div>
        <div className='row-cols-2'>
              <label htmlFor='dob' className='form-label col-1'> DOB: </label>
              <input type='date' id='dob' name='dob' onChange={(e)=>{ setStudent({...student, dob : `${new Date(e.target.value).getFullYear()}-${new Date(e.target.value).getMonth() + 1}-${new Date(e.target.value).getDate()+1}`}) }} placeholder='DOB' className='form-control col-1' />
          </div>
        <div className='row-cols-2'>
              <label htmlFor='education' className='form-label col-1'> Education: </label>
              <input type='text' id='education' name='education' value={student.education || ""} onChange={(e)=>{setStudent({...student, education : e.target.value})}} placeholder='Education' className='form-control col-1' />
          </div>
          <div>
              <label htmlFor='about' className='form-label'> About: </label>
              <input type='text' name='about' id='about' placeholder='Write something here...' className='form-control' />
          </div>
          <button className='btn btn-dark rounded col-1' onClick={handleFormSubmit}> Submit </button>
      </form>
    </main>
  )
}

export default UserInput;