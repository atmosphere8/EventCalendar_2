import "@styles/aboutevent.css";
import Events from "./Events.jsx";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function AboutEvent() {
  const { id } = useParams();
  const [item, setItem] = useState({});

  const fetchData = async () => {
    try {
      const response = await axios.get(`http://localhost:3000/test`);
      const selectedItem = response.data.find((item) => item._id === id);
      setItem(selectedItem);
      console.log(selectedItem);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  });

  return (
    <>
      <h1>About Page</h1>
      <section className="about">
        <div key={item._id}>
          <img src={item.imagePath} alt="" />
          <p>Location: {item.location}</p>
          <p>Title: {item.title}</p>
          <p>Description: {item.description}</p>
        </div>
      </section>

      <Events />
    </>
  );
}

export default AboutEvent;
