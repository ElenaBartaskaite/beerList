import style from './style.module.scss';

function AccordionList(props) {
    return (
        <div className={style.container}>
            {props.beers? props.beers.map(beer=> <div className={style.listItem}>{beer.name}</div>):null}
        </div>
    );
}

export default AccordionList;