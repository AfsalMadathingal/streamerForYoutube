import React, { useState } from 'react';
import axios from 'axios';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-gray-800">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <h1 className="text-white text-lg font-bold">Video Streamer</h1>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Home</a>
              <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Features</a>
              <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Contact</a>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} type="button" className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700">
              <span className="sr-only">Open menu</span>
              <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'} />
              </svg>
            </button>
          </div>
        </div>
      </nav>
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Home</a>
            <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Features</a>
            <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Contact</a>
          </div>
        </div>
      )}
    </div>
  );
};

const VideoForm = () => {
  const [video, setVideo] = useState(null);
  const [streamKey, setStreamKey] = useState('');
  const [status, setStatus] = useState('');

  const handleVideoChange = (event) => {
    if (event.target.files) {
      setVideo(event.target.files[0]);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!video || !streamKey) {
      setStatus('Please upload a video and enter a stream key.');
      return;
    }

    const formData = new FormData();
    formData.append('video', video);
    formData.append('streamKey', streamKey);

    try {
      const response = await axios.post('http://localhost:3001/api/stream', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      setStatus('Streaming started successfully!');
    } catch (error) {
      console.error(error);
      setStatus('Error starting the stream.');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded shadow-md w-11/12 sm:w-96">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-700">Upload Your Video</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="video" className="block text-sm font-medium text-gray-700">Select Video File</label>
            <input 
              type="file" 
              id="video" 
              className="mt-1 block w-full border border-gray-300 p-2 rounded-md" 
              accept="video/*" 
              onChange={handleVideoChange} 
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="streamKey" className="block text-sm font-medium text-gray-700">Streaming Key</label>
            <input 
              type="text" 
              id="streamKey" 
              className="mt-1 block w-full border border-gray-300 p-2 rounded-md" 
              value={streamKey} 
              onChange={(e) => setStreamKey(e.target.value)} 
              required
            />
          </div>
          <button type="submit" className="w-full bg-orange-500 text-white py-2 rounded-md hover:bg-orange-600">Start Streaming</button>
          {status && <p className="mt-4 text-center text-gray-700">{status}</p>}
        </form>
      </div>
    </div>
  );
};

const Streaming = () => {
  return (
    <>
      <Navbar />
      <VideoForm />
    </>
  );
};

export default Streaming;
