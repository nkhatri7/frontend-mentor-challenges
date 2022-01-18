import React from 'react';
import './Modal.scss';

const Modal = ({ id, handleDelete, handleCancel }) => {
    return (
        <div className='overlay'>
            <div className="modal-container">
                <span className="modal-heading">Delete comment</span>
                <p className="modal-body">
                    Are you sure you want to delete this comment? 
                    This will remove the comment and can't be undone.
                </p>
                <div className="modal-footer">
                    <button className="modal-action cancel" onClick={handleCancel}>NO, CANCEL</button>
                    <button className="modal-action delete" onClick={() => handleDelete(id)}>YES, DELETE</button>
                </div>
            </div>
        </div>
    );
}

export default Modal;
