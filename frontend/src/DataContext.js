import React, { createContext, useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Data = createContext({});

export const DataContext = ({ children }) => {
    const URI = 'http://localhost:3500';
    const [students, setStudents] = useState([]);
    const [student, setStudent ] = useState({});

    const navigate = useNavigate();

    const getData = async () => {
        const { data } = await axios.get(URI);
        setStudents(data);
    }

    useEffect(()=>{
        getData();
    }, []);

    const handleInsert = async () => {
        try {
            const res = await axios.post(URI, student);
            if(res.status === 201){
                setStudent({});
                getData();
                navigate(-1);
            } else {
                alert(`${res.data.message}`);
            }
        } catch (err) {
            alert(` ${err.message} \n Please try later... `);
            setStudent({});
        }
    }

    const handleUpdate = async () => {
        try {
            const res = await axios.put(URI, student);
            if(res.status === 201){
                setStudent({});
                getData();
                navigate(-1);
            } else {
                alert(`${res.data.message}`);
            }
        } catch (err) {
            alert(` ${err.message} \n Please try later... `);
            setStudent({});
        }
    }

    const handleStudentDelete = async (std_id) => {
        try {
            const res = await axios.delete(URI+`/${std_id}`);
            if(res.status === 204){
                getData();
                navigate(-1);
            } else {
                alert(`${res.data.message}`);
            }
        } catch (err) {
            alert(` ${err.message} \n Please try later... `);
            setStudent({});
        }
    }

    return(
        <Data.Provider value={{ students, student, setStudent, handleInsert, handleUpdate, handleStudentDelete }}>
            {children}
        </Data.Provider>
    )
}

export default Data;