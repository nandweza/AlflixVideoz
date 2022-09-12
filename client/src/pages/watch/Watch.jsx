import { ArrowBackOutlined } from "@material-ui/icons";
import { useLocation, Link } from "react-router-dom";
import "./watch.scss";
import video from "../../0.mp4";

export default function Watch() {
  const location = useLocation();
  const movie = location.movie;
  return (
    <div className="watch">
      <Link to="/">
        <div className="back">
          <ArrowBackOutlined />
          Home
        </div>
      </Link>
      <video className="video" autoPlay progress controls src={video}/*{movie.video}*/ />
    </div>
  );
}
