import React, { useState } from "react";
import { addSong, fetchSong } from "../redux/songSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function Create() {
  const [title, setTitle] = useState("");
  const [genre, setGenre] = useState("");
  const [artist, setArtist] = useState("");
  const [album, setAlbum] = useState("");
  const [year, setYear] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const newSong = {
      title,
      genre,
      artist,
      album,
      year,
    };

    dispatch(addSong(newSong));
    dispatch(fetchSong()); // Dispatch fetchSong after adding
    navigate("/");
  };

  return (
    <div>
      <h3>Add New Song</h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          name="title"
          onChange={(e) => setTitle(e.target.value)}
        />
        <label htmlFor="genre">Genre:</label>
        <input
          type="text"
          name="genre"
          onChange={(e) => setGenre(e.target.value)}
        />
        <label htmlFor="artist">Artist:</label>
        <input type="text" onChange={(e) => setArtist(e.target.value)} />
        <label htmlFor="album">Album:</label>
        <input
          type="text"
          name="album"
          onChange={(e) => setAlbum(e.target.value)}
        />
        <label htmlFor="year">Released Year:</label>
        <input
          type="text"
          name="year"
          onChange={(e) => setYear(e.target.value)}
        />
        <button type="submit"> Add</button>
      </form>
    </div>
  );
}
