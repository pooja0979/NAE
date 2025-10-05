
import React, { useState, useEffect } from 'react';
import { CommunityPost, MediaItem, MediaType } from '../types';

interface UploadFormProps {
  onSubmit: (postData: Omit<CommunityPost, 'id' | 'reactions' | 'comments' | 'timestamp'>) => void;
  onCancel: () => void;
  existingPost?: CommunityPost;
}

// Icons for file previews
const FileIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-brand-dark-blue flex-shrink-0" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" /></svg>;

const UploadForm: React.FC<UploadFormProps> = ({ onSubmit, onCancel, existingPost }) => {
  const [author, setAuthor] = useState(existingPost?.author || '');
  const [subject, setSubject] = useState(existingPost?.subject || '');
  const [topic, setTopic] = useState(existingPost?.topic || '');
  const [explanation, setExplanation] = useState(existingPost?.explanation || '');
  const [media, setMedia] = useState<MediaItem[]>(existingPost?.media || []);
  const [isUploading, setIsUploading] = useState(false);

  useEffect(() => {
    if (!existingPost) {
        const savedUser = window.localStorage.getItem('currentUser');
        if (savedUser) {
            setAuthor(savedUser);
        }
    }
  }, [existingPost]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setIsUploading(true);
      const files = Array.from(e.target.files);
      const filePromises = files.map(file => {
        return new Promise<MediaItem>((resolve, reject) => {
          const reader = new FileReader();
          reader.onload = (event) => {
            const resultUrl = event.target?.result as string;
            if (file.type.startsWith('image/')) {
              resolve({
                type: MediaType.Image,
                url: resultUrl,
                name: file.name,
              });
            } else {
              // For non-image files, we use a data URL to make them downloadable.
              resolve({
                type: MediaType.File,
                url: resultUrl,
                name: file.name,
              });
            }
          };
          reader.onerror = (error) => reject(error);
          reader.readAsDataURL(file);
        });
      });

      Promise.all(filePromises).then(newMediaItems => {
        setMedia(prevMedia => [...prevMedia, ...newMediaItems]);
        setIsUploading(false);
      }).catch(error => {
        console.error("Error reading files:", error);
        setIsUploading(false);
        alert("There was an error processing your files.");
      });
      // Reset file input value to allow re-uploading the same file
      e.target.value = '';
    }
  };

  const removeMediaItem = (index: number) => {
    setMedia(media.filter((_, i) => i !== index));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmedAuthor = author.trim();
    if (!trimmedAuthor || !subject || !topic) {
      alert('Please fill out the Teacher Name, Subject, and Topic fields.');
      return;
    }
    // Save the author's name to localStorage to identify them later
    window.localStorage.setItem('currentUser', trimmedAuthor);
    onSubmit({ author: trimmedAuthor, subject, topic, explanation, media });
  };
  
  const inputClasses = "mt-1 block w-full px-4 py-2 bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-brand-cyan focus:border-brand-cyan transition";

  return (
    <div className="bg-white p-6 sm:p-8 rounded-lg shadow-xl border border-gray-200">
      <h2 className="text-3xl font-bold text-brand-dark-blue mb-6 border-b-2 border-brand-cyan pb-3">
        {existingPost ? 'Edit Your Post' : 'Share Your Experience'}
      </h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
            <label htmlFor="author" className="block text-sm font-medium text-brand-text">Teacher Name*</label>
            <input type="text" id="author" value={author} onChange={e => setAuthor(e.target.value)} className={inputClasses} placeholder="Please enter your full name" required />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="subject" className="block text-sm font-medium text-brand-text">Subject*</label>
            <input type="text" id="subject" value={subject} onChange={e => setSubject(e.target.value)} className={inputClasses} placeholder="e.g., Science, History" required />
          </div>
          <div>
            <label htmlFor="topic" className="block text-sm font-medium text-brand-text">Topic*</label>
            <input type="text" id="topic" value={topic} onChange={e => setTopic(e.target.value)} className={inputClasses} placeholder="e.g., Photosynthesis, The Cold War" required />
          </div>
        </div>

        <div>
          <label htmlFor="explanation" className="block text-sm font-medium text-brand-text">Explanation (Optional)</label>
          <textarea id="explanation" value={explanation} onChange={e => setExplanation(e.target.value)} rows={5} className={inputClasses} placeholder="Tell us how it went! What were the successes? What were the challenges?"></textarea>
        </div>

        <div>
          <label className="block text-sm font-medium text-brand-text">Upload Files</label>
          <div className="mt-2 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
            <div className="space-y-1 text-center">
              <svg className="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <div className="flex text-sm text-gray-600">
                <label htmlFor="file-upload" className="relative cursor-pointer bg-white rounded-md font-medium text-brand-cyan hover:text-brand-dark-blue focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-brand-cyan">
                  <span>Choose files to upload</span>
                  <input id="file-upload" name="file-upload" type="file" className="sr-only" onChange={handleFileChange} multiple />
                </label>
              </div>
              <p className="text-xs text-gray-500">Images, DOCX, PPTX, PDF, etc.</p>
            </div>
          </div>

          {isUploading && <p className="text-sm text-brand-dark-blue mt-2 animate-pulse">Processing files...</p>}

          {media.length > 0 && (
            <div className="mt-4 space-y-2">
              <h4 className="font-semibold text-brand-text">Attached Files:</h4>
              <ul className="divide-y divide-gray-200 border border-gray-200 rounded-md">
                {media.map((item, index) => (
                  <li key={`${item.name}-${index}`} className="pl-3 pr-4 py-3 flex items-center justify-between text-sm">
                    <div className="w-0 flex-1 flex items-center">
                      {item.type === MediaType.Image ? (
                        <img src={item.url} alt={item.name} className="h-10 w-10 object-cover rounded-md mr-3 flex-shrink-0" />
                      ) : (
                        <FileIcon />
                      )}
                      <span className="ml-2 flex-1 w-0 truncate">{item.name}</span>
                    </div>
                    <div className="ml-4 flex-shrink-0">
                      <button type="button" onClick={() => removeMediaItem(index)} className="font-medium text-red-600 hover:text-red-500 transition-colors">Remove</button>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
        
        <div className="flex flex-col sm:flex-row items-center gap-4 pt-4 border-t border-gray-200">
            <button type="submit" className="w-full px-6 py-3 bg-brand-cyan text-white font-bold rounded-lg shadow-md hover:bg-brand-dark-blue transform hover:scale-105 transition-all duration-300">
                {existingPost ? 'Save Changes' : 'Submit Post'}
            </button>
            <button type="button" onClick={onCancel} className="w-full px-6 py-3 bg-gray-200 text-brand-dark-blue font-bold rounded-lg hover:bg-gray-300 transition-colors">
                Cancel
            </button>
        </div>
      </form>
    </div>
  );
};

export default UploadForm;
