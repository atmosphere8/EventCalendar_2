import "@styles/header.css";
import { useFilterContext } from "@contexts/FilterContext";

function Header() {
  const { setFilter } = useFilterContext();

  const handleFilterClick = (filter) => {
    setFilter(filter);
  };
  return (
    <>
      <header>
        <div className="nav">
          <a className="nav__item" href="/">
            Main page
          </a>
        </div>

        <div className="filter">
          <button className="filter__item">
            <p>Location Filter</p>
            <div className="menu-location">
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
            <div className="menu-title">
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
            <div className="menu-description">
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
        </div>
      </header>
    </>
  );
}

export default Header;
