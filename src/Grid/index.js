import style from './style.module.scss';

function Grid(props) {
    return (
        <div className={style.container}>
            {props.beers? props.beers.map( beer => 
                <GridItem beer = {beer}/>
            ):null}
        </div>
    );
}

function GridItem(props) {
    return (
        <a className={style.item} href={props.beer.image_url}>
            <h2 className={style.name}>{props.beer.name}</h2>
            <div className={style.description}>
                <p>{props.beer.description}</p>
                <p>First brewed: <b>{props.beer.first_brewed}</b></p>
                <p className={style.drunkPrecent}>{props.beer.abv}%</p>
            </div>
        </a>
    )
}

export default Grid;