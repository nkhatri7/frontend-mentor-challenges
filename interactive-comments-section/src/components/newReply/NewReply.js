import React, { useState, useEffect, useRef } from 'react';
import './NewReply.scss';

const NewReply = ({ 
    id, 
    profilePic, 
    replyingTo, 
    handleReply, 
    handleCompletedReply 
}) => {

    const [replyText, setReplyText] = useState(`@${replyingTo} `);
    const textarea = useRef(null);

    useEffect(() => {
        // Auto focus on textarea when user clicks reply
        if (textarea) {
            const length = textarea.current.value.length;
            textarea.current.focus();
            textarea.current.setSelectionRange(length, length);
        }
    }, [textarea]);

    const handleTextChange = (e) => {
        setReplyText(e.target.value);
    }

    const handleReplyEvent = () => {
        const text = replyText.substring(replyText.indexOf(" ") + 1);
        if (text.trim() !== "") {
            handleReply(id, text, replyingTo);
            handleCompletedReply();
        }
    }

    return (
        <div className='new-reply'>
            <img src={profilePic} alt="" className='profile-pic' />
            <textarea value={replyText} onChange={handleTextChange} ref={textarea} />
            <button className="comment-btn" onClick={handleReplyEvent}>REPLY</button>
            <div className="mobile-container">
                <img src={profilePic} alt="" className='profile-pic' />
                <button className="comment-btn" onClick={handleReplyEvent}>REPLY</button>
            </div>
        </div>
    );
}

export default NewReply;
