import Search from '~/component/base/search';
import { BellS, Menu } from 'icon';
import PersonalSetting from '../../personalSetting/PersonalSetting';
import clsx from 'clsx';

function Header({ setSidebar, sidebar }) {
    return (
        <div className="px-4 w-full h-16 flex flex-row items-center justify-between fixed top-0 bg-white">
            <div className="flex items-center">
                <button
                    className={clsx('p-2 rounded-lg  mr-3', {
                        'bg-gray-200': sidebar,
                    })}
                    onClick={() => setSidebar((state) => !state)}
                >
                    <Menu fill="#717171" />
                </button>
                <h3 className="mr-3">Admin</h3>
                <Search className="w-80" />
            </div>
            <div className="flex items-center">
                <BellS className="mr-3" />
                <PersonalSetting />
            </div>
        </div>
    );
}

export default Header;
