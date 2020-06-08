import React, { useState, createContext } from 'react';

export const SearchContext = createContext();

export const SearchContextProvider = (props) => {
  const res = useState([])
  return (
    <SearchContext.Provider value={res}>
      {props.children}
    </SearchContext.Provider>
  )
}