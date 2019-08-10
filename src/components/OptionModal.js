import React from 'react';
import Modal from 'react-modal';

const OptionModal = (props) => (
    <Modal 
    isOpen={!!props.selectedOption} 
    onRequestClose={props.handleClearSelectedOption}
    contentLabel="Selected Option"
    closeTimeoutMS={200}
    className="modal">
        <h1 className="modal-title" >My name is pavan</h1>
        {props.selectedOption && <p className="modal-body" >{props.selectedOption}</p>}
        <button className="button" onClick={props.handleClearSelectedOption}>OKAY</button>
    </Modal>
);

export default OptionModal;