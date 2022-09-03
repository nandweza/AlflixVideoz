import { 
  Add, 
  PlayArrow, 
  ThumbDownAltOutlined,
  ThumbUpAltOutlined 
} from "@material-ui/icons"
import { useState } from "react"
import "./listItem.scss"

export default function ListItem({index}) {
  const [isHovered, setIsHovered] = useState(false);
  const trailer = "https://www.youtube.com/embed/D1Zpmy1I2Cw";
  return (
    <div
     className="listItem"
     style={{left: isHovered && index * 225 - 50 + index * 2.5 }}
     onMouseEnter={() => setIsHovered(true)} 
     onMouseLeave={() => setIsHovered(false)}
    >
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSC1w6uSJ8Tg7ynNVeUbzbPpQap0eDk1Ay5Yw&usqp=CAU" alt="" />
      {isHovered && (
    <>
      <video src={trailer} autoPlay={true} loop />
      <div className="itemInfo">
        <div className="icons">
          <PlayArrow className="icon" />
          <Add className="icon" />
          <ThumbUpAltOutlined className="icon" />
          <ThumbDownAltOutlined className="icon" />
        </div>
        <div className="itemInfoTop">
          <span>1 hour 30 mins</span>
          <span className="limit">+16</span>
          <span>2010</span>
        </div>
        <div className="desc">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Maxime mollitia, molestiae quas vel sint commodi
        </div>
        <div className="genre">Action</div>
      </div>
    </>
        )}
    </div>
  );
}