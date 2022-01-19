import { useState, useEffect } from 'react';
import './App.scss';
import { v4 as uuidv4 } from 'uuid';
import Comment from './components/comment/Comment';

function App() {
    const [currentUser, setCurrentUser] = useState(null);
    const [comments, setComments] = useState(null);
    const [newCommentText, setNewCommentText] = useState("");

    useEffect(() => {
        const fetchData = async () => {
        const res = await fetch('https://raw.githubusercontent.com/nkhatri7/Frontend-Mentor-Challenges/main/interactive-comments-section/data.json');
        const data = await res.json();
        setCurrentUser(data.currentUser);
        setComments(data.comments);
        }

        if (localStorage.getItem("currentUserFEM") === null && localStorage.getItem("commentsFEM") === null) {
        fetchData();
        } else {
        setCurrentUser(JSON.parse(localStorage.getItem("currentUserFEM")));
        setComments(JSON.parse(localStorage.getItem("commentsFEM")));
        }
    }, []);

    useEffect(() => {
        if (currentUser && comments) {
        localStorage.setItem("currentUserFEM", JSON.stringify(currentUser));
        localStorage.setItem("commentsFEM", JSON.stringify(comments));
        }
    }, [currentUser, comments]);

    const displayComments = () => {
        if (comments) {
        const sortedComments = comments.sort((a, b) => b.score - a.score);
        const commentsComponents = sortedComments.map(comment => {
            if (comment.replies.length > 0 && !comment.replyingTo) {
            return (
                <div className="thread-container" key={comment.id}>
                <Comment
                    id={comment.id}
                    username={comment.user.username} 
                    profileImage={comment.user.image}
                    createdAt={comment.createdAt}
                    score={comment.score}
                    content={comment.content}
                    currentUser={currentUser}
                    handleUpvote={handleUpvote}
                    handleDownvote={handleDownvote}
                    handleEdit={handleEditComment}
                    handleReply={handleReply}
                    handleDelete={handleDelete}
                />
                <div className="replies-container">
                    {comment.replies.map(reply => (
                    <Comment 
                        key={reply.id}
                        id={reply.id}
                        username={reply.user.username}
                        profileImage={reply.user.image}
                        createdAt={reply.createdAt}
                        score={reply.score}
                        content={reply.content}
                        replyingTo={reply.replyingTo}
                        currentUser={currentUser}
                        handleUpvote={handleUpvote}
                        handleDownvote={handleDownvote}
                        handleEdit={handleEditComment}
                        handleReply={handleReply}
                        handleDelete={handleDelete}
                    />
                    ))}
                </div>
                </div>
                
            );
            } else {
            return (
                <div className="thread-container" key={comment.id}>
                <Comment 
                    id={comment.id}
                    username={comment.user.username} 
                    profileImage={comment.user.image}
                    createdAt={comment.createdAt}
                    score={comment.score}
                    content={comment.content}
                    currentUser={currentUser}
                    handleUpvote={handleUpvote}
                    handleDownvote={handleDownvote}
                    handleEdit={handleEditComment}
                    handleReply={handleReply}
                    handleDelete={handleDelete}
                />
                </div>
            );
            }
        });
        
        return commentsComponents;
        }
    }

    const handleScoreChange = (commentId, action) => {
        const commentsCopy = [...comments];
        commentsCopy.forEach(comment => {
        if (comment.id === commentId) {
            comment.score = action === "upvote" ? comment.score + 1 : comment.score - 1;
        } else {
            if (comment.replies.length > 0) {
            comment.replies.forEach(reply => {
                if (reply.id === commentId) {
                reply.score = action === "upvote" ? reply.score + 1 : reply.score - 1;
                }
            });
            }
        }
        });

        setComments(commentsCopy);
    }

    const handleUpvote = (commentId) => {
        handleScoreChange(commentId, "upvote");
    }

    const handleDownvote = (commentId) => {
        handleScoreChange(commentId, "downvote");
    }

    const handleNewCommentChange = (e) => {
        setNewCommentText(e.target.value);
    }

    const handleNewComment = () => {
        if (newCommentText.trim() !== "") {
        const today = new Date();

        const comment = {
            id: uuidv4(),
            content: newCommentText,
            createdAt: `${today}`,
            score: 0,
            user: currentUser,
            replies: []
        };

        setComments(prev => [...prev, comment]);
        setNewCommentText("");
        }
    }

    const handleEditComment = (commentId, newCommentText) => {
        const commentsCopy = [...comments];
        commentsCopy.forEach(comment => {
        if (comment.id === commentId) {
            comment.content = newCommentText;
        } else {
            if (comment.replies.length > 0) {
            comment.replies.forEach(reply => {
                if (reply.id === commentId) {
                reply.content = newCommentText;
                }
            });
            }
        }
        });

        setComments(commentsCopy);
    }

    const handleReply = (commentId, replyText, replyingTo) => {
        const today = new Date();

        const reply = {
            id: uuidv4(),
            content: replyText,
            createdAt: `${today}`,
            score: 0,
            replyingTo: replyingTo,
            user: currentUser
        };

        const commentsCopy = [...comments];
        commentsCopy.forEach(comment => {
            if (comment.id === commentId) {
                comment.replies.push(reply);
            } else {
                if (comment.replies.length > 0) {
                    comment.replies.forEach(commentReply => {
                        if (commentReply.id === commentId) {
                            comment.replies.push(reply);
                        }
                    });
                }
            }
        });

        setComments(commentsCopy);
    }

    const handleDelete = (commentId) => {
        const filteredComments = comments.filter(comment => comment.id !== commentId);
        if (filteredComments.length === comments.length) {
        filteredComments.forEach(comment => {
            if (comment.replies.length > 0) {
            const filteredReplies = comment.replies.filter(reply => reply.id !== commentId);
            comment.replies = filteredReplies;
            }
        });
        }

        setComments(filteredComments);
    }

    return (
        <div className="App">
            <main>
                <div className="comments-container">
                    {comments ? displayComments() : null}
                </div>
                <div className="new-comment-container">
                    <img src={currentUser ? currentUser.image : ""} alt="" />
                    <textarea 
                        placeholder='Add a comment...' 
                        value={newCommentText} 
                        onChange={handleNewCommentChange} 
                    />
                    <button className="comment-btn" onClick={handleNewComment}>SEND</button>
                    <div className="mobile-container">
                        <img src={currentUser ? currentUser.image : ""} alt="" />
                        <button className="comment-btn" onClick={handleNewComment}>SEND</button>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default App;
