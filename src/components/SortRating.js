import React, { useContext } from "react";
import { AppContext } from "./AppContext";

const SortRating = () => {

  const { setSort, selectedSort, setSelectedSort } = useContext(AppContext);

  const setSorting = (event) => {
    const value = event.target.value;
    if (value === "difficulty") {
      setSort({sortDifficulty: true, sortFunFactor: false });
      setSelectedSort(value);
    } else if (value === "fun") {
      setSort({sortDifficulty: false, sortFunFactor: true });
      setSelectedSort(value);
    } else if (value === "assignment") {
      setSort({ sortDifficulty: false, sortFunFactor: false });
      setSelectedSort(value);
    }
  }

  return (
    <div className="panel panel--action sort-rating">
      <h3 className="panel__title">Sorteer op opdracht of rating</h3>
      <ul className="sort-buttons">
        <li>
          <input
            type="radio"
            id="assignment"
            name="sortrating"
            value="assignment"
            checked={selectedSort === "assignment"}
            onChange={(event) => setSorting(event)}
          />
          <label htmlFor="assignment">Sorteer op opdracht</label>
        </li>
        <li>
          <input
            type="radio"
            id="difficulty"
            name="sortrating"
            value="difficulty"
            checked={selectedSort === "difficulty"}
            onChange={(event) => setSorting(event)}
          />
          <label htmlFor="difficulty">Sorteer op Moeilijk</label>
        </li>
        <li>
          <input
            type="radio"
            id="fun"
            name="sortrating"
            value="fun"
            checked={selectedSort === "fun"}
            onChange={(event) => setSorting(event)}
          />
          <label htmlFor="fun">Sorteer op Leuk</label>
        </li>
      </ul>
    </div>
  );
};

export default SortRating;
