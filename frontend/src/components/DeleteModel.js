import { useState, useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { RiDeleteBin6Line } from "react-icons/ri";
import Data from '../DataContext';

function DeleteModel ({ std_id }) {

    const { handleStudentDelete } = useContext(Data);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="secondary" 
      style={{ background: 'transparent', color: 'black', border: 'none', paddingTop: 0}} 
      onClick={handleShow}>
        <RiDeleteBin6Line />
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        centered
        className='myModal'
      >
        <Modal.Body>
            <p> <RiDeleteBin6Line /> </p>
            <p> Do you want to delete this student information </p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            No
          </Button>
          <Button variant="secondary" onClick={(e)=>{ 
            setShow(false);
            handleStudentDelete(std_id);
            }}>YES</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default DeleteModel;