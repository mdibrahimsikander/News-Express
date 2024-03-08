import React, { useState } from 'react';
import VideoContainer from './videoContainer';  // Ensure this is the correct path
import '../../index.css';

const LiveNews = () => {
  // State for search query and filtered videos
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredVideos, setFilteredVideos] = useState([]);

  // Sample list of videos
  const videos = [
    { channelName:"Ndtv",videoLink: "https://www.youtube.com/embed/3Dee-mbAKF0?si=l_-YiIdNqrIvCYWq" },
    { channelName:"aaj tak",videoLink: "https://www.youtube.com/embed/Nq2wYlWFucg?si=kegwDLkyc-i5sgut" },
    { channelName:"abp news",videoLink: "https://www.youtube.com/embed/nyd-xznCpJc?si=F7OEl9grv4yKGczQ" },
    { channelName:"Times Now",videoLink: "https://www.youtube.com/embed/wIXnJoZHuPw?si=1PB5VGEBpT4c6Kqf" },
    { channelName:"DD News",videoLink: "https://www.youtube.com/embed/bzmwHag6Nno?si=g-PmJ9f-yXzd-__a" },
    { channelName:"India TV",videoLink: "https://www.youtube.com/embed/IENp5_PuGe8?si=S3JCtWTufsmcJERb" },
    { channelName:"BBC Live",videoLink: "https://www.youtube.com/embed/sjSicV3RmFQ?si=pbin52oK4f14dAei" },
    { channelName:"Zee News",videoLink: "https://www.youtube.com/embed/N4z6C0evpkc?si=bUy3yRTmGr4IdriW" },
    { channelName:"Republic Tv",videoLink: "https://www.youtube.com/embed/Ssa7XLKQLLA?si=TptjDTV9l5jNP6Io" },
    { channelName:"News 24",videoLink: "https://www.youtube.com/embed/AiW1zL-axFg?si=GM6qyis4E3ibqqkt" },
  ];



  // Function to handle search query changes
  const handleSearchChange = (event) => {
    const query = event.target.value;
    setSearchQuery(query);
    // Filter videos based on search query
    const filtered = videos.filter(video =>
      video.channelName.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredVideos(filtered);
  };

  return (
    <div className='container'>
      <h1 className='text-center mt-5 pt-3'>Live News Channels</h1>
      {/* Search input */}
      <input
        type="text"
        placeholder="Search News Channels"
        value={searchQuery}
        onChange={handleSearchChange}
        className="form-control mb-3"
      />
      {/* List of videos */}
      <div className='video-grid justify-content-around'>
        {filteredVideos.length > 0 ? (
          // Render filtered videos
          filteredVideos.map((video, index) => (
            <VideoContainer key={index} videoLink={video.videoLink} />
          ))
        ) : (
          // If no filtered videos, render all videos
          videos.map((video, index) => (
            <VideoContainer key={index} videoLink={video.videoLink} />
          ))
        )}
      </div>
    </div>
  );
}

export default LiveNews;
