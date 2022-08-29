import { InfoOutlined, PlayArrow } from "@material-ui/icons";
import "./featured.scss";

export default function Featured({type}) {
  return (
    <div className="featured">
      {type && (
        <div className="category">
          <span>{type === "movie" ? "Movies" : "Series"}</span>
          <select name="genre" id="genre">
            <option>Genre</option>
            <option value="adventure">Adventure</option>
            <option value="action">Action</option>
            <option value="sci-fi">Sci-fi</option>
            <option value="thriller">Thriller</option>
            <option value="horror">Horror</option>
            <option value="comedy">Comedy</option>
            <option value="crime">Crime</option>
            <option value="documentary">Documentary</option>
            <option value="High-school">High School</option>
            <option value="love-story">Love Story</option>
          </select>
        </div>
      )}
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKLd9IZP6X0c6UTaLIoNYMrzCzq5FUxkiTgA&usqp=CAU" alt="" />
      <div className="info">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKLd9IZP6X0c6UTaLIoNYMrzCzq5FUxkiTgA&usqp=CAU" alt="" />
        <span className="desc">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
        molestiae quas vel sint commodi repudiandae consequuntur
        </span>
        <div className="buttons">
          <button className="play">
            <PlayArrow />
            <span>Play</span>
          </button>
          <button className="more">
            <InfoOutlined />
            <span>Info</span>
          </button>
          </div>
      </div>
    </div>
  )
}
