import React from 'react';
import VideoContainer from './videoContainer';  // Ensure this is the correct path

const LiveNews = () => {
  return (
    <div className='container'>
        <h1 className='text-center mt-5 pt-3'>Live News</h1>
        {/* List of all live previews */}
        <div className='container text-center d-lg-flex'>  
          <VideoContainer videoLink="https://www.youtube.com/embed/3Dee-mbAKF0?si=l_-YiIdNqrIvCYWq" />
          <VideoContainer videoLink="https://www.youtube.com/embed/Nq2wYlWFucg?si=kegwDLkyc-i5sgut" />
        </div>
    </div>
  );
}

export default LiveNews;