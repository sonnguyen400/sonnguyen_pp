import clsx from 'clsx';
import { AngleRight } from '~/resources/icon';
function ListItem({ children, className, icon, ...props }) {
    return (
        <div
            className={clsx(className, 'flex items-center py-2 pl-1 border-b justify-between hover:bg-slate-100')}
            {...props}
        >
            <div className="flex items-center">
                {icon && <div className="mr-4 pb-1">{icon}</div>}
                <div className="flex-1">{children}</div>
            </div>
            <AngleRight fill="#333" />
        </div>
    );
}

export default ListItem;
