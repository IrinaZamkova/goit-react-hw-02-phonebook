import React from "react";
import { FilterBox, FilterInput } from "./conponents.styled";
import PropTypes from "prop-types";

export default function Filter({ value, onChangeFilter }) {
  return (
    <FilterBox>
      <label htmlFor="filter">Find contacts by name </label>
      <FilterInput
        type="text"
        id="filter"
        placeholder="search..."
        value={value}
        onChange={(e) => onChangeFilter(e.target.value)}
      ></FilterInput>
    </FilterBox>
  );
}
Filter.propTypes = {
  onChangeFilter: PropTypes.func,
  value: PropTypes.string,
};
