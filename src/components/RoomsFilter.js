import React from "react";
import { useContext } from "react";
import { RoomContext } from "../context";
import Title from "./Title";
// get all unique values
const getUnique = (items, value) => {
  return [...new Set(items.map(item => item[value]))];
};

const RoomsFilter = ({ rooms }) => {
  // react hooks
  const context = useContext(RoomContext);
  const {
    handleChange,
    type,
    gender,
    price,
    minPrice,
    maxPrice,
    vaccine,
    steril
  } = context;

  // get unique types
  let types = getUnique(rooms, "type");
  // add all
  types = ["All", ...types];
  // map to jsx
  types = types.map((item, index) => (
    <option key={index} value={item}>
      {item}
    </option>
  ));
  // get unique gender
  let people = getUnique(rooms, "gender");
  people = ["All", ...people];
  people = people.map((item, index) => (
    <option key={index} value={item}>
      {item}
    </option>
  ));

  return (
    <section className="filter-container">
      <Title title="search pets" />
      <form className="filter-form">
        {/* select type */}
        <div className="form-group">
          <label htmlFor="type">PetType</label>
          <select
            name="type"
            id="type"
            onChange={handleChange}
            className="form-control"
            value={type}
          >
            {types}
          </select>
        </div>
        {/* end of select type */}
        {/* gender  */}
        <div className="form-group">
          <label htmlFor="gender">gender</label>
          <select
            name="gender"
            id="gender"
            onChange={handleChange}
            className="form-control"
            value={gender}
          >
            {people}
          </select>
        </div>
        {/* end of gender */}
        {/* pet price */}
        <div className="form-group">
          <label htmlFor="price">PetPrice Rp{price}</label>
          <input
            type="range"
            name="price"
            min={minPrice}
            max={maxPrice}
            id="price"
            value={price}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        {/* end pet price*/}
        {/* vaccinated */}
        <div className="form-group">
          <div className="single-extra">
            <input
              type="checkbox"
              name="vaccine"
              id="vaccine"
              checked={vaccine}
              onChange={handleChange}
            />
            <label htmlFor="vaccine">Vaccinated</label>
          </div>
          {/* end of vaccinated */}
          {/* sterilled */}
          <div className="single-extra">
            <input
              type="checkbox"
              name="steril"
              id="steril"
              checked={steril}
              onChange={handleChange}
            />
            <label htmlFor="steril">Sterilized</label>
          </div>
        </div>
        {/* end of sterilled */}
      </form>
    </section>
  );
};

export default RoomsFilter;
