import { useState } from 'react';

export default function CommentSection() {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newComment.trim()) {
      setComments([...comments, newComment]);
      setNewComment('');
    }
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-4 mt-6">
      <h3 className="text-xl font-semibold mb-4">Comments</h3>
      <form onSubmit={handleSubmit}>
        <textarea
          className="w-full p-2 border rounded-lg"
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Write your comment..."
        ></textarea>
        <button className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-lg" type="submit">
          Submit
        </button>
      </form>
      <div className="mt-4">
        {comments.length > 0 ? (
          comments.map((comment, index) => (
            <div key={index} className="bg-gray-100 p-2 rounded-lg mb-2">
              {comment}
            </div>
          ))
        ) : (
          <p className="text-gray-500">No comments yet.</p>
        )}
      </div>
    </div>
  );
}
