import React from 'react';
import axios from 'axios';

class VideoGallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: [],
      error: null
    };
  }

  componentDidMount() {
    axios.get('https://api.example.com/videos')
      .then(response => {
        this.setState({ videos: response.data });
      })
      .catch(error => {
        this.setState({ error: error });
      });
  }

  render() {
    const { videos, error } = this.state;

    if (error) {
      return <div>Error: {error.message}</div>;
    } else {
      return (
        <div>
          <h2>Video Gallery</h2>
          <div className="video-list">
            {videos.map(video => (
              <div key={video.id} className="video-item">
                <h3>{video.title}</h3>
                <iframe
                  title={video.title}
                  width="560"
                  height="315"
                  src={video.url}
                  frameBorder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            ))}
          </div>
        </div>
      );
    }
  }
}

export default VideoGallery;