import { ArrowBackOutlined } from "@material-ui/icons";
import { useLocation } from "react-router-dom";
import "./watch.scss";

export default function Watch() {
  //const location = useLocation();
  //console.log(location);
  return (
    <div className="watch">
      <div className="back">
        <ArrowBackOutlined />
        Home
      </div>
      <video className="video" autoPlay progress controls src="https://www.youtube.com/embed/D1Zpmy1I2Cw"/>
    </div>
  )
}
