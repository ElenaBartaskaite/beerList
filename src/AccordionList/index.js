import style from './style.module.scss';
import React, { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle, faMinusCircle } from '@fortawesome/free-solid-svg-icons';

function AccordionList(props) {
    const [openItems, toggleOpen] = useState({});

    function toggleOpenItem (id) {
        let value = !openItems[id];
        toggleOpen({...openItems, [id]:value});
    }

    return (
        <div className={style.container}>
            {props.beers? props.beers.map( beer => 
                <ListItem beer = {beer} isOpen={!!openItems[beer.id]} toggleOpen={()=>toggleOpenItem(beer.id)}/>
            ):null}
            <button className={style.closeAll} onClick={() => toggleOpen({})}>Close all</button>
        </div>
    );
}

function ListItem(props) {
    return (
        <div className={style.listItem}>
            <div className={style.name} onClick={props.toggleOpen}>{props.beer.name}{props.isOpen?<FontAwesomeIcon icon={faMinusCircle} />:<FontAwesomeIcon icon={faPlusCircle} />}</div>
            {props.isOpen?
                <div>
                    <p>"{props.beer.tagline}"</p>
                    <p>{props.beer.description}</p>
                    <p>First brewed: {props.beer.first_brewed}</p>
                    <p>{props.beer.abv}%</p>
                </div>
            :null}
            
        </div>
    );
}

export default AccordionList;