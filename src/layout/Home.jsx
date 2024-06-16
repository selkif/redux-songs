import Songs from "../components/Songs";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function Home() {
  const songs = useSelector((state) => state.songs.songs); // Select the songs array

  return (
    <div className="home">
      <div className="home-cont">
        <div className="navbar">
          <Link to="/Create"> create</Link>
          <div>
            <h1>songlisting app</h1>
            <p>songs</p>
          </div>
          <div>
            <p>{songs.length}</p> {/* Display the length of the songs array */}
          </div>
        </div>
      </div>
      <Songs />
    </div>
  );
}
