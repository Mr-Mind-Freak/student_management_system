const pool = require('../config/databaseConnection');

const getAllStudent = async (req, res) => {
    try {
        const qry = "SELECT * FROM std";
        const [ data ] = await pool.query(qry);
        if(data.length <= 0)
            return res.sendStatus(204);
        return res.status(200).json(data);
    } catch (err) {
        console.log(`Error Occured:\n ${err.stack}`);
        return res.status(500).json({ message : err.message });
    }
}

const getStudent = async (req, res) => {
    const  id = Number(req.params.id);
    if(!id) {
        return res.status(499).json({ message : 'student id is required' });
    }
    try {
        const qry = "SELECT * FROM std WHERE std_id = ?";
        const [ [data] ] = await pool.query(qry,[id]);
        return res.status(200).json(data);
    } catch (err) {
        console.log(`Error Occured:\n ${err.stack}`);
        return res.status(500).json({ message : err.message });
    }
}

const createStudent = async (req, res) =>{
    let { first_name, last_name, location, email, dob, education } = req.body;
    if(!first_name || !last_name || !location || !email || !dob || !education )
        return res.status(499).json({ message : "All fields are requied" });
    try {
        const connection = await pool.getConnection();
        const [result] = await connection.query('INSERT INTO `std` (first_name, last_name, location, email, dob, education) VALUES (?, ?, ?, ?, ?, ?)',[first_name, last_name, location, email, dob, education]);
        connection.release();
        if(result.serverStatus === 2)
            return res.status(201).json({ message: 'successfully inserted...'});
    } catch (err) {
        console.log(`Error Occured:\n ${err.stack}`);
        return res.status(500).json({ message : err.message });
    }
}

const updateStudent = async (req, res) => {
    const { std_id, first_name, last_name, location, email, dob, education } = req.body;
    if(!std_id || !first_name || !last_name || !location || !email || !dob || !education )
        return res.status(499).json({ message : "All fields are requied" });
    try {
        const qry = "UPDATE std SET first_name = ?, last_name = ?, location = ?, email = ?, dob = ?, education = ? WHERE std_id = ?";
        const [result] = await pool.query(qry,[first_name,last_name,location,email,dob,education,std_id]);
        if(result.serverStatus === 2)
            return res.status(201).json({ message : 'updated successfully' });
    } catch (err) {
        console.log(`Error Occured:\n ${err.stack}`);
        return res.status(500).json({ message : err.message });
    }
    return res.status(500).json({ message : 'Could not update...' });
}

const deleteStudent = async (req, res) => {
    const std_id = Number(req.params.id);
    if(!std_id)
        return res.status(499).json({ message : 'student id is required' });
    try {
        const qry = 'DELETE FROM std WHERE std_id = ?';
        const [result] = await pool.query(qry,[std_id]);
        if(result.serverStatus === 2)
            return res.sendStatus(204);
    } catch (err) {
        console.log(`Error Occured:\n ${err.stack}`);
        return res.status(500).json({ message : err.message });
    }
    
}

module.exports = { getAllStudent, getStudent, createStudent, updateStudent, deleteStudent}