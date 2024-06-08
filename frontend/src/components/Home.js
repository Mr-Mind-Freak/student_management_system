import React, { useContext } from 'react';
import Data from '../DataContext';
import { FaRegEdit } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import DeleteModel from './DeleteModel';

const Home = () => {
    const { students, setStudent } = useContext(Data);
    const navigate = useNavigate();

    const handleEdit = (e, std) => {
        setStudent(std);
        navigate('input');
    }

  return (
    <main>
      <div className='row rounded-circle'>
        <input type='text' placeholder='search here...' className='search-box col-6 bg-gray' />
        <button className='btn btn-dark col-1 offset-3' onClick={()=>{ navigate('input') }}> ADD </button>
      </div>
      <div className='row mt-5'>
        <table className='col-12 table'>
          <thead>
            <tr>
              <th> STD_ID </th>
              <th> First Name </th>
              <th> Last Name </th>
              <th> Location </th>
              <th> Email </th>
              <th> DOB </th>
              <th> Education </th>
            </tr>
          </thead>
          <tbody className='table-group-divider'>
            {
                students.length > 0 ? students.map( (s, id) => (
                    <tr key={id}>
                        <td> {s.std_id} </td>
                        <td> {s.first_name} </td>
                        <td> {s.last_name} </td>
                        <td> {s.location} </td>
                        <td> {s.email} </td>
                        <td> {`${new Date(s.dob).getDate()} / ${new Date(s.dob).getMonth()} / ${new Date(s.dob).getFullYear()}`} </td>
                        <td> {s.education} </td>
                        <td> <FaRegEdit onClick={(e) => {handleEdit(e, s)}}/> </td>
                        <td> <DeleteModel std_id={s.std_id} /> </td>
                    </tr>
                )) : <tr>
                    <td colSpan={7}> No Student informatioins here </td>
                </tr>
            }
          </tbody>
        </table>
      </div>
    </main>
  )
}

export default Home;
