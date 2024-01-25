import SearchS from 'icon/SearchS';
import style from './style.module.scss';
import clsx from 'clsx';
function Search() {
    return (
        <div className={clsx(style.searchBar, 'w-fit inline-block')} tabIndex={-1}>
            <input placeholder="What is your next favorite ?" />
            <div className="w-[1px] bg-gray-300 scale-y-[0.6]"></div>
            <button className="px-6 hover:bg-gray-200 rounded-e-full">
                <div className="flex flex-row">
                    <SearchS fill="#333" />
                </div>
            </button>
        </div>
    );
}

export default Search;
