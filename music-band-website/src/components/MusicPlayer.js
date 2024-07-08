import React, { useState, useEffect } from 'react';
import ReactPlayer from 'react-player';
import axios from 'axios';

const MusicPlayer = () => {
  const [songs, setSongs] = useState([]);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);

  useEffect(() => {
    axios.get('api/songs')
      .then(response => {
        setSongs(response.data);
      })
      .catch(error => {
        console.error('Error fetching songs: ', error);
      });
  }, []);

  const playNextSong = () => {
    setCurrentSongIndex(prevIndex => (prevIndex + 1) % songs.length);
  };

  const playPreviousSong = () => {
    setCurrentSongIndex(prevIndex => (prevIndex - 1 + songs.length) % songs.length);
  };

  return (
    <div>
      <h2>Music Player</h2>
      {songs.length > 0 && (
        <ReactPlayer
          url={songs[currentSongIndex].url}
          controls
          playing
          onEnded={playNextSong}
        />
      )}
      <button onClick={playPreviousSong}>Previous</button>
      <button onClick={playNextSong}>Next</button>
    </div>
  );
};

export default MusicPlayer;