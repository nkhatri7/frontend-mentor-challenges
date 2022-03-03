import React, { useState } from 'react';
import './Comment.scss';
import { ReactComponent as ReplyIcon } from '../../images/icon-reply.svg';
import { ReactComponent as EditIcon } from '../../images/icon-edit.svg';
import { ReactComponent as DeleteIcon } from '../../images/icon-delete.svg';
import Score from '../score/Score';
import Modal from '../modal/Modal';
import NewReply from '../newReply/NewReply';

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
    handleReply,
    handleDelete
}) => {

    const [editingMode, setEditingMode] = useState(false);
    const [commentText, setCommentText] = useState(replyingTo ? `@${replyingTo} ${content}` : content);
    const [modalDisplay, setModalDisplay] = useState(false);
    const [newReplyDisplay, setNewReplyDisplay] = useState(false);

    const getTimeSinceCreatedAt = () => {
        const createdDate = new Date(createdAt);
        const now = new Date();
        const hoursSince = (now - createdDate) / (1000 * 60 * 60);

        if (Math.floor(hoursSince * 60) < 1) {
            return "few seconds ago";
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
        const updatedText = replyingTo ? commentText.substring(commentText.indexOf(" ") + 1) : commentText;
        handleEdit(id, updatedText.trim());
        setEditingMode(false);
    }

    const handleCompletedReply = () => {
        setNewReplyDisplay(false);
    }

    const handleDeleteConfirmation = (id) => {
        handleDelete(id);
        setModalDisplay(false);
    }

    const handleCancelDelete = () => {
        setModalDisplay(false);
    }

    return (
        <div className="wrapper">
            <div className='comment'>
                <div className="mobile-comment-footer-container">
                    <Score 
                        score={score} 
                        id={id} 
                        handleUpvote={handleUpvote} 
                        handleDownvote={handleDownvote} 
                    />
                    <div className="mobile-action-btns-container">
                        {currentUser.username === username ? 
                            <div className="action-btns-container">
                                <button 
                                    className="graphic-btn red-btn-text" 
                                    aria-label='Delete' 
                                    onClick={() => setModalDisplay(true)}
                                >
                                    <DeleteIcon className="comment-icon" />
                                    Delete
                                </button>
                                <button 
                                    className="graphic-btn purple-btn-text" 
                                    aria-label='Edit' 
                                    onClick={() => setEditingMode(true)}
                                >
                                    <EditIcon className="comment-icon" />
                                    Edit
                                </button>
                            </div>
                            :
                            <button 
                                className="graphic-btn purple-btn-text" 
                                aria-label='Reply' 
                                onClick={() => setNewReplyDisplay(true)}
                            >
                                <ReplyIcon className="comment-icon" />
                                Reply
                            </button>
                        }
                    </div>
                </div>
                <div className="comment-main-section">
                    <div className="comment-header">
                        <div className="flex-start">
                            <img src={profileImage} alt="profile pic" className='profile-pic'/>
                            <span className="username">{username}</span>
                            {username === currentUser.username ? 
                                <div className="current-user-comment-identifier">you</div>
                                : null
                            }
                            <span className="comment-time body-text">{getTimeSinceCreatedAt()}</span>
                        </div>
                        {currentUser.username === username ? 
                            <div className="action-btns-container">
                                <button 
                                    className="graphic-btn red-btn-text" 
                                    aria-label='Delete' 
                                    onClick={() => setModalDisplay(true)}
                                >
                                    <DeleteIcon className="comment-icon" />
                                    Delete
                                </button>
                                <button 
                                    className="graphic-btn purple-btn-text" 
                                    aria-label='Edit' 
                                    onClick={() => setEditingMode(true)}
                                >
                                    <EditIcon className="comment-icon" />
                                    Edit
                                </button>
                            </div>
                            :
                            <button 
                                className="graphic-btn purple-btn-text" 
                                aria-label='Reply' 
                                onClick={() => setNewReplyDisplay(true)}
                            >
                                <ReplyIcon className="comment-icon" />
                                Reply
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
                                {replyingTo ? commentText.substring(commentText.indexOf(" ") + 1) : commentText}
                            </p>
                        }
                    </div>
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
            {newReplyDisplay ? 
                <NewReply 
                    id={id} 
                    profilePic={currentUser.image} 
                    replyingTo={username} 
                    handleReply={handleReply}
                    handleCompletedReply={handleCompletedReply}
                /> 
                : null
            }
        </div>
    );
}

export default Comment;
