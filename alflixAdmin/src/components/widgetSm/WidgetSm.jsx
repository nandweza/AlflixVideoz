import "./widgetSm.css";
import { Visibility } from "@material-ui/icons";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

export default function WidgetSm() {
  const [newUsers, setNewUsers] = useState([]);

  useEffect(() => {
    const getNewUsers = async () => {
      try {
        const res = await axios.get("/users?new=true", {
          headers: {
            token:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzMTI0MDAyODA0YmZlY2I3M2VjMmEwNyIsImlzQWRtaW4iOiJ0cnVlIiwiaWF0IjoxNjYyMzgyOTc2LCJleHAiOjE2NjI2NDIxNzZ9._GzeHJ0HjlS5hAzrrAoHXmeqNksdfaZZw3ebMIFhYvg"
          },
        });
        setNewUsers(res.data);
      } catch(err) {
        console.log(err);
      }
    };
    getNewUsers();
  }, []);
  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">New Join Members</span>
      <ul className="widgetSmList">
        {newUsers.map(user => (
          <li className="widgetSmListItem">
          <img
            src={user.profilePic || "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpD4qTvizf1Un83KEUwwpZr0uM_cEoE-sk3w&usqp=CAU"}
            alt=""
            className="widgetSmImg"
            />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">{user.username}</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>
        ))}
      </ul>
    </div>
  );
}
