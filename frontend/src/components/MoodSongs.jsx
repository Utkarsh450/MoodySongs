import React, { useState } from 'react';

const MoodSongs = () => {
  const [songs, setSongs] = useState([
    {
      title: "test_title_1",
      artist: "test_artist_1",
      url: "https://example.com/song1.mp3",
    },
    {
      title: "test_title_2",
      artist: "test_artist_2",
      url: "https://example.com/song2.mp3",
    },
    {
      title: "test_title_3",
      artist: "test_artist_3",
      url: "https://example.com/song3.mp3",
    },
    {
      title: "test_title_4",
      artist: "test_artist_4",
      url: "https://example.com/song4.mp3",
    },
  ]);

  return (
    <div className="mood-songs">
      <h2>Recommended Songs</h2>
      <ul>
       {songs.map((song, index) => (
  <div className='song' key={index}>
    <div className='title'>
        <h4>{song.title}</h4>
    <p>{song.artist}</p>
    </div>

    <div className='play-pause-button'>
        <i className='ri-pause-line'></i>
        <i className='ri-play-circle-fill'></i>
    </div>
  </div>
))}

      </ul>
    </div>
  );
};

export default MoodSongs;
