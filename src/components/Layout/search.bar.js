import React, { useState, useContext } from 'react'
import { FormControl, Form } from 'react-bootstrap';
import axios from 'axios';
import { TwitContext } from '../../utils/TwitContext';
import { SearchContext } from '../../utils/SearchContext';

const Searchbar = () => {
  const { response } = useContext(TwitContext);
  const [search, setSearch] = useState('');
  const [searchContext, setSearchContext] = useContext(SearchContext);

  const searchBar = async (event) => {
    const { value } = event.target;
    setSearch(value)
    if (search.length > 3) {
      let keyWord = await axios.get(`${process.env.REACT_APP_BASE}/api/posts/?twits=${search}`)
      setSearchContext(keyWord.data);
    } else {
      setSearchContext([])
    }
  }
  return (
    <div>
      <Form.Group>
        <Form.Label>What are you looking for?</Form.Label>
        <FormControl
          value={search}
          placeholder={"Type at least 3 letters to search"}
          onChange={(e) => searchBar(e)}
          aria-label="Default"
          aria-describedby="inputGroup-sizing-default"
        />
      </Form.Group>
    </div>
  )
}

export default Searchbar;