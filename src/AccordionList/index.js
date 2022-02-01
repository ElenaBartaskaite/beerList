import style from './style.module.scss';

function AccordionList(props) {
    return (
        <div className={style.test}>
            {props.beers? props.beers.map(beer=> <p>{beer.name}</p>):null}
        </div>
    );
}

export default AccordionList;