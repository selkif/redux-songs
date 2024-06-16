import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateSong } from "../redux/songSlice";
import { useNavigate, useParams } from "react-router-dom";

const Update = () => {
  const { id } = useParams(); // Get the song ID from the URL parameters
  const songs = useSelector((state) => state.songs.songs); // Get the songs array from the store
  const existingSong = songs?.find((song) => song.id === id) || {}; // Find the song to update
  const { title, artist, album, genre, year } = existingSong; // Extract song details

  // Initialize state with existing song data
  const [utitle, setTitle] = useState(title);
  const [uartist, setArtist] = useState(artist);
  const [ualbum, setAlbum] = useState(album);
  const [ugenre, setGenre] = useState(genre);
  const [uyear, setYear] = useState(year);

  const dispatch = useDispatch(); // Get the Redux dispatch function
  const navigate = useNavigate(); // Get the navigation function

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission

    // Create an updated song object
    const updatedSong = {
      id,
      title: utitle,
      artist: uartist,
      album: ualbum,
      genre: ugenre,
      year: uyear,
    };

    // Dispatch the updateSong action with the updated song data
    dispatch(updateSong(updatedSong));
    navigate("/"); // Redirect to the home page after updating
  };

  return (
    <div>
      <h3>Update Song</h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          name="title"
          value={utitle} // Set the input value to the current state
          onChange={(e) => setTitle(e.target.value)} // Update state on change
        />
        <label htmlFor="genre">Genre:</label>
        <input
          type="text"
          name="genre"
          value={ugenre}
          onChange={(e) => setGenre(e.target.value)}
        />
        <label htmlFor="artist">Artist:</label>
        <input
          type="text"
          name="artist"
          value={uartist}
          onChange={(e) => setArtist(e.target.value)}
        />
        <label htmlFor="album">Album:</label>
        <input
          type="text"
          name="album"
          value={ualbum}
          onChange={(e) => setAlbum(e.target.value)}
        />
        <label htmlFor="year">Released Year:</label>
        <input
          type="text"
          name="year"
          value={uyear}
          onChange={(e) => setYear(e.target.value)}
        />
        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default Update;
