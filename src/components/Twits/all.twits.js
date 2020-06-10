import React, { useContext } from "react";
import Singletwit from './single.twit';
import { TwitContext } from '../../utils/TwitContext';
import { SearchContext } from '../../utils/SearchContext';
import Createtwit from './create.twit';
import Search from '../Layout/search.bar';

const Alltwits = () => {
  const { response } = useContext(TwitContext);
  const [search] = useContext(SearchContext);
  let twits = search.length > 0 ? search : response
  return (
    <div>
      <Search />
      <Createtwit />
      <div>
        {
          twits.map((twit) => (
            <div key={twit._id}>
              <Singletwit twit={twit} />
            </div>
          ))
        }
      </div>
    </div >
  )
}

export default Alltwits;