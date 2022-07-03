import React, { useState } from "react";
import * as S from "./SearchBar.styles";
import PropTypes from "prop-types";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const SearchBar = ({ children, handleChange, className }) => {
  const [query, setQuery] = useState();
  return (
    <S.SearchContainer className={className}>
      <S.StyledSection>
        <S.SearchForm>
          <S.Input
            placeholder="...Search"
            onChange={(e) => {
              e.preventDefault();
              handleChange(setQuery(e.target.value));
            }}
          />
          <S.SearchButton icon={faSearch} type="submit" />
        </S.SearchForm>
        {children}
      </S.StyledSection>
    </S.SearchContainer>
  );
};

SearchBar.propTypes = {
  children: PropTypes.node,
  handleChange: PropTypes.func,
};

export default SearchBar;
