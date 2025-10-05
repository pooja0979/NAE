
import React, { useState, useEffect } from 'react';
import { CommunityPost as PostType, Comment, MediaType, MediaItem } from '../types';
import UploadForm from './UploadForm'; // Re-use the form for editing

// --- ICONS ---
const FileIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 text-brand-dark-blue flex-shrink-0" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" /></svg>;
const LikeIcon = ({ filled }: { filled: boolean }) => <svg xmlns="http://www.w3.org/2000/svg" className={`h-6 w-6 transition-all duration-200 ${filled ? 'text-rose-500' : 'text-gray-500'}`} viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" /></svg>;
const CommentIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-500" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.08-3.239A8.958 8.958 0 012 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM4.75 12.375a.75.75 0 01.75-.75h8.5a.75.75 0 010 1.5h-8.5a.75.75 0 01-.75-.75zM4.75 9.375a.75.75 0 01.75-.75h5.5a.75.75 0 010 1.5h-5.5a.75.75 0 01-.75-.75z" clipRule="evenodd" /></svg>;
const EditIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.5L15.232 5.232z" /></svg>;
const DeleteIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>;


// --- HELPER FUNCTIONS ---
const timeAgo = (dateString: string): string => {
  const date = new Date(dateString);
  const now = new Date();
  const seconds = Math.floor((now.getTime() - date.getTime()) / 1000);

  if (seconds < 60) return "Just now";
  let interval = seconds / 31536000;
  if (interval > 1) return Math.floor(interval) + " years ago";
  interval = seconds / 2592000;
  if (interval > 1) return Math.floor(interval) + " months ago";
  interval = seconds / 86400;
  if (interval > 1) return Math.floor(interval) + " days ago";
  interval = seconds / 3600;
  if (interval > 1) return Math.floor(interval) + " hours ago";
  interval = seconds / 60;
  if (interval > 1) return Math.floor(interval) + " minutes ago";
  return Math.floor(seconds) + " seconds ago";
};

// --- MEDIA COMPONENTS ---
const ImageGrid: React.FC<{ images: MediaItem[] }> = ({ images }) => (
    <div className="mt-4 grid grid-cols-2 gap-2 rounded-lg overflow-hidden">
        {images.map((image, index) => (
            <a key={index} href={image.url} target="_blank" rel="noopener noreferrer" className="overflow-hidden group relative">
                <img src={image.url} alt={`Attachment ${index + 1}`} className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-300" />
                 <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5v-4m0 0h-4m4 0l-5-5" /></svg>
                </div>
            </a>
        ))}
    </div>
);

const FileList: React.FC<{ files: MediaItem[] }> = ({ files }) => (
    <div className="mt-4 space-y-2">
        <ul className="space-y-2">
            {files.map((file, index) => (
                <li key={index}>
                    <a href={file.url} download={file.name} target="_blank" rel="noopener noreferrer" className="flex items-center text-brand-dark-blue hover:bg-brand-light-blue p-3 bg-gray-100 border border-gray-200 rounded-lg transition-colors group">
                        <FileIcon />
                        <span className="font-semibold group-hover:text-brand-cyan transition-colors">{file.name || `Download File ${index + 1}`}</span>
                    </a>
                </li>
            ))}
        </ul>
    </div>
);

// --- MAIN COMPONENT ---
interface CommunityPostProps {
  post: PostType;
  onUpdatePost: (updatedPost: PostType) => void;
  onDeletePost: (postId: number) => void;
}

