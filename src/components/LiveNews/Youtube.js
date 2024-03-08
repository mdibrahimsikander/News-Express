import React from 'react';
import YouTube from 'react-youtube';

class YouTubeVideo extends React.Component {
  render() {
    const opts = {
      height: '390', // Set video height
      width: '640',  // Set video width
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 1,  // Auto-play the video on load
        origin: 'http://localhost:3000' // Important for CORS
      },
    };

    return <YouTube videoId="YOUR_VIDEO_ID" opts={opts} onReady={this._onReady} />;
  }

  _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }
}

export default YouTubeVideo;
