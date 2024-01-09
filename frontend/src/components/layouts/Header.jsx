import Arrow from "@images/svgs/Arrow";
import Menu from "@images/svgs/Menu";
import { useFilterContext } from "@contexts/FilterContext";

function Header() {
  const { setFilter } = useFilterContext();

  const handleFilterClick = (filter) => {
    setFilter(filter);
  };

  return (
    <>
      <header className="header">
        <nav>
          <a className="nav__item" href="">
            Logo
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
            <p>
              Location Filter
              <Arrow />
            </p>

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
            <p>
              Title Filter
              <Arrow />
            </p>

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
            <p>
              Description Filter
              <Arrow />
            </p>

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

        <section className="burger-menu">
          <section className="logo">
            <a href="" className="logo__text">
              Logo
            </a>
          </section>

          <section className="menu-button">
            <Menu />
          </section>
        </section>
      </header>
    </>
  );
}

export default Header;
