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
            <div className="fixed top-16  w-full flex p-2">
                <div className="flex-2 ">
                    <Sidebar className="px-2" state={sidebar} />
                </div>
                <div className="p-2 w-full h-[calc(100vh-64px)]">
                    <Box className={clsx('p-2 overflow-y-scroll')}>{children}</Box>
                </div>
            </div>
        </>
    );
}

export default AdminLayout;
