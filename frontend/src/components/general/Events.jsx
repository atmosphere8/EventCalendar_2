import "@styles/components/general/events.scss";
import Point from "@images/svgs/Point.jsx";

import { useEffect, useState } from "react";
import axios from "axios";
import { useFilterContext } from "@contexts/FilterContext";

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
      <section className="events">
        {filteredResponse.map((mongo) => (
          <div className="event" key={mongo._id}>
            <img className="event__image" src={mongo.imagePath} alt="" />
            <div className="event__location">
              <Point />
              <p className="location__text">Location: {mongo.location}</p>
            </div>
            <p className="event__title">Title: {mongo.title}</p>
            <p className="event__description">
              Description: {mongo.description}
            </p>

            <a className="event__button" href={`/about/${mongo._id}`}>
              <p className="button__text">MORE ABOUT EVENT</p>
            </a>
          </div>
        ))}
      </section>
    </>
  );
}

export default Events;
