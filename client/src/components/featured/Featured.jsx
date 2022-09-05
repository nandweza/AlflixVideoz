import { InfoOutlined, PlayArrow } from "@material-ui/icons";
import { useEffect } from "react";
import { useState } from "react";
import "./featured.scss";
import axios from "axios";

export default function Featured({type}) {
  const [content, setContent] = useState({});

  useEffect(() => {
    const getRandomContent = async () => {
      try {
        const res = await axios.get(`/movies/random?type=${type}`, {
          headers:{
            token: 
              "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzMTI0MDAyODA0YmZlY2I3M2VjMmEwNyIsImlzQWRtaW4iOiJ0cnVlIiwiaWF0IjoxNjYyMzcwOTM5LCJleHAiOjE2NjI2MzAxMzl9.gvZTbBZ5FucsiJQhXdeLIXxuoc8_vsWEpV_Fx2ZM0f8"
          },
        });
        setContent(res.data[0]);
      } catch(err) {
        console.log(err);
      }
    };
    getRandomContent();
  }, [type]);
  console.log(content);
  return (
    <div className="featured">
      {type && (
        <div className="category">
          <span>{type === "movies" ? "Movies" : "Series"}</span>
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
      <img src={content.img} alt="" />
      <div className="info">
        <img src={content.imgTitle} alt="" />
        <span className="desc">
          {content.desc}
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
