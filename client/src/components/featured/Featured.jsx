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
          </select>
        </div>
      )}
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKLd9IZP6X0c6UTaLIoNYMrzCzq5FUxkiTgA&usqp=CAU" alt="" />
      <div className="info">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKLd9IZP6X0c6UTaLIoNYMrzCzq5FUxkiTgA&usqp=CAU" alt="" />
        <span className="desc">
          nfihddddddddddddddddddddddddhfddddddddddddddddddf
          nfihddddddddddddddddddddddddhfddddddddddddddddddf
          nfihddddddddddddddddddddddddhfddddddddddddddddddf
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
