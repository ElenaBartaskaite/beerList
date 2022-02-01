
import React, { useEffect, useState } from 'react';
import AccordionList from "./AccordionList";

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
      <AccordionList beers={beers}/>
    </div>
  );
}

export default App;
