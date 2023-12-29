import "@styles/main.css";
import axios from "axios";
import { useEffect, useState } from "react";

function Main() {
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
      <h1>Hello World!</h1>
      <p>I`m insane</p>
      <a href="">AboutEvent page</a>
      <br />
      <br />
      <section className="events">
        {response.map((mongo) => (
          <div key={mongo.id}>
            <img src={mongo.imagePath} alt="" />
            <p>{mongo.locationText}</p>
            <p>{mongo.title}</p>
            <p>{mongo.description}</p>
          </div>
        ))}
      </section>
    </>
  );
}

export default Main;
