import "@styles/events.css";
import { useEffect, useState } from "react";
import axios from "axios";

function Events() {
  const [response, setResponse] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:3000/test");
      setResponse(response.data);
      console.log(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <h1>Events</h1>
      <br />
      <section className="events">
        {response.map((mongo) => (
          <div className="event" key={mongo._id}>
            <img src={mongo.imagePath} alt="" />
            <p>{mongo.locationText}</p>
            <p>{mongo.title}</p>
            <p>{mongo.description}</p>
            <a href={`/about/${mongo._id}`}>More about</a>
          </div>
        ))}
      </section>
    </>
  );
}

export default Events;
