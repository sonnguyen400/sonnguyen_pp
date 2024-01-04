import Button from "~/components/base/Button";
import style from './style.module.scss';
import clsx from "clsx";
import DropDown from "~/components/base/DropdownMenu/DropdownMenu";
function TopHeader({ className }) {
    return (<div className={clsx(style.topHeader, className)}>
        <h1>LogoHere</h1>
        <div className={clsx(style.searchBar)}>
            <input placeholder="What is your next favorite ?" />
            <Button
                icon={
                    { "content": <i className="fi fi-br-search"></i> }
                }
            />
        </div>
        <Button
            icon={{
                "content": <i className="fi fi-rr-shopping-bag font-bold"></i>,
                "react": <i className="fi fi-sr-shopping-bag"></i>
            }}
            className="p-1 flex flex-row"
        >
            <span className="max-lg:hidden xl:max-2xl:inline-block">Giỏ hàng</span>
        </Button>
        <Button
            icon={{
                "content": <i className="fi fi-rr-document-signed"></i>,
                "react": <i className="fi fi-sr-document-signed"></i>,
            }}
            className="p-1 flex flex-row"
        >
            <span className="max-lg:hidden xl:max-2xl:inline-block">Tin tức</span>
        </Button>
        <Button
            icon={{
                "content": <i className="fi fi-bs-user-headset"></i>,
                "react": <i className="fi fi-ss-user-headset"></i>,
            }}
            className="p-1 flex flex-row"
        >
            <span className="max-lg:hidden xl:max-2xl:inline-block">Liên hệ</span>
        </Button>
        <Button
            icon={{
                "content": <i className="fi fi-rs-bell"></i>,
                "react": <i className="fi fi-ss-bell"></i>,
            }}
            className="p-1 flex flex-row"
        >
            <span className="max-lg:hidden xl:max-2xl:inline-block">Thông báo</span>
        </Button>
        <DropDown
            button={<Button className='p-1 flex flex-row '>Cá nhân</Button>}
            menu={[
                <Button className="py-2 px-4" key={1}>Trang cá nhân</Button>
            ]}
            pos={clsx("right-0")}
            className={style.menu}
        />
    </div >);
}

export default TopHeader;