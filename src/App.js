import React, { useEffect, useState } from 'react';
import AccordionList from "./AccordionList";
import "./App.css";
import BackgroundAnimation from './BackgroundAnimation';
import Header from './Header';

const url = "https://api.punkapi.com/v2/beers"; 

function App() {
  const [beers, updateBeers] = useState(null);
  useEffect(() => {
    (async () => {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        updateBeers(data);
    })();
  }, []);

  return (
    <div >
      <BackgroundAnimation/>
      <div className='content'>
        <Header/>
        <AccordionList beers={beers}/>
      </div>
    </div>
  );
}

export default App;
