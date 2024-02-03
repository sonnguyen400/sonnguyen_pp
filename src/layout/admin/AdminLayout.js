import { useState } from 'react';
import Header from '~/component/main/admin/header';
import Sidebar from '~/component/main/admin/sidebar';
import clsx from 'clsx';
import Box from '~/component/base/box/Box';
function AdminLayout({ children }) {
    const [sidebar, setSidebar] = useState(false);
    return (
        <>
            <Header sidebar={sidebar} setSidebar={setSidebar} />
            <div
                className={clsx('fixed top-16 left-0', {
                    'w-16': !sidebar,
                    'w-40': sidebar,
                })}
            >
                <Sidebar state={sidebar} />
            </div>
            <div className={clsx('p-4 w-full flex justify-end')}>
                <Box
                    className={clsx('p-2 ', {
                        'w-[calc(100%-64px)]': !sidebar,
                        'w-[calc(100%-160px)]': sidebar,
                    })}
                >
                    {children}
                </Box>
            </div>
        </>
    );
}

export default AdminLayout;
