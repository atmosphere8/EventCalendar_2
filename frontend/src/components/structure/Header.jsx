import "@styles/components/structure/header.scss";
import Arrow from "@images/svgs/Arrow.jsx";
import Menu from "@images/svgs/Menu.jsx";
import { useFilterContext } from "@contexts/FilterContext";

function Header() {
  const { setFilter } = useFilterContext();

  const handleFilterClick = (filter) => {
    setFilter(filter);
  };

  return (
    <>
      <header>
        <nav>
          <a className="nav__item item-logo" href="/">
            Logo
          </a>
          <a className="nav__item  item-events" href="/">
            Events
          </a>
          <a className="nav__item item-propose" href="/">
            Propose Event
          </a>
        </nav>
        <div className="filter">
          <button className="filter__item location">
            <p>
              Location Filter
              <Arrow />
            </p>

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
          <button className="filter__item title">
            <p>
              Title Filter
              <Arrow />
            </p>

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
          <button className="filter__item description">
            <p>
              Description Filter
              <Arrow />
            </p>

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

        <div className="burger-menu">
          <Menu />
          <div className="menu"></div>
        </div>
      </header>
    </>
  );
}

export default Header;
