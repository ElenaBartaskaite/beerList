import style from './style.module.scss';
import React, { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle, faMinusCircle, faBeer } from '@fortawesome/free-solid-svg-icons';

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
            {Object.entries(openItems).length === 0? null : <button className={style.closeAll} onClick={() => toggleOpen({})}>Close all</button>}
        </div>
    );
}

function ListItem(props) {
    return (
        <div className={style.listItem}>
            <div className={props.isOpen?style.selectedName:style.name} onClick={props.toggleOpen}>{props.beer.name}{props.isOpen?<FontAwesomeIcon icon={faMinusCircle} />:<FontAwesomeIcon icon={faPlusCircle} />}</div>
            {props.isOpen?
                <div className={style.description}>
                    <p className={style.tagline}>"{props.beer.tagline}"</p>
                    <p>{props.beer.description}</p>
                    <p>First brewed: <b>{props.beer.first_brewed}</b></p>
                    <p className={style.drunkPrecent}>{props.beer.abv}% <FontAwesomeIcon icon={faBeer} /></p>
                </div>
            :null}
            
        </div>
    );
}

export default AccordionList;