import "@styles/pages/main.scss";
import Video from "@videos/cof.mp4";

import Events from "@components/general/Events";

function App() {
  return (
    <section className="main">
      <h1 className="main-text">
        Now is the time to Pick a cool event and let&apos;s go party!
      </h1>

      <p className="top-events">Top 5 Events</p>
      <Events />

      <p className="videos">Videos</p>
      <video controls src={Video}></video>

      <hr />
    </section>
  );
}

export default App;
