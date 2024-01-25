import style from './style.module.scss';
import { HomeF } from '~/resources/icon';
function Breadcum() {
    return (
        <div id="bread_cum" className={style.breadcum}>
            <HomeF />
            <a>MyBranch</a>
            <a href="#">MyBranch</a>
        </div>
    );
}

export default Breadcum;
