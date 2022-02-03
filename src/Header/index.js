import style from './style.module.scss';

function Header() {
    return (
        <div>
            <h1 className={style.title}>Beer list</h1>
            <div className={style.navigation}>
                <button>Sort by: Name</button>
                <button>Sort by: Drunk</button>
                <button>List</button>
                <button>Grid</button>
            </div>
	    </div>
    );
}

export default Header;