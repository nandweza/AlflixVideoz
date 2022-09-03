//import { AcUnit } from "@material-ui/icons"
import { useEffect } from "react";
import { useState } from "react";
import Featured from "../../components/featured/Featured";
import List from "../../components/list/List";
import Navbar from "../../components/navbar/Navbar"
import "./home.scss";
import axios from "axios";

const Home = ({type}) => {
  const [lists, setLists] = useState([]);
  const [genre, setGenre] = useState(null);

  useEffect(() => {
    const getRandomLists = async () => {
      try{
        const res = await axios.get(
          `lists${type ? "?type=" + type : ""}${genre ? "&genre=" + genre : ""}`,{
            headers:{
              token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzMTI0MDAyODA0YmZlY2I3M2VjMmEwNyIsImlzQWRtaW4iOiJ0cnVlIiwiaWF0IjoxNjYyMjI1NjQ1LCJleHAiOjE2NjI0ODQ4NDV9.75pQGjr9MMV1fFhvgG2fQDCRyjHhTtc5VLKx17ch_as"
            }
          }
        );
        //console.log(res);
        setLists(res.data);
      } catch(err) {
        console.log(err);
      }
    };
    getRandomLists();
  }, [type, genre]);
  return (
    <div className='home'>
      <Navbar />
      <Featured type={type} />
      {lists.map((list) => (
        <List list={list} />
      ))}
    </div>
  );
};

export default Home