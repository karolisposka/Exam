import React from "react";
import * as S from "./SearchBar.styles";
import PropTypes from "prop-types";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const SearchBar = ({ handleChange, className, value }) => {
  return (
    <S.SearchForm className={className}>
      <S.Input
        value={value}
        placeholder="...Search"
        onChange={(e) => {
          handleChange(e.target.value);
        }}
      />
      <S.SearchButton icon={faSearch} type="submit" />
    </S.SearchForm>
  );
};

SearchBar.propTypes = {
  children: PropTypes.node,
  handleChange: PropTypes.func.isRequired,
};

export default SearchBar;
