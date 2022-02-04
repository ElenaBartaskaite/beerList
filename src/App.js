import React, { useEffect, useState } from 'react';
import AccordionList from "./AccordionList";
import "./App.scss";
import BackgroundAnimation from './BackgroundAnimation';
import Grid from './Grid';
import Header from './Header';

const url = "https://api.punkapi.com/v2/beers"; 

function App() {
  const [beers, updateBeers] = useState(null);
  const [isListChosen, toggleListType] = useState(true);

  useEffect(() => {
    (async () => {
        const response = await fetch(url);
        const data = await response.json();
        updateBeers(data);
    })();
  }, []);

  function sort(v1, v2, dir) {
    if (v1 > v2)
        return dir;
    if (v1 < v2)
        return -dir;
    return 0;
  }

  function sortByName (dir) {
    let sorted = [...beers];
    sorted.sort((beer1, beer2) => sort(beer1.name, beer2.name, dir));
    updateBeers(sorted);
  }

  function sortByDrunk (dir) {
    let sorted = [...beers];
    sorted.sort((beer1, beer2) => sort(beer1.abv, beer2.abv, dir));
    updateBeers(sorted);
  }

  return (
    <div >
      <BackgroundAnimation/>
      <div className='content'>
        <Header sortByName={sortByName} sortByDrunk={sortByDrunk} chooseListType={toggleListType} listType={isListChosen}/>
        {isListChosen?<AccordionList beers={beers}/>:<Grid beers = {beers}/>}
      </div>
    </div>
  );
}

export default App;
