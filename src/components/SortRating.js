import React, { useContext } from "react";
import { AppContext } from "./AppContext";

const SortRating = () => {

  const { sort, setSort } = useContext(AppContext);

  console.log("sort difficulty is", sort.sortDifficulty);
  console.log("sort funfactor is", sort.sortFunFactor)

  const setSorting = (event) => {
    const value = event.target.value;
    if (value === "difficulty") {
      setSort({sortDifficulty: true, sortFunFactor: false });
    } else if (value === "fun") {
      setSort({sortDifficulty: false, sortFunFactor: true });
    } else if (value === "assignment") {
      setSort({ sortDifficulty: false, sortFunFactor: false });
    }
  }
console.log("sort is", sort)
  // const sortRating = () => {
  //   if (sort === null || sort === "desc") {
  //     songs.sort((a, b) => a.rating - b.rating);
  //     setSort("asc");
  //   } else if (sort === "asc") {
  //     songs.sort((a, b) => b.rating - a.rating);
  //     setSort("desc");
  //   }
  // };

  return (
    <div className="sort-rating">
      <h3>Sorteer op opdracht of rating</h3>
      <ul className="sort-buttons">
        <li>
          <input
            type="radio"
            id="assignment"
            name="sortrating"
            value="assignment"
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
            onChange={(event) => setSorting(event)}
          />
          <label htmlFor="fun">Sorteer op Leuk</label>
        </li>
      </ul>
    </div>
  );
};

export default SortRating;
