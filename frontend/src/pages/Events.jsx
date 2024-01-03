import { useEffect, useState } from "react";
import axios from "axios";
import { useFilterContext } from "@contexts/FilterContext";

import "@styles/events.css";

function Events() {
  const { applyFilter } = useFilterContext();
  const [response, setResponse] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:3000/test");
      setResponse(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const filteredResponse = applyFilter(response);

  return (
    <>
      <h1>Events</h1>
      <br />
      <section className="events">
        {filteredResponse.map((mongo) => (
          <div className="event" key={mongo._id}>
            <img src={mongo.imagePath} alt="" />
            <p>Location: {mongo.location}</p>
            <p>Title: {mongo.title}</p>
            <p>Description: {mongo.description}</p>
            <a href={`/about/${mongo._id}`}>More about</a>
          </div>
        ))}
      </section>
    </>
  );
}

export default Events;
