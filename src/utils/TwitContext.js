import React, { createContext } from 'react';
import { useFetch } from './useFetch';

export const TwitContext = createContext();

export const TwitContextProvider = (props) => {
  const res = useFetch('posts')
  return (
    <TwitContext.Provider value={res}>
      {props.children}
    </TwitContext.Provider>
  )
}