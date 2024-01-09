import Arrow from "@images/svgs/Arrow";
import { useFilterContext } from "@contexts/FilterContext";

function Footer() {
  const { setFilter } = useFilterContext();

  const handleFilterClick = (filter) => {
    setFilter(filter);
  };

  return (
    <>
      <footer>
        <section className="logo">
          <p className="logo__text">LO</p>
        </section>
        <nav>
          <a className="nav__item" href="">
            Contact
          </a>
          <a className="nav__item" href="">
            Events
          </a>
          <a className="nav__item" href="">
            Propose events
          </a>
        </nav>
        <section className="filter">
          <button className="filter__item">
            <p>Location Filter</p>
            <Arrow />

            <div className="menu">
              <button
                className="menu__item"
                onClick={() => handleFilterClick("")}
              >
                All
              </button>
              <button
                className="menu__item"
                onClick={() => handleFilterClick("Forest")}
              >
                Forest
              </button>
              <button
                className="menu__item"
                onClick={() => handleFilterClick("Lake")}
              >
                Lake
              </button>
              <button
                className="menu__item"
                onClick={() => handleFilterClick("River")}
              >
                River
              </button>
            </div>
          </button>
          <button className="filter__item">
            <p>Title Filter</p>
            <Arrow />

            <div className="menu">
              <button
                className="menu__item"
                onClick={() => handleFilterClick("")}
              >
                All
              </button>
              <button
                className="menu__item"
                onClick={() => handleFilterClick("Kyrksjön")}
              >
                Kyrksjön
              </button>
              <button
                className="menu__item"
                onClick={() => handleFilterClick("Judarn")}
              >
                Judarn
              </button>
              <button
                className="menu__item"
                onClick={() => handleFilterClick("Mälaren")}
              >
                Mälaren
              </button>
              <button
                className="menu__item"
                onClick={() => handleFilterClick("Glafsfjorden")}
              >
                Glafsfjorden
              </button>
              <button
                className="menu__item"
                onClick={() => handleFilterClick("Ärtingen")}
              >
                Ärtingen
              </button>
            </div>
          </button>
          <button className="filter__item">
            <p>Description Filter</p>
            <Arrow />

            <div className="menu">
              <button
                className="menu__item"
                onClick={() => handleFilterClick("")}
              >
                All
              </button>
              <button
                className="menu__item"
                onClick={() => handleFilterClick("Favourite")}
              >
                Favourite
              </button>
              <button
                className="menu__item"
                onClick={() => handleFilterClick("Beautiful")}
              >
                Beautiful
              </button>
            </div>
          </button>
        </section>
      </footer>
    </>
  );
}

export default Footer;
