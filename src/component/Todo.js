import {useState} from 'react'
import Modal from '../component/Modal';
import Backdrop from '../component/Backdrop';

function Todo(props){
    const [modalIsOpen,setModalIsOpen]=useState(false);
    function deleteHandler(){
       setModalIsOpen(true);
    }
    function closeModal(){
        setModalIsOpen(false);
    }
    return (
        <div className='card'>
            <h2>{props.text}</h2>
             <div className='actions'>
                    <button className='btn' onClick={deleteHandler}>DELETE</button>
            </div>
            {modalIsOpen&& <Modal onCancel={closeModal} onConfirm={closeModal}/>}
            {modalIsOpen&& <Backdrop onCancel={closeModal}/>}
        </div>
        );
}

export default Todo;