import clsx from 'clsx';
import { Link } from 'react-router-dom';
import { DashBoard, Boxes, Category, UserAlt } from 'icon';
import style from './style.module.scss';
import Percentage from '~/resources/icon/icons/Percentage';
import { IdCard } from '~/resources/icon';
import Box from '~/component/base/box/Box';
function Sidebar({ className, state, ...props }) {
    console.log(state);
    return (
        <Box className={clsx(className, 'px-2 shadow-sm rounded-2xl')}>
            <div className="w-full">
                <Link
                    className={clsx(style.sidebarItem, {
                        [style.spread]: !state,
                        [style.reduce]: state,
                    })}
                >
                    <DashBoard fill="#374151" />
                    <span className={style.content}>Dashboard</span>
                </Link>
                <Link
                    className={clsx(style.sidebarItem, {
                        [style.spread]: !state,
                        [style.reduce]: state,
                    })}
                    to={'/admin/product-manage'}
                >
                    <Boxes fill="#374151" />
                    <span className={style.content}>Product</span>
                </Link>

                <Link
                    className={clsx(style.sidebarItem, {
                        [style.spread]: !state,
                        [style.reduce]: state,
                    })}
                >
                    <Percentage fill="#374151" width={15} height={15} />
                    <span className={style.content}>Discount</span>
                </Link>
                <Link
                    className={clsx(style.sidebarItem, {
                        [style.spread]: !state,
                        [style.reduce]: state,
                    })}
                >
                    <Category fill="#374151" />
                    <span className={style.content}>Category</span>
                </Link>
                <Link
                    className={clsx(style.sidebarItem, {
                        [style.spread]: !state,
                        [style.reduce]: state,
                    })}
                >
                    <UserAlt fill="#374151" />
                    <span className={style.content}>Response</span>
                </Link>
                <Link
                    className={clsx(style.sidebarItem, {
                        [style.spread]: !state,
                        [style.reduce]: state,
                    })}
                >
                    <IdCard fill="#374151" />
                    <span className={style.content}>Account</span>
                </Link>
            </div>
        </Box>
    );
}

export default Sidebar;
