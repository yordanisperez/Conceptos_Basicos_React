function Modal(props){
    function onConfirm()
    {
        props.onConfirm();
    }
    function onCancel(){
        props.onCancel();
    }
     return (
     <div className ='modal'>
         <p>Are you sure?</p>
         <button className='btn btn--alt' onClick={onConfirm}>Cancel</button>
         <button className='btn' onClick={onCancel}>Confirm</button>
     </div>);

}

export default Modal;