import { fetchSong, deleteSong } from "../redux/songSlice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "@emotion/styled";
import { flexbox, space, layout, color } from "styled-system";


const SongCard = styled.div`
  ${flexbox}
  ${space}
  ${layout}
  ${color}
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 16px;
  margin-bottom: 16px;
  width: 240px; // Fixed width
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const SongList = styled.div`
  ${flexbox}
  ${space}
  ${layout}
  ${color}
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;

export default function Songs() {
  const dispatch = useDispatch();
  const songs = useSelector((state) => state.songs.songs);

  useEffect(() => {
    dispatch(fetchSong());
  }, [dispatch]);

  const handleDelete = async (id) => {
    await dispatch(deleteSong({ id }));
    dispatch(fetchSong());
  };

  return (
    <SongList m={4}>
      {songs.length > 0 ? (
        songs.map((song) => (
          <SongCard key={song.id} m={2}>
            
            <h1>{song.title}</h1>
            <h1>{song.genre}</h1>
            <h1>{song.artist}</h1>
            <h1>{song.album}</h1>
            <h1>{song.year}</h1>
            <div>
              <Link to={`/edit/${song.id}`}>Edit</Link>
              <button onClick={() => handleDelete(song.id)}>Delete</button>
            </div>
          </SongCard>
        ))
      ) : (
        <p>No songs available.</p>
      )}
    </SongList>
  );
}
