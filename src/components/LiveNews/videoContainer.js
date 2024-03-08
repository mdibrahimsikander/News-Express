import React from 'react';
import PropTypes from 'prop-types';

const VideoContainer = ({ videoLink }) => {
  return (
    <div className='container mt-5 p-auto text-center'>
      <iframe
        width="560"
        height="315"
        src={videoLink}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  );
};

VideoContainer.propTypes = {
  videoLink: PropTypes.string.isRequired,
};

export default VideoContainer;
