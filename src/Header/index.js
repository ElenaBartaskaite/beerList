import style from './style.module.scss';
import React, { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSort, faSortDown, faSortUp, faBars, faThLarge } from '@fortawesome/free-solid-svg-icons';

const notSorted = <FontAwesomeIcon icon={faSort} />;
const sortedDown = <FontAwesomeIcon icon={faSortDown} />;
const sortedUp = <FontAwesomeIcon icon={faSortUp} />;

function Header(props) {
    const [nameSortIcon, updateNameIcon] = useState(notSorted);
    const [drunkSortIcon, updateDrunkIcon] = useState(notSorted);

    function sortByName(){
        if(nameSortIcon === sortedDown) {
            updateNameIcon(sortedUp);
            props.sortByName(-1);
        } else {
            updateNameIcon(sortedDown);
            props.sortByName(1);
        }
        updateDrunkIcon(notSorted);
    }

    function sortByDrunk(){
        if(drunkSortIcon === sortedDown) {
            updateDrunkIcon(sortedUp);
            props.sortByDrunk(-1);
        } else {
            updateDrunkIcon(sortedDown);
            props.sortByDrunk(1);
        }

        updateNameIcon(notSorted);
    }

    return (
        <div>
            <h1 className={style.title}>Beer list</h1>
            <div className={style.navigation}>
                <span>
                    <button onClick={sortByName}>{nameSortIcon} Name</button>
                    <button onClick={sortByDrunk}>{drunkSortIcon} Drunk</button>
                </span>
                <span>
                    <button className={props.listType? style.chosen:null} onClick={()=>props.chooseListType(true)}><FontAwesomeIcon icon={faBars} /></button>
                    <button className={props.listType? null:style.chosen} onClick={()=>props.chooseListType(false)}><FontAwesomeIcon icon={faThLarge} /></button>
                </span>
            </div>
	    </div>
    );
}

export default Header;