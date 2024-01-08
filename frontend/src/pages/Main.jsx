import Video from "@videos/cof.mp4";
import Line from "@images/svgs/Line";
import Download from "@images/svgs/Download";
import Lake from "@images/lake.jpg";

import Events from "@components/general/Events";

function Main() {
  return (
    <main className="main">
      <section className="main-text">
        <h1 className="text__item">
          Now is the time to Pick a cool event and let&apos;s go party!
        </h1>
      </section>

      <section className="top-events">
        <p className="events__text">Top 5 Events</p>
        <Events />
      </section>

      <section className="videos">
        <p className="videos__text">Videos</p>
        <video controls src={Video}></video>
      </section>

      <Line />

      <section className="propose-event">
        <p className="propose__title">Wanna propose event?</p>

        <div className="propose__inputs">
          <input
            className="input__item"
            type="text"
            placeholder="Enter organizer name"
          />

          <input
            className="input__item"
            type="text"
            placeholder="Enter e-mail"
          />

          <label className="label__item photo">
            <p className="label__text"> Upload a photo</p>
            <input className="input__item" type="file" accept="image/*" />
            <Download />
          </label>

          <input
            className="input__item"
            type="text"
            placeholder="Choose date and time"
          />

          <input
            className="input__item"
            type="text"
            placeholder="Enter location"
          />

          <input className="input__item" type="text" placeholder="Enter link" />

          <input
            className="input__item describe"
            type="text"
            placeholder="Describe the Event"
          />

          <button className="submit__button">
            <p className="button__text">Submit</p>
          </button>
        </div>
      </section>

      <section className="about">
        <p className="about__text">
          Lörem ipsum hupp hexar, i martad. Hjulboja dest röpeck är sagisk.
          Varor är i paran. Sode pretil, att solupp. Agt podda tere. Varor är i
          paran. <br /> <br />
          Fude repektig stalker på kroren men jönade blippbetalning gru Dörar
          teligt än spere, plangiu. Nysk tina. Fur decing tritt benas nygt
          stenost. Autona nilig.
        </p>
        <img className="about__image" src={Lake} alt="" />
      </section>

      <section className="subscribe">
        <p className="subscribe__title">Subscribe to news in your city</p>
        <div className="subscribe__inputs">
          <input
            className="input__item"
            type="text"
            placeholder="Enter your name"
          />
          <input
            className="input__item"
            type="text"
            placeholder="Enter your city"
          />
          <input
            className="input__item"
            type="text"
            placeholder="Enter e-mail"
          />
          <input
            className="input__item"
            type="text"
            placeholder="Enter phone number (optional)"
          />
          <button className="submit__button">
            <p className="button__text">Subscribe</p>
          </button>
        </div>
      </section>
    </main>
  );
}

export default Main;
