
import React, { useState, useEffect } from 'react';
import { MOCK_COMMUNITY_POSTS } from '../constants';
import { CommunityPost as PostType } from '../types';
import CommunityPost from '../components/CommunityPost';
import UploadForm from '../components/UploadForm';
import PageNavigation from '../components/PageNavigation';

const CommunityUploadsPage: React.FC = () => {
  const [posts, setPosts] = useState<PostType[]>(() => {
    try {
      const savedPosts = window.localStorage.getItem('communityPosts');
      return savedPosts ? JSON.parse(savedPosts) : MOCK_COMMUNITY_POSTS;
    } catch (error) {
      console.error("Error reading posts from localStorage:", error);
      return MOCK_COMMUNITY_POSTS;
    }
  });

  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    try {
      window.localStorage.setItem('communityPosts', JSON.stringify(posts));
    } catch (error) {
      console.error("Error saving posts to localStorage:", error);
    }
  }, [posts]);

  const addPost = (newPostData: Omit<PostType, 'id' | 'reactions' | 'comments' | 'timestamp'>) => {
    const postToAdd: PostType = {
      ...newPostData,
      id: Date.now(),
      timestamp: new Date().toISOString(),
      reactions: { likes: 0 },
      comments: [],
    };
    setPosts([postToAdd, ...posts]);
    setShowForm(false);
  };

  const updatePost = (updatedPost: PostType) => {
    setPosts(posts.map(p => p.id === updatedPost.id ? updatedPost : p));
  };
  
  const deletePost = (postId: number) => {
    setPosts(posts.filter(p => p.id !== postId));
  };

  return (
    <div>
      <PageNavigation />
      <div className="flex flex-col md:flex-row justify-between items-center mb-10 bg-white p-6 rounded-lg shadow-md">
        <div>
          <h1 className="text-4xl font-bold text-brand-dark-blue">Community Hub</h1>
          <p className="text-lg text-gray-600 mt-2">Share your work and get inspired by others.</p>
        </div>
        <button
          onClick={() => setShowForm(!showForm)}
          className={`mt-4 md:mt-0 px-6 py-3 text-white font-semibold rounded-lg shadow-md transform hover:scale-105 transition-all duration-300 ${showForm ? 'bg-red-500 hover:bg-red-600' : 'bg-brand-cyan hover:bg-brand-dark-blue animate-subtle-pulse'}`}
        >
          {showForm ? 'Cancel Upload' : 'Share Your Work'}
        </button>
      </div>

      {showForm && (
        <div className="mb-10 animate-fade-in-up">
          <UploadForm onSubmit={addPost} onCancel={() => setShowForm(false)} />
        </div>
      )}

      <div className="space-y-8">
        {posts.map((post, index) => (
          <div key={post.id} className="animate-fade-in-up opacity-0" style={{ animationDelay: `${index * 150}ms`, animationFillMode: 'forwards' }}>
             <CommunityPost post={post} onUpdatePost={updatePost} onDeletePost={deletePost} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommunityUploadsPage;