import React, { createContext, useState, useEffect } from 'react';
import { getToken } from './index';
import axios from 'axios';

export const UserContext = createContext();

export const UserContextProvider = (props) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (getToken() !== null) {
      axios.get(`${process.env.REACT_APP_BASE}/api/users/auth`, {
        headers: {
          'Content-type': 'application/json',
          'x-auth-token': getToken()
        }
      }).then(res => {
        setUser(res.data)
      })
    }
  }, [])
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {props.children}
    </UserContext.Provider>
  )
}