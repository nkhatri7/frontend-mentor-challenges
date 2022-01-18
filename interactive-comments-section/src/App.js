import { useState, useEffect } from 'react';
import './App.scss';
import Comment from './components/comment/Comment';

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [comments, setComments] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('https://raw.githubusercontent.com/nkhatri7/Frontend-Mentor-Challenges/main/interactive-comments-section/data.json');
      const data = await res.json();
      setCurrentUser(data.currentUser);
      setComments(data.comments);
    }

    fetchData();
  }, []);

  const displayComments = () => {
    if (comments) {
      const commentsComponents = comments.map(comment => {
        if (comment.replies.length > 0) {
          return (
            <div className="thread-container">
              <Comment 
                key={comment.id}
                username={comment.user.username} 
                profileImage={comment.user.image}
                createdAt={comment.createdAt}
                score={comment.score}
                content={comment.content}
                currentUser={currentUser.username}
              />
              <div className="replies-container">
                {comment.replies.map(reply => (
                  <Comment 
                    key={reply.id}
                    username={reply.user.username}
                    profileImage={reply.user.image}
                    createdAt={reply.createdAt}
                    score={reply.score}
                    content={reply.content}
                    replyingTo={reply.replyingTo}
                    currentUser={currentUser.username}
                  />
                ))}
              </div>
            </div>
            
          );
        } else {
          return (
            <Comment 
              key={comment.id}
              username={comment.user.username} 
              profileImage={comment.user.image}
              createdAt={comment.createdAt}
              score={comment.score}
              content={comment.content}
              currentUser={currentUser.username}
            />
          );
        }
      });
      
      return commentsComponents;
    }
  }

  return (
    <div className="App">
      <main>
        <div className="comments-container">
          {comments ? displayComments() : null}
        </div>
        <div className="new-comment-container">
          <img src={currentUser ? currentUser.image : ""} alt="" />
          <textarea placeholder='Add a comment...' />
          <button className="comment-btn">SEND</button>
        </div>
      </main>
    </div>
  );
}

export default App;
