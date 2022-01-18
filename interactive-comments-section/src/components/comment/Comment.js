import React, { useState } from 'react';
import './Comment.scss';
import Score from '../score/Score';
import Modal from '../modal/Modal';

const Comment = ({ 
    id,
    username, 
    profileImage, 
    createdAt, 
    score, 
    content, 
    replyingTo, 
    currentUser, 
    handleUpvote,
    handleDownvote,
    handleEdit,
    handleDelete
}) => {

    const [editingMode, setEditingMode] = useState(false);
    const [commentText, setCommentText] = useState(replyingTo ? `@${replyingTo} ${content}` : content);
    const [modalDisplay, setModalDisplay] = useState(false);

    const getTimeSinceCreatedAt = () => {
        const createdDate = new Date(createdAt);
        const now = new Date();
        const hoursSince = (now - createdDate) / (1000 * 60 * 60);

        if (Math.floor(hoursSince * 60) < 1) {
            return "less than a minute ago";
        } else if (Math.floor(hoursSince * 60) === 1) {
            return "1 minute ago";
        } else if (Math.floor(hoursSince * 60) < 60) {
            return `${Math.floor(hoursSince * 60)} minutes ago`;
        } else if (Math.floor(hoursSince) === 1) {
            return "1 hour ago";
        } else if (Math.floor(hoursSince) < 24) {
            return `${Math.floor(hoursSince)} hours ago`;
        } else if (Math.floor(hoursSince / 24) === 1) {
            return "1 day ago";
        } else if (Math.floor(hoursSince / 24) < 7) {
            return `${Math.floor(hoursSince / 24)} days ago`;
        } else if (Math.floor(hoursSince / (24 * 7)) === 1) {
            return "1 week ago";
        } else if (Math.floor(hoursSince / (24 * 7)) < 4) {
            return `${Math.floor(hoursSince / (24 * 7))} weeks ago`;
        } else if (Math.floor(hoursSince / 24) > 30 && Math.floor(hoursSince / 24) < 61) {
            return "1 month ago";
        } else if (Math.floor(hoursSince / (24 * 30)) < 4) {
            return `${Math.floor(hoursSince / (24 * 30))} months ago`;
        } else {
            return createdAt;
        }
    }

    const handleEditChange = (e) => {
        setCommentText(e.target.value);
    }

    const handleUpdate = () => {
        const updatedText = replyingTo ? commentText.substr(commentText.indexOf(" ") + 1) : commentText;
        handleEdit(id, updatedText.trim());
        setEditingMode(false);
    }

    const handleDeleteConfirmation = (id) => {
        handleDelete(id);
        setModalDisplay(false);
    }

    const handleCancelDelete = () => {
        setModalDisplay(false);
    }

    return (
        <div className='comment'>
            <Score 
                score={score} 
                id={id} 
                handleUpvote={handleUpvote} 
                handleDownvote={handleDownvote} 
            />
            <div className="comment-main-section">
                <div className="comment-header">
                    <div className="flex-start">
                        <img src={profileImage} alt="profile pic" className='profile-pic'/>
                        <span className="username">{username}</span>
                        {username === currentUser.username ? 
                            <div className="current-user-comment-identifier">you</div>
                            : null
                        }
                        <span className="body-text">{getTimeSinceCreatedAt()}</span>
                    </div>
                    {currentUser.username === username ? 
                        <div className="action-btns-container">
                            <button className="graphic-btn" onClick={() => setModalDisplay(true)}>
                                <svg width="12" height="14" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1.167 12.448c0 .854.7 1.552 1.555 1.552h6.222c.856 0 1.556-.698 1.556-1.552V3.5H1.167v8.948Zm10.5-11.281H8.75L7.773 0h-3.88l-.976 1.167H0v1.166h11.667V1.167Z" fill="#ED6368"/>
                                </svg>
                                <div className="btn-text red-btn-text">Delete</div>
                            </button>
                            <button className="graphic-btn" onClick={() => setEditingMode(true)}>
                                <svg width="14" height="14" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M13.479 2.872 11.08.474a1.75 1.75 0 0 0-2.327-.06L.879 8.287a1.75 1.75 0 0 0-.5 1.06l-.375 3.648a.875.875 0 0 0 .875.954h.078l3.65-.333c.399-.04.773-.216 1.058-.499l7.875-7.875a1.68 1.68 0 0 0-.061-2.371Zm-2.975 2.923L8.159 3.449 9.865 1.7l2.389 2.39-1.75 1.706Z" fill="#5357B6"/>
                                </svg>
                                <div className="btn-text purple-btn-text">Edit</div>
                            </button>
                        </div>
                        :
                        <button className="graphic-btn">
                            <svg width="14" height="13" xmlns="http://www.w3.org/2000/svg">
                                <path d="M.227 4.316 5.04.16a.657.657 0 0 1 1.085.497v2.189c4.392.05 7.875.93 7.875 5.093 0 1.68-1.082 3.344-2.279 4.214-.373.272-.905-.07-.767-.51 1.24-3.964-.588-5.017-4.829-5.078v2.404c0 .566-.664.86-1.085.496L.227 5.31a.657.657 0 0 1 0-.993Z" fill="#5357B6"/>
                            </svg>
                            <div className="btn-text purple-btn-text">Reply</div>
                        </button>
                    }
                    
                </div>
                <div className='content-container'>
                    {editingMode ? 
                        <div className="editing-mode">
                            <textarea 
                                value={commentText} 
                                onChange={handleEditChange} 
                            />
                            <button className="comment-btn" onClick={handleUpdate}>UPDATE</button>
                        </div>
                        :
                        <p className="comment-content body-text">
                            {replyingTo ? 
                                <span className="reply-mention">@{replyingTo}&nbsp;</span>
                                : null
                            }
                            {replyingTo ? commentText.substr(commentText.indexOf(" ") + 1) : commentText}
                        </p>
                    }
                </div>
            </div>
            {modalDisplay ? 
                <Modal 
                    id={id}
                    handleDelete={handleDeleteConfirmation}
                    handleCancel={handleCancelDelete}
                /> 
                : null
            }
        </div>
    );
}

export default Comment;