const CommunityPost: React.FC<CommunityPostProps> = ({ post, onUpdatePost, onDeletePost }) => {
  const [isLiked, setIsLiked] = useState(false);
  const [showComments, setShowComments] = useState(false);
  const [newComment, setNewComment] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [currentUser, setCurrentUser] = useState<string | null>(null);

  useEffect(() => {
    // Fetches the current user from localStorage to determine authorship
    const savedUser = window.localStorage.getItem('currentUser');
    setCurrentUser(savedUser);
  }, []);

  const isAuthor = currentUser && post.author === currentUser;

  const handleLike = () => {
    const newLikes = isLiked ? post.reactions.likes - 1 : post.reactions.likes + 1;
    onUpdatePost({ ...post, reactions: { ...post.reactions, likes: newLikes } });
    setIsLiked(!isLiked);
  };

  const handleAddComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (newComment.trim() === '' || !currentUser) return;
    const comment: Comment = { id: Date.now(), author: currentUser, text: newComment };
    const updatedPost = { ...post, comments: [...post.comments, comment] };
    onUpdatePost(updatedPost);
    setNewComment('');
  };
  
  const handleUpdatePost = (updatedData: Omit<PostType, 'id' | 'reactions' | 'comments' | 'timestamp'>) => {
    const updatedPost = { ...post, ...updatedData };
    onUpdatePost(updatedPost);
    setIsEditing(false);
  };

  const handleDelete = () => {
    if (window.confirm('Are you sure you want to delete this post? This action cannot be undone.')) {
      onDeletePost(post.id);
    }
  };

  if (isEditing) {
      return (
          <div className="bg-white rounded-lg shadow-xl p-4 sm:p-8 border-2 border-brand-accent animate-fade-in-up">
              <UploadForm
                  onSubmit={handleUpdatePost}
                  onCancel={() => setIsEditing(false)}
                  existingPost={post}
              />
          </div>
      );
  }

  const images = post.media.filter(m => m.type === MediaType.Image);
  const files = post.media.filter(m => m.type === MediaType.File);

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200/80">
      {/* Post Header */}
      <div className="p-4 sm:p-5 flex justify-between items-start border-b border-gray-100">
        <div className="flex items-center space-x-4">
          <div className="w-12 h-12 rounded-full bg-brand-light-blue flex items-center justify-center ring-2 ring-brand-cyan/20">
            <span className="text-xl font-bold text-brand-dark-blue">{post.author.charAt(0)}</span>
          </div>
          <div>
            <p className="font-bold text-brand-dark-blue text-lg">
              {post.author} {isAuthor && <span className="text-sm font-normal text-gray-500">(You)</span>}
            </p>
            <p className="text-sm text-gray-500">{timeAgo(post.timestamp)}</p>
          </div>
        </div>
        {isAuthor && (
          <div className="flex items-center space-x-2">
            <button onClick={() => setIsEditing(true)} className="flex items-center space-x-2 text-sm px-3 py-2 bg-gray-100 hover:bg-gray-200 text-brand-dark-blue rounded-lg font-semibold transition-colors">
              <EditIcon />
              <span>Edit</span>
            </button>
            <button onClick={handleDelete} className="flex items-center space-x-2 text-sm px-3 py-2 bg-red-100 hover:bg-red-200 text-red-600 rounded-lg font-semibold transition-colors">
              <DeleteIcon />
              <span>Delete</span>
            </button>
          </div>
        )}
      </div>
      
      {/* Post Body */}
      <div className="p-4 sm:p-5">
        <div className="flex flex-wrap items-center gap-2 mb-4">
          <span className="text-xs font-semibold bg-brand-cyan text-white py-1 px-3 rounded-full">{post.subject}</span>
          <span className="text-xs font-semibold bg-brand-accent text-brand-dark-blue py-1 px-3 rounded-full">{post.topic}</span>
        </div>

        {post.explanation && <p className="text-brand-text text-lg mb-4 whitespace-pre-wrap leading-relaxed">{post.explanation}</p>}

        {images.length > 0 && <ImageGrid images={images} />}
        {files.length > 0 && <FileList files={files} />}
      </div>
      
      {/* Post Actions & Stats */}
      <div className="px-4 sm:px-5 pb-2">
        <div className="flex justify-between items-center text-sm text-gray-500 py-2">
          <span>{post.reactions.likes} {post.reactions.likes === 1 ? 'Like' : 'Likes'}</span>
          <button onClick={() => setShowComments(true)}>{post.comments.length} {post.comments.length === 1 ? 'Comment' : 'Comments'}</button>
        </div>
        
        <div className="flex items-center border-t border-b border-gray-100">
            <button onClick={handleLike} className="flex-1 flex items-center justify-center space-x-2 py-3 text-gray-600 hover:bg-gray-100 hover:text-rose-500 transition-all duration-200 font-semibold">
                <LikeIcon filled={isLiked} />
                <span>{isLiked ? 'Liked' : 'Like'}</span>
            </button>
            <div className="h-6 border-l border-gray-200"></div>
            <button onClick={() => setShowComments(!showComments)} className="flex-1 flex items-center justify-center space-x-2 py-3 text-gray-600 hover:bg-gray-100 hover:text-brand-cyan transition-colors duration-200 font-semibold">
                <CommentIcon />
                <span>Comment</span>
            </button>
        </div>
      </div>

      {/* Comments Section */}
      {showComments && (
        <div className="p-4 sm:p-5 bg-brand-gray/50 animate-fade-in-up">
          <h4 className="font-bold text-brand-dark-blue mb-3">Comments</h4>
          <div className="space-y-4">
            {post.comments.map(comment => (
              <div key={comment.id} className="flex items-start space-x-3">
                 <div className="w-9 h-9 mt-1 rounded-full bg-brand-light-blue flex-shrink-0 flex items-center justify-center ring-1 ring-brand-cyan/20">
                    <span className="text-md font-bold text-brand-dark-blue">{comment.author.charAt(0)}</span>
                </div>
                <div className="bg-white p-3 rounded-lg border border-gray-200 flex-grow">
                  <p className="font-semibold text-sm text-brand-dark-blue">{comment.author}</p>
                  <p className="text-brand-text">{comment.text}</p>
                </div>
              </div>
            ))}
             {post.comments.length === 0 && <p className="text-sm text-gray-500 text-center py-4">No comments yet. Be the first to reply!</p>}
          </div>
          <form onSubmit={handleAddComment} className="flex space-x-2 mt-4">
            <input 
              type="text"
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              placeholder={currentUser ? "Write a comment..." : "Share your work to set your name before commenting."}
              className="flex-grow block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-cyan focus:border-brand-cyan disabled:bg-gray-100"
              aria-label="Add a comment"
              disabled={!currentUser}
            />
            <button type="submit" className="px-4 py-2 bg-brand-dark-blue text-white font-semibold rounded-lg shadow-md hover:bg-brand-cyan transition-colors disabled:opacity-50 disabled:cursor-not-allowed" disabled={!newComment.trim() || !currentUser}>Reply</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default CommunityPost;
