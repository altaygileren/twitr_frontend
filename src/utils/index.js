import axios from 'axios';
let TOKEN_KEY = 'jwt';

// Set token
export const setToken = (value, tokenKey = TOKEN_KEY) => {
  if (localStorage) {
    localStorage.setItem(tokenKey, JSON.stringify(value));
  }
};
// Get token
export const getToken = (tokenKey = TOKEN_KEY) => {
  if (localStorage && localStorage.getItem(tokenKey)) {
    return JSON.parse(localStorage.getItem(tokenKey));
  }
  return null
}

// Register new user
export const registerUser = async info => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  }
  const body = JSON.stringify({ ...info })

  try {
    const user = await axios.post(`${process.env.REACT_APP_BASE}/api/users`, body, config)
    setToken(user.data.token);
    return user;
  } catch (err) {
    return err.response;
  }
}

// Log in user
export const loginUser = async info => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  }
  const body = JSON.stringify({ ...info })

  try {
    const user = await axios.post(`${process.env.REACT_APP_BASE}/api/users/auth`, body, config)
    setToken(user.data.token);
    return user;
  } catch (err) {
    return err.response;
  }
}

// Log user out
export const logOut = (tokenKey = TOKEN_KEY) => {
  if (localStorage) {
    localStorage.removeItem(tokenKey);
    sessionStorage.removeItem(tokenKey);
  }
}

// Get News articles
export const articles = async () => {
  const newsArticles = await axios.get(`http://newsapi.org/v2/top-headlines?country=us&apiKey=${process.env.REACT_APP_NEWS_API_KEY}`)
  return newsArticles;
}