import style from './style.module.scss';
import React, { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle, faMinusCircle } from '@fortawesome/free-solid-svg-icons';

function AccordionList(props) {
    return (
        <div className={style.container}>
            {props.beers? props.beers.map(beer=> 
                <ListItem beer = {beer}/>
            ):null}
        </div>
    );
}

function ListItem(props) {
    const [open, toggleOpen] = useState(false);
    return (
        <div className={style.listItem}>
            <div className={style.name} onClick={()=>toggleOpen(!open)}>{props.beer.name}{open?<FontAwesomeIcon icon={faMinusCircle} />:<FontAwesomeIcon icon={faPlusCircle} />}</div>
            {open?
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